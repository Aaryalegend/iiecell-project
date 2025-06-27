import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import backgroundImage from '/assets/images/hero-bg.png';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Startups, <br />
            <span className="text-blue-400">Driving Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Innovation Incubator and Entrepreneurship Cell is a Section 8 company fostering entrepreneurship and supporting innovative startups.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/apply" className="hidden md:block flex-1 sm:flex-none">
              <button className="p-[3px] relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-3 bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent text-lg text-center w-full hover:text-white">
                  Apply Now
                </div>
              </button>
            </Link>
            <Link to="/programs" className="btn-secondary text-center flex-1 sm:flex-none px-8 py-3 text-lg">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
