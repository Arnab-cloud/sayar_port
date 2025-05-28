import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { sendBadgeEmail } from "./services/emailService";
import { generateBadge } from "./services/badgeGenerator";

// Validation schemas
const sendBadgeSchema = z.object({
  email: z.string().email(),
  name: z.string().nullable().optional(),
  photoURL: z.string().nullable().optional()
});

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate badge image - supports both POST and GET
  const handleGenerateBadge = async (req: Request, res: Response) => {
    try {
      // Get data from either query params (GET) or body (POST)
      const data = req.method === 'GET' 
        ? {
            name: req.query.name,
            email: req.query.email,
            photoURL: req.query.photoURL
          }
        : req.body;
      
      // Validate data
      const validatedData = sendBadgeSchema.parse(data);
      
      // Generate badge image
      const badgeBuffer = await generateBadge({
        name: validatedData.name || "Guest",
        email: validatedData.email,
        photoURL: validatedData.photoURL || null
      });
      
      // Set appropriate headers
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      
      // For POST requests or when download=true, set as attachment
      if (req.method === 'POST' || req.query.download === 'true') {
        const filename = `${(validatedData.name || 'guest').toLowerCase().replace(/\s+/g, '_')}_visitor_sayar_basu.png`;
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      }
      
      res.send(badgeBuffer);
    } catch (error) {
      console.error("Error generating badge:", error);
      res.status(500).json({ success: false, message: "Failed to generate badge" });
    }
  };
  
  // Register both POST and GET handlers for badge generation
  app.post("/api/generate-badge", handleGenerateBadge);
  app.get("/api/generate-badge", handleGenerateBadge);

  // Send badge email on user sign-in
  app.post("/api/send-badge", async (req, res) => {
    try {
      const data = sendBadgeSchema.parse(req.body);
      console.log("Received badge email request for:", data.email);
      
      // Generate badge image
      const badgeBuffer = await generateBadge({
        name: data.name || "Guest",
        email: data.email,
        photoURL: data.photoURL || null
      });
      console.log("Badge generated successfully");
      
      // Send email with badge
      await sendBadgeEmail(
        data.email,
        data.name || "Guest",
        data.email,
        data.photoURL
      );
      console.log("Badge email sent successfully to:", data.email);
      
      res.status(200).json({ success: true, message: "Badge email sent successfully" });
    } catch (error) {
      console.error("Error sending badge email:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid request data", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ success: false, message: "Failed to send badge email" });
    }
  });

  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // Store contact in database (simplified for this example)
      // In a real application, you would save this to a database
      console.log("Contact form submission:", data);
      
      res.status(200).json({ success: true, message: "Message received" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ success: false, message: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
