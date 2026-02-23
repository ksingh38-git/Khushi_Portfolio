export function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 max-w-3xl mx-auto w-full text-center">
            <span className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-4 block">05. What&apos;s Next?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
                I am actively looking for new opportunities in data engineering and analytics.
                Whether you have a question, a role to discuss, or just want to say hi,
                my inbox is always open.
            </p>

            <a
                href="mailto:khushisingh.021103@gmail.com"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold border-2 border-blue-600 hover:bg-blue-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
                Say Hello
            </a>
        </section>
    );
}
