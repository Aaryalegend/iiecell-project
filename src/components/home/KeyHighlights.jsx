import { FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';

const KeyHighlights = () => {
  const stats = [
    {
      id: 1,
      icon: <FaRocket className="text-blue-500 text-4xl mb-4" />,
      number: "100+",
      label: "Startups Incubated",
      description: "Supporting innovative entrepreneurs across diverse sectors"
    },
    {
      id: 2,
      icon: <FaChartLine className="text-blue-500 text-4xl mb-4" />,
      number: "₹50Cr+",
      label: "Funding Raised",
      description: "Helping startups secure investments and grants"
    },
    {
      id: 3,
      icon: <FaUsers className="text-blue-500 text-4xl mb-4" />,
      number: "500+",
      label: "Jobs Created",
      description: "Contributing to economic growth and employment"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Driving innovation and creating meaningful impact in the startup ecosystem through our incubation programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-white p-8 rounded-full shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <h4 className="text-xl font-semibold text-blue-600 mb-3">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
