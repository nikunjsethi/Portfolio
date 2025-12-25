import ProjectCard from '../components/ProjectCard';

function Projects() {
    const projectList = [
        {
            title: 'EIR Rehabilitation',
            description: "This prototype was a research and development project for my final thesis, conducted in collaboration with Valkyrie Industries." +
                " The aim of this prototype was to investigate whether the integration of Electrical Muscle Stimulation (EMS) with Virtual Reality (VR)" +
                "would lead to increased strength and enhanced overall motor recovery when compared to traditional rehabilitation methods. After conducting" +
                "tests at the Physiotherapy Department of King's College, London, we have come to the conclusion that the integration of EMS and VR holds " +
                "substantial promise for rehabilitation, and EMS can be recognized as a supportive tool for individuals with significant weakness.",
            videoUrl: 'https://www.youtube.com/embed/ap0n39ruFns?si=PwO-PTyUKJKXQuHv'
        },
        {
            title: 'Puzzle Sandbox VR',
            description: "Puzzle Sandbox VR is an online multiplayer virtual reality game that encourages team building and problem-solving." +
                " The puzzles are designed to be challenging yet fun, and the environment is immersive and engaging. Players have the freedom" +
                " to explore the world and its puzzles in a unique and creative way. It's a great game for friends and family to play together " +
                "and to make new connections.",
            videoUrl: 'https://www.youtube.com/embed/nUxH1trEJOk?si=2xdAIzkxopD2d2wf'
        },
        {
            title: 'AR Beer Pong',
            description: 'AR (Augmented Reality) beer pong is a variation of the traditional party game in which players throw ping pong'+
                ' balls into cups of beer or other beverages.In AR beer pong, the game is played on a device such as a smartphone or tablet, ' +
                'and the cups are displayed on the screen using AR technology.Players can then throw virtual ping pong balls at the virtual cups, ' +
                'and the device will track the trajectory of the ball and determine whether it goes into the cup or not.',
            videoUrl: 'https://www.youtube.com/embed/IdbDd6e2hs0?si=4dZ6WDWZUDQAKRw8'
        },
        {
            title: 'GPU Training Simulation',
            description: "Training simulation for the procedure for setting up a ground power unit of aircraft, that is used to power up an unpowered aircraft " +
                "while it is still on an airport runway, an airfield, or anywhere on the floor. The simulation is designed to provide training and practice " +
                "to individuals who will be operating or working with GPUs in real-world situations.\n\n" +
                "The goal of a GPU training simulation is to provide a safe, cost-effective, and efficient way to train individuals in the use and operation of GPUs. " +
                "The simulation can also be used to assess the trainee's knowledge and skills, providing feedback and identifying areas for improvement. " +
                "With the help of a GPU training simulation, individuals can gain valuable experience and confidence in operating a GPU, reducing the risk " +
                "of accidents and downtime in real-world operations.",
            videoUrl: 'https://www.youtube.com/embed/jAKfBiZqcSc?si=lIH3z96fJRC-pf0l'
        }
    ];

    return (
        <div>
            <h1>My Projects</h1>
            {projectList.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    videoUrl={project.videoUrl}
                />
            ))}
        </div>
    );
}

export default Projects;