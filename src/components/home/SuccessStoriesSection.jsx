import { useState } from 'react';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SuccessStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const successStories = [
    {
      id: 1,
      companyName: "EcoInnovate",
      founderName: "Priya Sharma",
      description: "A cleantech startup that developed sustainable packaging solutions, raised $2M in Series A funding, and now has clients across 5 countries.",
      quote: "IIE Cell provided us with not just infrastructure but a complete ecosystem to grow. Their mentorship and connections were invaluable in our journey from idea to market leader.",
      image: "/startups/eco-innovate.jpg", // Placeholder
      logo: "/startups/eco-innovate-logo.png", // Placeholder
    },
    {
      id: 2,
      companyName: "HealthTech Solutions",
      founderName: "Rajiv Mehta",
      description: "Created an AI-powered diagnostic platform that is now being used in over 100 hospitals nationwide, improving healthcare access in rural areas.",
      quote: "The structured incubation program and access to industry experts helped us navigate regulatory challenges and accelerate our product development cycle.",
      image: "/startups/healthtech.jpg", // Placeholder
      logo: "/startups/healthtech-logo.png", // Placeholder
    },
    {
      id: 3,
      companyName: "EduLearn",
      founderName: "Aisha Patel",
      description: "An edtech platform connecting rural students with urban teachers, having impacted over 50,000 students across India.",
      quote: "The mentorship at IIE Cell was transformative for our business model. Their focus on social impact alongside financial sustainability helped us create a truly scalable solution.",
      image: "/startups/edulearn.jpg", // Placeholder
      logo: "/startups/edulearn-logo.png", // Placeholder
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === successStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the innovative startups that have flourished with our support and guidance.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="h-64 lg:h-auto relative bg-gray-200">
              {/* Placeholder for actual startup image */}
              <div className="h-full flex items-center justify-center">
                <span className="text-gray-500">Startup Image</span>
              </div>
              
              {/* Company logo overlay */}
              <div className="absolute bottom-5 left-5 bg-white p-2 rounded-md shadow-md">
                {/* Placeholder for company logo */}
                <div className="h-12 w-20 bg-gray-100 flex items-center justify-center rounded">
                  <span className="text-xs text-gray-500">{successStories[currentIndex].companyName} Logo</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="p-8 lg:p-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">{successStories[currentIndex].companyName}</h3>
                <FaQuoteLeft className="text-gray-300 text-3xl" />
              </div>

              <p className="text-gray-600 mb-6">
                {successStories[currentIndex].description}
              </p>

              <blockquote className="text-gray-800 italic mb-6 border-l-4 border-blue-500 pl-4">
                "{successStories[currentIndex].quote}"
              </blockquote>

              <div className="text-gray-700 font-semibold">
                — {successStories[currentIndex].founderName}, Founder
              </div>

              <div className="flex justify-between items-center mt-8">
                <div>
                  <span className="text-gray-500 text-sm">
                    {currentIndex + 1} / {successStories.length}
                  </span>
                </div>

                <div className="flex space-x-4">
                  <button 
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                    onClick={prevSlide}
                    aria-label="Previous story"
                  >
                    <FaArrowLeft className="text-gray-700" />
                  </button>
                  <button 
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                    onClick={nextSlide}
                    aria-label="Next story"
                  >
                    <FaArrowRight className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
