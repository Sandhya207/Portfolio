function Skills() {
    const skills = [
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Python', icon: 'fab fa-python' }
    ];

    try {
        return (
            <section id="skills" data-name="skills-section" className="section bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 data-name="skills-title" className="text-3xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                data-name={`skill-${skill.name.toLowerCase()}`}
                                className="skill-item bg-white p-6 rounded-lg shadow-md text-center"
                            >
                                <i className={`${skill.icon} text-4xl text-blue-500 mb-4`}></i>
                                <h3 className="text-gray-800 font-medium">{skill.name}</h3>
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
