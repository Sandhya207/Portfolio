function Tools() {
    const tools = [
        { name: 'Selenium', icon: 'fa-code' },
        { name: 'Java', icon: 'fa-coffee' },
        { name: 'TestNG', icon: 'fa-check-double' },
        { name: 'JIRA', icon: 'fa-ticket-alt' },
        { name: 'Jenkins', icon: 'fa-cogs' },
        { name: 'Git', icon: 'fa-code-branch' }
    ];

    try {
        return (
            <section id="tools" data-name="tools-section" className="section bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 data-name="tools-title" className="text-3xl font-bold text-center text-gray-800 mb-8">Testing Tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {tools.map((tool, index) => (
                            <div 
                                key={index}
                                data-name={`tool-${tool.name.toLowerCase()}`}
                                className="tool-item bg-white p-6 rounded-lg shadow-md text-center"
                            >
                                <i className={`fas ${tool.icon} text-4xl text-blue-500 mb-4`}></i>
                                <h3 className="text-gray-800 font-medium">{tool.name}</h3>
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
