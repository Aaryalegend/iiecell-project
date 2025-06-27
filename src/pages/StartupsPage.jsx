import { useState } from 'react';

const StartupsPage = () => {
  // State for filtering startups by sector
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample startup success stories
  const startups = [
    {
      id: 1,
      name: "EcoInnovate",
      tagline: "Revolutionizing waste management through AI",
      description: "EcoInnovate developed an AI-powered waste sorting system that increases recycling efficiency by 78%. Their technology is now being used in 12 cities across India.",
      logo: "/assets/startups/ecoinnovate.jpg",
      image: "/assets/startups/ecoinnovate.jpg",
      sector: "CleanTech",
      foundedYear: 2023,
      metrics: {
        funding: "₹2.8 Crore",
        jobsCreated: 32,
        revenueGrowth: "215%",
        customers: 15,
        impact: "Reduced landfill waste by 5,200 tons"
      },
      founderQuote: "The mentorship and ecosystem support from IIE Cell were crucial in helping us refine our technology and secure our first enterprise clients.",
      founderName: "Priya Sharma",
      founderPosition: "Co-founder & CEO",
      founderImage: "/assets/startups/founders/priya.jpg"
    },
    {
      id: 2,
      name: "EduLearn",
      tagline: "Personalized learning for every child",
      description: "EduLearn's adaptive learning platform uses machine learning to create personalized education paths for K-12 students, resulting in 42% improvement in learning outcomes.",
      logo: "/assets/startups/edulearn.jpg",
      image: "/assets/startups/edulearn.jpg",
      sector: "EdTech",
      foundedYear: 2022,
      metrics: {
        funding: "₹4.5 Crore",
        jobsCreated: 45,
        revenueGrowth: "180%",
        customers: 120,
        impact: "Reached 25,000 students across 80 schools"
      },
      founderQuote: "The connections we made through IIE Cell's network gave us access to our first pilot schools. The structured incubation program helped us transform from a concept to a viable business.",
      founderName: "Arjun Mehta",
      founderPosition: "Founder & CTO",
      founderImage: "/assets/startups/founders/arjun.jpg"
    },
    {
      id: 3,
      name: "HealthTech Solutions",
      tagline: "Affordable diagnostics for rural India",
      description: "HealthTech developed a portable diagnostic device that can conduct 12 different medical tests at 1/10th the cost, bringing essential healthcare to underserved rural communities.",
      logo: "/assets/startups/healthtech.jpg",
      image: "/assets/startups/healthtech.jpg",
      sector: "MedTech",
      foundedYear: 2023,
      metrics: {
        funding: "₹3.2 Crore",
        jobsCreated: 28,
        revenueGrowth: "125%",
        customers: 35,
        impact: "Served 75,000+ patients in 120 villages"
      },
      founderQuote: "IIE Cell's specialized medical device program helped us navigate the complex regulatory landscape and connected us with healthcare experts who became our advisors and early adopters.",
      founderName: "Dr. Suresh Kumar",
      founderPosition: "Co-founder & CEO",
      founderImage: "/assets/startups/founders/suresh.jpg"
    },
    {
      id: 4,
      name: "AgriConnect",
      tagline: "Digitizing farm-to-market supply chains",
      description: "AgriConnect's platform connects farmers directly to businesses, eliminating middlemen and increasing farmer income by 40% while reducing food wastage in the supply chain.",
      logo: "/assets/startups/agrotech.jpg",
      image: "/assets/startups/agrotech.jpg",
      sector: "AgriTech",
      foundedYear: 2022,
      metrics: {
        funding: "₹1.8 Crore",
        jobsCreated: 24,
        revenueGrowth: "210%",
        customers: 3500,
        impact: "Working with 5,200 farmers across 3 states"
      },
      founderQuote: "The mentors at IIE Cell helped us refine our business model to create value for all stakeholders in the agricultural supply chain. Their support was instrumental in our rapid growth.",
      founderName: "Rajesh Patel",
      founderPosition: "Co-founder",
      founderImage: "/assets/startups/founders/rajesh.jpg"
    },
    {
      id: 5,
      name: "FinSecure",
      tagline: "Blockchain solutions for financial inclusion",
      description: "FinSecure has developed a blockchain-based identity verification system that has helped banks reduce KYC costs by 60% while expanding services to previously unbanked populations.",
      logo: "/assets/startups/finsecure.jpg",
      image: "/assets/startups/finsecure.jpg",
      sector: "FinTech",
      foundedYear: 2023,
      metrics: {
        funding: "₹5.5 Crore",
        jobsCreated: 37,
        revenueGrowth: "155%",
        customers: 8,
        impact: "Enabled banking access for 120,000 previously unbanked citizens"
      },
      founderQuote: "The regulatory sandbox program at IIE Cell allowed us to test our solutions in a controlled environment and demonstrate compliance, which was critical for gaining trust from financial institutions.",
      founderName: "Nisha Agarwal",
      founderPosition: "Founder & CEO",
      founderImage: "/assets/startups/founders/nisha.jpg"
    }
  ];

  // Filter startups based on active sector filter
  const filteredStartups = activeFilter === 'all' 
    ? startups 
    : startups.filter(startup => startup.sector === activeFilter);

  // Extract unique sectors for filter
  const sectors = ['all', ...new Set(startups.map(startup => startup.sector))];

  // Function to render metrics with icons
  const renderMetric = (icon, title, value) => {
    return (
      <div className="flex items-center">
        <div className="bg-indigo-100 rounded-full p-2 mr-3">
          {icon}
        </div>
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="container-custom py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Startup Portfolio</h1>
          <p className="text-xl text-gray-600">
            Discover the innovative startups that have grown with our support and guidance. 
            From ideation to market success, these ventures showcase the impact of our incubation programs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-4xl font-bold text-indigo-600">25+</p>
            <p className="text-gray-600 mt-2">Active Startups</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-4xl font-bold text-indigo-600">₹42Cr</p>
            <p className="text-gray-600 mt-2">Total Funding Raised</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-4xl font-bold text-indigo-600">350+</p>
            <p className="text-gray-600 mt-2">Jobs Created</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-4xl font-bold text-indigo-600">8</p>
            <p className="text-gray-600 mt-2">Sectors Impacted</p>
          </div>
        </div>

        {/* Sector Filters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Explore Success Stories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === sector 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {sector === 'all' ? 'All Sectors' : sector}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Startup Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {filteredStartups.map(startup => (
            <div key={startup.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
              {/* Startup Image */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={startup.image} 
                  alt={startup.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-4 py-2 rounded-br-lg">
                  {startup.sector}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">{startup.name}</h3>
                  <p className="text-gray-200">{startup.tagline}</p>
                </div>
              </div>

              {/* Startup Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  {startup.description}
                </p>
                
                {/* Metrics */}
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Impact & Growth</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {renderMetric(
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>,
                    "Funding Raised", 
                    startup.metrics.funding
                  )}
                  {renderMetric(
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
                    "Jobs Created", 
                    startup.metrics.jobsCreated
                  )}
                  {renderMetric(
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>,
                    "Revenue Growth", 
                    startup.metrics.revenueGrowth
                  )}
                </div>
                
                {/* Key Impact Stat */}
                <div className="bg-indigo-50 rounded-lg p-4 mb-6">
                  <p className="text-indigo-800 text-center font-medium">
                    <span className="font-bold">Key Impact:</span> {startup.metrics.impact}
                  </p>
                </div>

                {/* Founder Testimonial */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img 
                          src={startup.founderImage} 
                          alt={startup.founderName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 italic mb-3">
                        "{startup.founderQuote}"
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold text-gray-900">{startup.founderName}</span>
                        <span className="text-gray-500"> · {startup.founderPosition}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Founder Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 relative">
              <div className="absolute -top-5 left-8 text-5xl text-indigo-600">"</div>
              <p className="text-gray-600 mb-6 pt-4">
                The mentorship we received from industry experts was invaluable. The structured program and milestone-based approach helped us stay focused on our goals.
              </p>
              <div className="flex items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/assets/startups/founders/Vikram.jpg"
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Vikram Singh</p>
                  <p className="text-sm text-gray-500">Co-founder, TechScale Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 relative">
              <div className="absolute -top-5 left-8 text-5xl text-indigo-600">"</div>
              <p className="text-gray-600 mb-6 pt-4">
                Access to funding networks and investor connections opened doors that would have taken us years to find on our own. The pitch preparation was especially helpful.
              </p>
              <div className="flex items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/assets/startups/founders/Ananya.jpg"
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Ananya Dasgupta</p>
                  <p className="text-sm text-gray-500">Founder, LearnQuest</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 relative">
              <div className="absolute -top-5 left-8 text-5xl text-indigo-600">"</div>
              <p className="text-gray-600 mb-6 pt-4">
                The collaborative environment and interaction with other startups in our cohort led to partnerships and insights that have been crucial to our success.
              </p>
              <div className="flex items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/assets/startups/founders/Rahul.jpg"
                    alt="Testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rahul Khanna</p>
                  <p className="text-sm text-gray-500">CTO, DataInnovate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-xl overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-indigo-100 mb-6">
                Apply to our incubation programs and get the support you need to transform your ideas into successful ventures.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/programs" className="px-6 py-3 bg-white text-indigo-700 hover:bg-indigo-50 transition-colors font-semibold rounded-lg">
                  Explore Programs
                </a>
                <a href="/apply" className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-700 transition-colors font-semibold rounded-lg">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src="/assets/images/incubation-center.jpg" 
                alt="Startup Success" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupsPage;
