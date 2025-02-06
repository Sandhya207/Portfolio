function TestingSkills() {
    const skills = [
        {
            category: 'Manual Testing',
            items: [
                'Test Case Design',
                'Test Execution',
                'Bug Reporting',
                'Test Planning',
                'Regression Testing'
            ]
        },
        {
            category: 'Selenium Automation',
            items: [
                'Selenium WebDriver',
                'Java Programming',
                'TestNG Framework',
                'Page Object Model',
                'Cross-browser Testing'
            ]
        },
        {
            category: 'Tools & Technologies',
            items: [
                'JIRA',
                'TestRail',
                'Jenkins CI/CD',
                'Git Version Control',
                'Maven Build Tool'
            ]
        }
    ];

    try {
        return (
            <section id="skills" data-name="skills-section" className="section bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 data-name="skills-title" className="text-3xl font-bold text-center text-gray-800 mb-8">Testing Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skills.map((skillSet, index) => (
                            <div 
                                key={index}
                                data-name={`skill-category-${index}`}
                                className="bg-white p-6 rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-bold text-blue-500 mb-4">{skillSet.category}</h3>
                                <ul className="space-y-2">
                                    {skillSet.items.map((item, itemIndex) => (
                                        <li 
                                            key={itemIndex}
                                            className="flex items-center text-gray-600"
                                        >
                                            <i className="fas fa-check-circle text-green-500 mr-2"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
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
