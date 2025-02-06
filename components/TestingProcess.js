function TestingProcess() {
    const processes = [
        {
            title: 'Requirements Analysis',
            description: 'Thorough analysis of requirements and test planning',
            icon: 'fa-clipboard-list'
        },
        {
            title: 'Test Case Design',
            description: 'Creating detailed test cases and scenarios',
            icon: 'fa-edit'
        },
        {
            title: 'Manual Testing',
            description: 'Executing test cases and documenting results',
            icon: 'fa-check-square'
        },
        {
            title: 'Selenium Automation',
            description: 'Developing and maintaining automated test scripts',
            icon: 'fa-robot'
        },
        {
            title: 'Bug Reporting',
            description: 'Detailed documentation of defects in JIRA',
            icon: 'fa-bug'
        },
        {
            title: 'Test Reports',
            description: 'Generating comprehensive test reports',
            icon: 'fa-file-alt'
        }
    ];

    try {
        return (
            <section id="process" data-name="process-section" className="section bg-white">
                <div className="container mx-auto px-6">
                    <h2 data-name="process-title" className="text-3xl font-bold text-center text-gray-800 mb-8">Testing Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processes.map((process, index) => (
                            <div 
                                key={index}
                                data-name={`process-${index}`}
                                className="process-card bg-gray-50 p-6 rounded-lg shadow-md"
                            >
                                <div className="flex items-center mb-4">
                                    <i className={`fas ${process.icon} text-2xl text-blue-500 mr-3`}></i>
                                    <h3 className="text-xl font-bold text-gray-800">{process.title}</h3>
                                </div>
                                <p className="text-gray-600">{process.description}</p>
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
