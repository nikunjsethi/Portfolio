import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

// If your frontend runs on localhost:3000
app.use(cors({ origin: "http://localhost:3000" }));

app.use(helmet());
app.use(express.json({ limit: "10kb" }));

// Basic anti-spam rate limiting
app.use(
    "/api/contact",
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 min
        max: 10, // max 10 requests per 15 min per IP
        standardHeaders: true,
        legacyHeaders: false,
    })
);

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message, company } = req.body;

        // "company" will be a hidden honeypot field (must stay empty)
        if (company) return res.status(400).json({ ok: false, error: "Spam detected" });

        if (!name || !email || !message) {
            return res.status(400).json({ ok: false, error: "Missing required fields" });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({ ok: false, error: "Invalid email" });
        }
        if (message.length < 5) {
            return res.status(400).json({ ok: false, error: "Message too short" });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS, // use Gmail App Password (not your normal password)
            },
        });

        const subject = `Portfolio Contact: ${name}`;
        const textBody =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}\n`;

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
            to: process.env.TO_EMAIL,
            replyTo: email,
            subject,
            text: textBody,
        });

        return res.json({ ok: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ ok: false, error: "Server error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
