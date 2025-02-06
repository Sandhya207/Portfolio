function Hero() {
    try {
        return (
            <section id="home" data-name="hero-section" className="section min-h-screen flex items-center bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="fade-in">
                        <h1 data-name="hero-title" className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                            Hi, I'm <span className="text-blue-500">Sandhya</span>
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl md:text-2xl text-gray-600 mb-8">
                            Manual Testing Expert | Selenium Automation Specialist
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                data-name="cta-projects"
                                href="#projects" 
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                View My Projects
                            </a>
                            <a 
                                data-name="cta-contact"
                                href="#contact" 
                                className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
