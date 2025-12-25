import { FaLinkedin } from 'react-icons/fa';
function About() {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>About Me</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                gap: '40px',
                alignItems: 'flex-start'
            }}>

                {/* Right Column – Profile Image */}
                <div style={{ flex: '1', textAlign: 'center' }}>
                    <img
                        src="/profile.jpg"
                        alt="Nikunj Sethi"
                        style={{
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '50%',
                            border: '1px solid #d1d9e6'
                        }}
                    />
                </div>

                {/* Left Column – Text Content */}
                <div style={{
                    flex: '2',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    color: '#2c3e50'
                }}>
                    <p>
                        I’m Nikunj Sethi, an XR Developer and Educator with over 4 years of experience in developing VR, AR, and MR experiences.
                        I’m currently an Assistant Professor at the Jindal School of Art and Architecture, and I specialize in immersive storytelling,
                        simulation design, and XR research in domains like medical, training, and awareness.
                    </p>

                    <p>
                        I hold an MSc in Virtual and Augmented Reality and a BTech in CSE Graphics & Gaming. I’ve collaborated with industry leaders like
                        Valkyrie Industries and developed simulations for rehabilitation, aviation, and safety training.
                    </p>

                    <p>
                        I enjoy combining design thinking with real-time interaction, using tools like Unity, Unreal Engine, and emerging tech in education.
                    </p>

                    <p>
                        📄 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download my resume</a>
                    </p>

                    <p style={{ marginTop: '20px' }}>
                        <a
                            href="https://www.linkedin.com/in/nikunj-sethi-884b65161/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                color: '#0a66c2',
                                fontWeight: '500',
                                fontSize: '1rem'
                            }}
                        >
                            <FaLinkedin size={24} />
                            Connect on LinkedIn
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
