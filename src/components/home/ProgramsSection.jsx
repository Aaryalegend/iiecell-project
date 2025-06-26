import { Link } from 'react-router-dom';
import { FaLaptopCode, FaHandshake, FaGraduationCap, FaSeedling } from 'react-icons/fa';

const ProgramsSection = () => {
  const programs = [
    {
      id: 1,
      title: "Startup Incubation",
      description: "Our flagship 12-month program providing comprehensive support to early-stage startups.",
      icon: <FaSeedling className="text-white text-3xl" />,
      color: "bg-blue-600",
      link: "/programs/incubation"
    },
    {
      id: 2,
      title: "Tech Accelerator",
      description: "6-month intensive program helping tech startups scale rapidly.",
      icon: <FaLaptopCode className="text-white text-3xl" />,
      color: "bg-teal-600",
      link: "/programs/accelerator"
    },
    {
      id: 3,
      title: "Mentorship Connect",
      description: "Connect with industry experts who provide guidance and support.",
      icon: <FaHandshake className="text-white text-3xl" />,
      color: "bg-purple-600",
      link: "/programs/mentorship"
    },
    {
      id: 4,
      title: "Entrepreneurship Training",
      description: "Skill development workshops for aspiring entrepreneurs.",
      icon: <FaGraduationCap className="text-white text-3xl" />,
      color: "bg-indigo-600",
      link: "/programs/training"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive support programs designed to nurture startups at different stages of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${program.color} p-4 flex justify-center items-center`}>
                <div className="rounded-full p-3 bg-white/20 backdrop-blur-sm">
                  {program.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link 
                  to={program.link} 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/programs" className="btn-primary">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
