// ContactPage.jsx (or Contact.js)
// Replace your current Contact component with this version.
// It removes alerts/popups and shows inline success/error message.

import React, { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Honeypot (keep hidden + empty)
    const [company, setCompany] = useState("");

    const [status, setStatus] = useState({ type: "", msg: "" }); // "success" | "error" | ""
    const [isSending, setIsSending] = useState(false);

    const API_BASE = "http://localhost:5000"; // local backend

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "", msg: "" });

        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus({ type: "error", msg: "Please fill in all fields." });
            return;
        }

        try {
            setIsSending(true);

            const res = await fetch(`${API_BASE}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim(),
                    company: company.trim(), // honeypot
                }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data.ok) {
                setStatus({
                    type: "error",
                    msg: data?.error || "Failed to send message. Please try again.",
                });
                return;
            }

            setStatus({ type: "success", msg: "Message sent! I'll get back to you soon." });
            setName("");
            setEmail("");
            setMessage("");
            setCompany("");
        } catch (err) {
            setStatus({
                type: "error",
                msg: "Backend not reachable. Make sure the server is running on port 5000.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="contact-page" style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
            <h1 style={{ textAlign: "center", marginBottom: 16 }}>Contact Me</h1>

            {status.msg && (
                <div
                    style={{
                        margin: "0 auto 16px",
                        padding: "12px 14px",
                        borderRadius: 10,
                        border: "1px solid rgba(0,0,0,0.2)",
                        textAlign: "center",
                    }}
                >
                    <strong style={{ marginRight: 8 }}>
                        {status.type === "success" ? "Success:" : "Error:"}
                    </strong>
                    <span>{status.msg}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
                {/* Honeypot hidden field */}
                <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                    style={{ display: "none" }}
                />

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: 12, borderRadius: 10, border: "1px solid rgba(0,0,0,0.2)" }}
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: 12, borderRadius: 10, border: "1px solid rgba(0,0,0,0.2)" }}
                />

                <textarea
                    placeholder="Your Message"
                    rows={7}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                        padding: 12,
                        borderRadius: 10,
                        border: "1px solid rgba(0,0,0,0.2)",
                        resize: "vertical",
                    }}
                />

                <button
                    type="submit"
                    disabled={isSending}
                    style={{
                        padding: 12,
                        borderRadius: 10,
                        border: "none",
                        cursor: isSending ? "not-allowed" : "pointer",
                        fontWeight: 600,
                    }}
                >
                    {isSending ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}
