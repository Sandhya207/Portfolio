function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div data-name="footer-copyright" className="text-center md:text-left mb-4 md:mb-0">
                            © 2024 Sandhya Testing Portfolio. All rights reserved.
                        </div>
                        <div data-name="footer-social" className="flex space-x-6">
                            <a href="#" className="hover:text-blue-500 transition duration-300">
                                <i className="fab fa-github text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-blue-500 transition duration-300">
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a href="#" className="hover:text-blue-500 transition duration-300">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
