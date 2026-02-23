import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

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

      console.log("Contact form submission:", {
        ...result.data,
        timestamp: new Date().toISOString(),
      });

      return res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
  });

  return httpServer;
}
