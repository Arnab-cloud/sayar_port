import { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { generateBadge } from "../server/services/badgeGenerator";

const sendBadgeSchema = z.object({
	email: z.string().email(),
	name: z.string().nullable().optional(),
	photoURL: z.string().nullable().optional(),
});

const handleGenerateBadge = async (req: VercelRequest, res: VercelResponse) => {
	try {
		// Get data from either query params (GET) or body (POST)
		const data =
			req.method === "GET"
				? {
						name: req.query.name,
						email: req.query.email,
						photoURL: req.query.photoURL,
				  }
				: req.body;

		// Validate data
		const validatedData = sendBadgeSchema.parse(data);

		// Generate badge image
		const badgeBuffer = await generateBadge({
			name: validatedData.name || "Guest",
			email: validatedData.email,
			photoURL: validatedData.photoURL || null,
		});

		// Set appropriate headers
		res.setHeader("Content-Type", "image/png");
		res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
		res.setHeader("Pragma", "no-cache");
		res.setHeader("Expires", "0");

		// For POST requests or when download=true, set as attachment
		if (req.method === "POST" || req.query.download === "true") {
			const filename = `${(validatedData.name || "guest")
				.toLowerCase()
				.replace(/\s+/g, "_")}_visitor_sayar_basu.png`;
			res.setHeader(
				"Content-Disposition",
				`attachment; filename=${filename}`
			);
		}

		res.send(badgeBuffer);
	} catch (error) {
		console.error("Error generating badge:", error);
		res.status(500).json({
			success: false,
			message: "Failed to generate badge",
		});
	}
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
	return handleGenerateBadge(req, res);
}
