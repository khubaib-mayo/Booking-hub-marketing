import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import fs from "fs/promises";
import path from "path";

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

      // TODO: Add email notification or webhook (e.g., Slack, Discord, or email API) to notify team of new submissions

      return res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
  });

  return httpServer;
}
