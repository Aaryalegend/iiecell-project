import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import incubationCenterImg from '/assets/images/incubation-center.jpg';

const AboutSection = () => {
  const features = [
    "Section 8 Non-Profit Organization",
    "Government Approved Incubator",
    "Industry Experts as Mentors",
    "State-of-the-art Infrastructure",
    "Wide Network of Investors",
    "Dedicated Support Team"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-video bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src={incubationCenterImg}
                alt="Incubation Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-2 inline-block">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                About IIE Cell
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nurturing Innovation and Entrepreneurship
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Innovation Incubator and Entrepreneurship Cell is a Section 8 company committed to fostering entrepreneurship, 
              supporting startups, and creating a vibrant ecosystem for innovation. Our mission is to identify, nurture, 
              and scale promising ideas into successful businesses.
            </p>
            
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/about" className="btn-primary rounded-full hover:bg-slate-300 hover:text-blue-600 transition-colors duration-700 px-8 py-3 text-lg">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
