function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            reportError(error);
        }
    };

    const handleChange = (e) => {
        try {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        } catch (error) {
            reportError(error);
        }
    };

    try {
        return (
            <section id="contact" data-name="contact-section" className="section bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 data-name="contact-title" className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    data-name="contact-name-input"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    data-name="contact-email-input"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    data-name="contact-message-input"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                                data-name="contact-submit-button"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
