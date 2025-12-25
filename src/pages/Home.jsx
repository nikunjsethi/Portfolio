import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            {/* HERO */}
            <section className="card" style={{ padding: "48px", marginBottom: "36px" }}>
                <p style={{ margin: 0, color: "var(--muted)", fontWeight: 600 }}>
                    XR Developer • Educator • Immersive Technologist
                </p>

                <h1 style={{ fontSize: "42px", margin: "12px 0", letterSpacing: "-0.8px" }}>
                    Designing meaningful immersive experiences.
                </h1>

                <p
                    style={{
                        maxWidth: "760px",
                        lineHeight: "1.7",
                        color: "var(--muted)",
                        fontSize: "17px",
                        marginTop: "8px",
                    }}
                >
                    I work at the intersection of Virtual Reality, interaction design, and education — creating XR
                    simulations for training, rehabilitation, and immersive storytelling.
                </p>

                <div style={{ display: "flex", gap: "14px", marginTop: "26px", flexWrap: "wrap" }}>
                    <Link to="/projects" className="btn btn--primary" style={{ textDecoration: "none" }}>
                        View Projects
                    </Link>
                    <Link to="/about" className="btn" style={{ textDecoration: "none" }}>
                        About Me
                    </Link>
                    <Link to="/contact" className="btn" style={{ textDecoration: "none" }}>
                        Contact
                    </Link>
                </div>
            </section>

            {/* WHAT I DO */}
            <section style={{ marginBottom: "36px" }}>
                <h2 style={{ marginBottom: "18px" }}>What I Do</h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "18px",
                    }}
                >
                    <div className="card" style={{ padding: "22px" }}>
                        <h3 style={{ marginTop: 0 }}>XR Simulations</h3>
                        <p style={{ marginBottom: 0, color: "var(--muted)", lineHeight: "1.6" }}>
                            VR/AR simulations for training, safety drills, and operational workflows.
                        </p>
                    </div>

                  

                    <div className="card" style={{ padding: "22px" }}>
                        <h3 style={{ marginTop: 0 }}>Teaching & Curriculum</h3>
                        <p style={{ marginBottom: 0, color: "var(--muted)", lineHeight: "1.6" }}>
                            Teaching Unity, immersive media, and creative programming to design students.
                        </p>
                    </div>

                    <div className="card" style={{ padding: "22px" }}>
                        <h3 style={{ marginTop: 0 }}>Industry Collaboration</h3>
                        <p style={{ marginBottom: 0, color: "var(--muted)", lineHeight: "1.6" }}>
                            Building prototypes with studios and partners to bring XR ideas into real use-cases.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURED CTA */}
            <section className="card" style={{ padding: "28px" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "16px",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ flex: "1 1 520px" }}>
                        <h2 style={{ margin: "0 0 8px" }}>Want to collaborate?</h2>
                        <p style={{ margin: 0, color: "var(--muted)", lineHeight: "1.6" }}>
                            I’m open to research collaborations, XR development projects, workshops, and industry partnerships.
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        <Link to="/contact" className="btn btn--primary" style={{ textDecoration: "none" }}>
                            Get in touch
                        </Link>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ textDecoration: "none" }}
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
