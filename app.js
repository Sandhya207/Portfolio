function App() {
    try {
        return (
            <div data-name="app" className="min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <TestingSkills />
                    <TestingProcess />
                    <Tools />
                    <TestingProjects />
                    <Contact />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
