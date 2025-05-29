import { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { sendBadgeEmail } from "../shared/emailService";
import { generateBadge } from "../shared/badgeGenerator";

const sendBadgeSchema = z.object({
	email: z.string().email(),
	name: z.string().nullable().optional(),
	photoURL: z.string().nullable().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method === "POST") {
		try {
			const data = sendBadgeSchema.parse(req.body);

			console.log(`Received badge email request for: ${data.email}`);

			const badgeBuffer = await generateBadge({
				name: data.name || "Guest",
				email: data.email,
				photoURL: data.photoURL || null,
			});

			console.log("Badge generated successfully");

			await sendBadgeEmail(
				data.email,
				data.name || "Guest",
				data.email,
				data.photoURL
			);

			console.log("Badge email sent successfully to:", data.email);

			return res.status(200).json({
				success: true,
				message: "Badge email sent successfully",
			});
		} catch (error) {
			console.error("Error sending badge email:", error);

			if (error instanceof z.ZodError) {
				return res.status(400).json({
					success: false,
					message: "Invalid request data",
					errors: error.errors,
				});
			}

			return res.status(500).json({
				success: false,
				message: "Failed to send badge email",
			});
		}
	} else {
		res.setHeader("Allow", "POST");
		return res.status(405).json({ error: "Method not allowed" });
	}
}
