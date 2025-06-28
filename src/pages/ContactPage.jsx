const ContactPage = () => {
  return (
    <div className="container-custom py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="bg-white shadow-md rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our programs or want to collaborate? Reach out to our team.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <address className="text-gray-600 not-italic">
                Walchand College Of Engineering, <br />
                Vishrambaug, Sangli - 416415<br />
              </address>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:weic@walchandsangli.ac.in" className="text-blue-600 hover:text-blue-800">
                weic@walchandsangli.ac.in
              </a>
            </div>

          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
