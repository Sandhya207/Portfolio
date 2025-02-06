function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    try {
        return (
            <header data-name="header" className="fixed w-full bg-white shadow-md z-50">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div data-name="logo" className="text-2xl font-bold text-gray-800">QA Portfolio</div>
                        
                        <div className="hidden md:flex space-x-8">
                            <a data-name="nav-home" href="#home" className="nav-link text-gray-600 hover:text-blue-500">Home</a>
                            <a data-name="nav-about" href="#about" className="nav-link text-gray-600 hover:text-blue-500">About</a>
                            <a data-name="nav-skills" href="#skills" className="nav-link text-gray-600 hover:text-blue-500">Testing Skills</a>
                            <a data-name="nav-process" href="#process" className="nav-link text-gray-600 hover:text-blue-500">Process</a>
                            <a data-name="nav-tools" href="#tools" className="nav-link text-gray-600 hover:text-blue-500">Tools</a>
                            <a data-name="nav-projects" href="#projects" className="nav-link text-gray-600 hover:text-blue-500">Projects</a>
                            <a data-name="nav-contact" href="#contact" className="nav-link text-gray-600 hover:text-blue-500">Contact</a>
                        </div>

                        <button 
                            data-name="mobile-menu-button"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div data-name="mobile-menu" className="md:hidden mt-4 pb-4">
                            <a href="#home" className="block py-2 text-gray-600 hover:text-blue-500">Home</a>
                            <a href="#about" className="block py-2 text-gray-600 hover:text-blue-500">About</a>
                            <a href="#skills" className="block py-2 text-gray-600 hover:text-blue-500">Testing Skills</a>
                            <a href="#process" className="block py-2 text-gray-600 hover:text-blue-500">Process</a>
                            <a href="#tools" className="block py-2 text-gray-600 hover:text-blue-500">Tools</a>
                            <a href="#projects" className="block py-2 text-gray-600 hover:text-blue-500">Projects</a>
                            <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-500">Contact</a>
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
