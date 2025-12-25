import React from "react";
import "./ProjectCard.css";
export default function ProjectCard({
    title = "",
    subtitle = "",
    role = "",
    tech = [],
    paragraphs = [],
    image = "",
    videoUrl = "",
    liveUrl = "",
    githubUrl = "",
}) {
    const normalizedParagraphs = Array.isArray(paragraphs)
        ? paragraphs
        : paragraphs
            ? [String(paragraphs)]
            : [];

    const normalizedTech = Array.isArray(tech) ? tech : tech ? [String(tech)] : [];

    return (
        <div className="project-card">
            {/* Media */}
            {(videoUrl || image) && (
                <div className="project-card-media">
                    {videoUrl ? (
                        <div className="project-card-video">
                            <iframe
                                title={title || "Project video"}
                                src={videoUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <img
                            className="project-card-image"
                            src={image}
                            alt={title || "Project image"}
                            loading="lazy"
                        />
                    )}
                </div>
            )}

            {/* Content */}
            <div className="project-card-content">
                {title && <h3 className="project-card-title">{title}</h3>}
                {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
                {role && <p className="project-card-role">{role}</p>}

                {/* ✅ This is the fix: actually use paragraphs */}
                {normalizedParagraphs.length > 0 && (
                    <div className="project-card-description">
                        {normalizedParagraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                )}

                {/* Tech */}
                {normalizedTech.length > 0 && (
                    <div className="project-card-tech">
                        {normalizedTech.map((t, i) => (
                            <span className="project-card-tech-chip" key={`${t}-${i}`}>
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links */}
                {(liveUrl || githubUrl) && (
                    <div className="project-card-links">
                        {liveUrl && (
                            <a
                                className="project-card-link"
                                href={liveUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                className="project-card-link"
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
