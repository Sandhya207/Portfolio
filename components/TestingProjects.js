function TestingProjects() {
    const projects = [
        {
            title: 'E-commerce Test Suite',
            description: 'Developed comprehensive manual test cases and Selenium automation suite for an e-commerce platform',
            image: 'https://via.placeholder.com/400x300',
            link: '#'
        },
        {
            title: 'Banking Application Testing',
            description: 'Created and executed test cases for critical banking functionalities with Selenium automation',
            image: 'https://via.placeholder.com/400x300',
            link: '#'
        },
        {
            title: 'Healthcare Portal Testing',
            description: 'Led manual and automated testing efforts for a healthcare management system',
            image: 'https://via.placeholder.com/400x300',
            link: '#'
        }
    ];

    try {
        return (
            <section id="projects" data-name="projects-section" className="section bg-white">
                <div className="container mx-auto px-6">
                    <h2 data-name="projects-title" className="text-3xl font-bold text-center text-gray-800 mb-8">Testing Projects</h2>
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
                                        View Details <i className="fas fa-arrow-right ml-1"></i>
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
