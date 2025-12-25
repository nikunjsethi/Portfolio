import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

function Projects() {
    const projectList = [
        {
            title: "EIR Rehabilitation",
            paragraphs: [
                "This prototype was a research and development project for my final thesis, conducted in collaboration with Valkyrie Industries.",
                "The aim of this prototype was to investigate whether the integration of Electrical Muscle Stimulation (EMS) with Virtual Reality (VR) would lead to increased strength and enhanced overall motor recovery when compared to traditional rehabilitation methods. After conducting tests at the Physiotherapy Department of King's College, London, we concluded that the integration of EMS and VR holds substantial promise for rehabilitation, and EMS can be recognized as a supportive tool for individuals with significant weakness.",
            ],
            videoUrl: "https://www.youtube.com/embed/ap0n39ruFns?si=PwO-PTyUKJKXQuHv",
        },
        {
            title: "Puzzle Sandbox VR",
            paragraphs: [
                "Puzzle Sandbox VR is an online multiplayer virtual reality game that encourages team building and problem-solving.",
                "The puzzles are designed to be challenging yet fun, and the environment is immersive and engaging. Players have the freedom to explore the world and its puzzles in a unique and creative way. It's a great game for friends and family to play together and to make new connections.",
            ],
            videoUrl: "https://www.youtube.com/embed/nUxH1trEJOk?si=2xdAIzkxopD2d2wf",
        },
        {
            title: "AR Beer Pong",
            paragraphs: [
                "AR (Augmented Reality) beer pong is a variation of the traditional party game in which players throw ping pong balls into cups of beer or other beverages.",
                "In AR beer pong, the game is played on a device such as a smartphone or tablet, and the cups are displayed on the screen using AR technology. Players throw virtual ping pong balls at the virtual cups, and the device tracks the trajectory to detect hits.",
            ],
            videoUrl: "https://www.youtube.com/embed/IdbDd6e2hs0?si=4dZ6WDWZUDQAKRw8",
        },
        {
            title: "GPU Training Simulation",
            paragraphs: [
                "Training simulation for the procedure for setting up a ground power unit of aircraft, used to power up an unpowered aircraft while it is still on an airport runway, an airfield, or anywhere on the floor. The simulation provides training and practice to individuals who will be operating or working with GPUs in real-world situations.",
                "The goal is to provide a safe, cost-effective, and efficient way to train individuals in the use and operation of GPUs. The simulation can also be used to assess knowledge and skills, provide feedback, and identify areas for improvement—reducing risk of accidents and downtime in real operations.",
            ],
            videoUrl: "https://www.youtube.com/embed/jAKfBiZqcSc?si=lIH3z96fJRC-pf0l",
        },
    ];

    return (
        <div className="projects-page">
            <h1 className="projects-title">My Projects</h1>

            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        paragraphs={project.paragraphs}
                        videoUrl={project.videoUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;