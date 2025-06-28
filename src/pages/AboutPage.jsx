const AboutPage = () => {
  return (
    <div className="container-custom py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h1>
      
      {/* Mission & Vision Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-12 hover:shadow-lg transition-shadow">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to foster innovation and entrepreneurship by creating a supportive ecosystem 
            for startups and innovators. In alignment with Section 8 objectives, we aim to promote 
            sustainable development, social welfare, and economic growth through technology-driven solutions.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-blue-50 p-6 rounded-full shadow-sm flex-1">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Our Mission</h3>
              <p className="text-gray-700">To nurture innovative ideas and transform them into successful ventures 
              that address real-world challenges while promoting sustainable growth and social impact.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-full shadow-sm flex-1">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Our Vision</h3>
              <p className="text-gray-700">To become a premier innovation hub that empowers entrepreneurs 
              to create solutions for a better tomorrow, fostering inclusive growth and social equity.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legal Status Section */}
      <div className="bg-gray-50 shadow-md rounded-lg p-8 mb-12 hover:shadow-lg transition-shadow">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Status</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are registered as a Section 8 company under the Companies Act, 2013, 
            dedicated to promoting commerce, art, science, education, and social welfare without profit motives.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3 text-center">Registration Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="border-b md:border-r md:border-b-0 border-gray-200 pb-4 md:pb-0 md:pr-4">
              <p className="text-gray-500 mb-1">Registration Number</p>
              <p className="font-medium">IEC-2023-XXXXX</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <p className="text-gray-500 mb-1">Established In</p>
              <p className="font-medium">January 2023</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-12 hover:shadow-lg transition-shadow">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of professionals, board members, and advisors bring diverse expertise 
            to guide startups and innovators in their entrepreneurial journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Dr. Rajesh Kumar</h3>
            <p className="text-blue-600 mb-3">Chairman</p>
            <p className="text-gray-600">25+ years of experience in technology innovation and entrepreneurship</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Mr. Vikram Sharma</h3>
            <p className="text-blue-600 mb-3">Director</p>
            <p className="text-gray-600">Expert in startup ecosystem development and venture capital</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Mr. Amit Verma</h3>
            <p className="text-blue-600 mb-3">Technical Advisor</p>
            <p className="text-gray-600">Specializes in emerging technologies and digital transformation</p>
          </div>
        </div>
      </div>
      
      {/* Infrastructure Section */}
      <div className="bg-gray-50 shadow-md rounded-lg p-8 hover:shadow-lg transition-shadow">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Incubator Infrastructure</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art infrastructure is designed to support innovation and collaboration, 
            providing startups with all the resources they need to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Innovation Labs</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">•</span> 
                <span>Prototyping & Testing Facility</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Hardware Development Lab</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Software Development Center</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>IoT & AI Research Lab</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Collaboration Spaces</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Co-working Areas with 50+ Seats</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Meeting Rooms & Conference Facilities</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Networking Zones & Event Space</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Relaxation & Recreation Areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
