function Projects() {
    const projects = [
        {
            title: 'E-commerce Platform',
            description: 'A full-featured e-commerce platform built with React and Node.js',
            image: 'https://via.placeholder.com/400x300',
            link: '#'
        },
        {
            title: 'Task Management App',
            description: 'A productivity app for managing daily tasks and projects',
            image: 'https://via.placeholder.com/400x300',
            link: '#'
        },
        {
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media management',
            image: 'https://via.placeholder.com/400x300',
            link: '#'
        }
    ];

    try {
        return (
            <section id="projects" data-name="projects-section" className="section bg-white">
                <div className="container mx-auto px-6">
                    <h2 data-name="projects-title" className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                data-name={`project-${index}`}
                                className="project-card bg-gray-50 rounded-lg overflow-hidden shadow-md"
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <a 
                                        href={project.link}
                                        className="text-blue-500 hover:text-blue-600 font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project <i className="fas fa-arrow-right ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
