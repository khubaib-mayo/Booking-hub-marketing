import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import fs from "fs/promises";
import path from "path";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const SUBMISSIONS_FILE = path.join(process.cwd(), "contact-submissions.json");

async function appendSubmission(entry: Record<string, unknown>) {
  let submissions: Record<string, unknown>[] = [];
  try {
    const raw = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      submissions = parsed;
    } else {
      const backupPath = SUBMISSIONS_FILE + ".backup-" + Date.now();
      await fs.rename(SUBMISSIONS_FILE, backupPath);
      console.warn(`contact-submissions.json was not an array, backed up to ${backupPath}`);
    }
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException).code;
    if (code !== "ENOENT") {
      const backupPath = SUBMISSIONS_FILE + ".backup-" + Date.now();
      try {
        await fs.rename(SUBMISSIONS_FILE, backupPath);
        console.warn(`contact-submissions.json was corrupt, backed up to ${backupPath}`);
      } catch {}
    }
  }
  submissions.push(entry);
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: result.error.errors[0].message });
      }

      const entry = {
        ...result.data,
        timestamp: new Date().toISOString(),
      };

      console.log("Contact form submission:", entry);

      await appendSubmission(entry);

      const safe = {
        name: escapeHtml(result.data.name),
        email: escapeHtml(result.data.email),
        company: escapeHtml(result.data.company || "Not specified"),
        tourCount: escapeHtml(result.data.tourCount || "Not specified"),
        subject: escapeHtml(result.data.subject || "General Inquiry"),
        message: escapeHtml(result.data.message),
      };

      try {
        await resend.emails.send({
          from: "Tournetix Website <noreply@app.tournetix.com>",
          to: "support@tournetix.com",
          replyTo: result.data.email,
          subject: `New Inquiry: ${safe.subject} from ${safe.name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #18181B; padding: 20px 24px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #F59E0B; font-size: 18px; margin: 0;">New Contact Form Submission</h1>
              </div>
              <div style="border: 1px solid #E4E4E7; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; color: #71717A; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${safe.name}</td></tr>
                  <tr><td style="padding: 8px 0; color: #71717A;">Email</td><td style="padding: 8px 0;"><a href="mailto:${encodeURI(result.data.email)}" style="color: #F59E0B;">${safe.email}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #71717A;">Company</td><td style="padding: 8px 0;">${safe.company}</td></tr>
                  <tr><td style="padding: 8px 0; color: #71717A;">Monthly Tours</td><td style="padding: 8px 0;">${safe.tourCount}</td></tr>
                  <tr><td style="padding: 8px 0; color: #71717A;">Subject</td><td style="padding: 8px 0;">${safe.subject}</td></tr>
                </table>
                <hr style="border: none; border-top: 1px solid #E4E4E7; margin: 16px 0;" />
                <p style="color: #71717A; font-size: 13px; margin: 0 0 8px;">Message:</p>
                <p style="margin: 0; line-height: 1.6;">${safe.message}</p>
                <hr style="border: none; border-top: 1px solid #E4E4E7; margin: 16px 0;" />
                <p style="color: #A1A1AA; font-size: 11px; margin: 0;">Sent from tournetix.com contact form · ${new Date().toLocaleString()}</p>
              </div>
            </div>
          `,
        });
      } catch (err) {
        console.error("Email notification failed:", err);
      }

      return res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
  });

  return httpServer;
}
