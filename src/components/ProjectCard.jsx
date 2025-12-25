function ProjectCard({ title, description, videoUrl }) {
    const paragraphs = description.split('\n\n');
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '20px',
            border: '1px solid #ddd',
            padding: '20px',
            marginBottom: '30px',
            borderRadius: '10px',
            backgroundColor: '#fafafa'
        }}>

            {/* Text content */}
            <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 10px 0' }}>{title}</h2>
                <p style={{ margin: 0 }}>{description}</p>
            </div>


            {/* Video */}
            <div style={{ flex: 1 }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>

                    <iframe
                        src={videoUrl}
                        title={title}
                        frameBorder="0"
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '10%',
                            width: '80%',
                            height: '80%',
                            borderRadius: '6px'
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
