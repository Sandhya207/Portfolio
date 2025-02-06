function About() {
    try {
        return (
            <section id="about" data-name="about-section" className="section bg-white">
                <div className="container mx-auto px-6">
                    <h2 data-name="about-title" className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
                    <div className="max-w-3xl mx-auto">
                        <p data-name="about-description" className="text-gray-600 text-lg leading-relaxed mb-6">
                            I am a dedicated Manual Test Engineer  in manual testing and Selenium automation. 
                            I specialize in creating detailed test cases, executing comprehensive test scenarios, and developing 
                            robust Selenium test frameworks. My expertise includes web application testing, regression testing, 
                            and test automation using Selenium WebDriver with Java.
                        </p>
                                            </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
