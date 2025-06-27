import { useState } from 'react';

const ProgramsPage = () => {
  const [activeProgram, setActiveProgram] = useState('techStartup');

  // Program data
  const programs = {
    techStartup: {
      title: "Technology Startup Program",
      duration: "12 months",
      tagline: "Accelerate your tech innovation journey",
      description: "Our flagship incubation program designed for early-stage technology startups with innovative products or services. Get comprehensive support to accelerate your growth and scale your business.",
      eligibility: [
        "Early-stage startups with prototype/MVP",
        "Innovative tech solution with market potential",
        "Registered business entity in India",
        "Founding team with at least 2 members"
      ],
      focusAreas: ["AI/ML", "SaaS", "FinTech", "HealthTech", "EdTech", "IoT/Hardware"],
      funding: {
        grants: "Up to ₹25 lakhs in milestone-based grants",
        seed: "Potential seed funding of ₹50 lakhs - ₹1 crore",
        connect: "Direct access to our network of 50+ angel investors and VCs"
      },
      mentorship: [
        "One-on-one sessions with industry experts",
        "Technology architecture guidance",
        "Go-to-market strategy development",
        "Fundraising preparation and investor deck reviews"
      ],
      image: "/src/assets/startups/healthtech.jpg",
      color: "blue"
    },
    socialImpact: {
      title: "Social Impact Incubation Track",
      duration: "18 months",
      tagline: "Creating sustainable solutions for social change",
      description: "Designed for ventures addressing critical social challenges through innovative and sustainable business models. We provide extended support to help you create measurable impact.",
      eligibility: [
        "Focus on addressing pressing social/environmental challenges",
        "Sustainable revenue model or clear path to sustainability",
        "Registered as for-profit or non-profit organization",
        "Commitment to measuring social impact metrics"
      ],
      focusAreas: ["Clean Energy", "Agriculture", "Healthcare Access", "Education", "Water & Sanitation", "Financial Inclusion"],
      funding: {
        grants: "Up to ₹20 lakhs in impact-linked grants",
        seed: "Connections to impact investors for follow-on funding",
        connect: "CSR funding opportunities and government scheme linkages"
      },
      mentorship: [
        "Impact assessment framework development",
        "Scaling strategies for social enterprises",
        "Regulatory guidance for social sector",
        "Community engagement and stakeholder management"
      ],
      image: "/src/assets/startups/ecoinnovate.jpg",
      color: "green"
    },
    studentEntrepreneur: {
      title: "Student Entrepreneur Program",
      duration: "6 months",
      tagline: "Turning student ideas into viable startups",
      description: "A special incubation track for student entrepreneurs to validate their ideas and develop early prototypes while balancing academic commitments.",
      eligibility: [
        "Currently enrolled students (UG/PG/PhD)",
        "Innovative idea with market validation attempts",
        "Commitment to working on the idea part-time",
        "Can be individual or team applications"
      ],
      focusAreas: ["Open Innovation", "Campus Solutions", "Digital Platforms", "Consumer Products"],
      funding: {
        grants: "Prototype development grants up to ₹5 lakhs",
        seed: "Pre-seed funding opportunities up to ₹10 lakhs",
        connect: "Demo day with angel investors and seed funds"
      },
      mentorship: [
        "Idea validation frameworks",
        "Prototype development support",
        "Business model canvas development",
        "Pitch training and presentation skills"
      ],
      image: "/src/assets/startups/edulearn.jpg",
      color: "amber"
    },
    growthAccelerator: {
      title: "Growth Accelerator Program",
      duration: "6 months",
      tagline: "Scaling from product-market fit to sustainable growth",
      description: "For startups that have achieved product-market fit and are now looking to scale operations, reach new markets, and raise significant funding for growth.",
      eligibility: [
        "Operational startup with validated product-market fit",
        "Minimum 12 months of operations with customer traction",
        "Monthly recurring revenue of at least ₹5 lakhs",
        "Looking to scale operations and team"
      ],
      focusAreas: ["B2B SaaS", "D2C Brands", "Marketplace Platforms", "Enterprise Solutions"],
      funding: {
        grants: "Performance-based growth grants up to ₹30 lakhs",
        seed: "Series A/B preparation and investor introductions",
        connect: "Strategic partnerships with corporates and industry leaders"
      },
      mentorship: [
        "Growth hacking and scaling strategies",
        "Team building and organizational development",
        "International market entry guidance",
        "Advanced financial modeling and planning"
      ],
      image: "/src/assets/images/incubation-center.jpg",
      color: "purple"
    }
  };

  // Function to get color classes based on program
  const getColorClass = (program, element) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-600",
        hover: "hover:bg-blue-700",
        hoverLight: "hover:bg-blue-200"
      },
      green: {
        bg: "bg-green-600",
        bgLight: "bg-green-100",
        text: "text-green-600",
        border: "border-green-600",
        hover: "hover:bg-green-700",
        hoverLight: "hover:bg-green-200"
      },
      amber: {
        bg: "bg-amber-500",
        bgLight: "bg-amber-100",
        text: "text-amber-500",
        border: "border-amber-500",
        hover: "hover:bg-amber-600",
        hoverLight: "hover:bg-amber-200"
      },
      purple: {
        bg: "bg-purple-600",
        bgLight: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-600",
        hover: "hover:bg-purple-700",
        hoverLight: "hover:bg-purple-200"
      }
    };
    
    return colorMap[program][element];
  };

  return (
    <div className="container-custom">
      {/* Hero section */}
      <div className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg mb-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Programs & Offerings</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Comprehensive incubation programs designed to transform innovative ideas into successful ventures
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#apply" className="px-6 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-200 transition-colors">
              Apply Now
            </a>
            <a href="#programs" className="px-6 py-3 bg-transparent border border-white rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      {/* Why choose us section */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose Our Incubation Programs?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Funding Support</h3>
            <p className="text-gray-600">
              Get access to grants, seed funding, and connections to our network of investors to fuel your growth.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-600 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
            <p className="text-gray-600">
              Learn from industry experts, successful founders, and specialists in business, technology, and finance.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-500 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Workspace & Resources</h3>
            <p className="text-gray-600">
              Access to co-working spaces, labs, meeting rooms, and specialized equipment to build your product.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-purple-600 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Network & Connections</h3>
            <p className="text-gray-600">
              Join a community of innovators and gain access to our extensive network of industry partners and alumni.
            </p>
          </div>
        </div>
      </div>

      {/* Program selection tabs */}
      <div className="mb-12" id="programs">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Incubation Programs</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(programs).map(([key, program]) => (
            <button
              key={key}
              onClick={() => setActiveProgram(key)}
              className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                activeProgram === key 
                  ? `${getColorClass(program.color, 'bg')} text-white` 
                  : `bg-gray-100 ${getColorClass(program.color, 'text')} ${getColorClass(program.color, 'hoverLight')}`
              }`}
            >
              {program.title}
            </button>
          ))}
        </div>
        
        {/* Active program details */}
        <div className="max-w-6xl mx-auto">
          {Object.entries(programs).map(([key, program]) => (
            <div 
              key={key} 
              className={`${activeProgram === key ? 'block' : 'hidden'} bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100`}
            >
              <div className={`${getColorClass(program.color, 'bg')} py-6 px-8 text-white`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{program.title}</h3>
                <p className="text-lg opacity-90">{program.tagline}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 p-8">
                  <div className="mb-8">
                    <p className="text-gray-600 text-lg mb-6">{program.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`${getColorClass(program.color, 'bgLight')} ${getColorClass(program.color, 'text')} px-4 py-2 rounded-full font-medium`}>
                        {program.duration} Duration
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                        Cohort-based
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium">
                        Milestone-driven
                      </span>
                    </div>
                  </div>
                  
                  {/* Program details accordion */}
                  <div className="space-y-6">
                    {/* Eligibility section */}
                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-xl font-bold mb-4">Eligibility Criteria</h4>
                      <ul className="space-y-3">
                        {program.eligibility.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${getColorClass(program.color, 'text')} mt-0.5 mr-2 flex-shrink-0`} viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Focus Areas section */}
                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-xl font-bold mb-4">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.focusAreas.map((area, index) => (
                          <span 
                            key={index} 
                            className={`${getColorClass(program.color, 'bgLight')} ${getColorClass(program.color, 'text')} px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Funding Support section */}
                    <div className="border-b border-gray-200 pb-6">
                      <h4 className="text-xl font-bold mb-4">Funding Support</h4>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="mr-4">
                            <div className={`${getColorClass(program.color, 'bgLight')} rounded-full p-2`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${getColorClass(program.color, 'text')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold">Grants</h5>
                            <p className="text-gray-700">{program.funding.grants}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-4">
                            <div className={`${getColorClass(program.color, 'bgLight')} rounded-full p-2`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${getColorClass(program.color, 'text')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold">Seed Funding</h5>
                            <p className="text-gray-700">{program.funding.seed}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-4">
                            <div className={`${getColorClass(program.color, 'bgLight')} rounded-full p-2`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${getColorClass(program.color, 'text')}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-semibold">Investor Connect</h5>
                            <p className="text-gray-700">{program.funding.connect}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mentorship section */}
                    <div>
                      <h4 className="text-xl font-bold mb-4">Mentorship & Guidance</h4>
                      <ul className="space-y-3">
                        {program.mentorship.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${getColorClass(program.color, 'text')} mt-0.5 mr-2 flex-shrink-0`} viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gray-50">
                  <div className="h-64 mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                    <h4 className="text-lg font-bold mb-4">Program Timeline</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Application Deadline</span>
                        <span className="font-medium">July 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Selection Process</span>
                        <span className="font-medium">July 20-30, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Program Start</span>
                        <span className="font-medium">August 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Demo Day</span>
                        <span className="font-medium">Based on duration</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="#apply" 
                      className={`w-full inline-block ${getColorClass(program.color, 'bg')} ${getColorClass(program.color, 'hover')} text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300`}
                    >
                      Apply for This Program
                    </a>
                    <a 
                      href="#"
                      className="text-gray-600 hover:text-gray-900 inline-flex items-center justify-center w-full mt-4 font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Download Program Brochure</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Application process section */}
      <div className="mb-20" id="apply">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Application Process</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
            
            {/* Steps */}
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Submit Application</h3>
                  <p className="text-gray-600">
                    Fill out our comprehensive application form with details about your startup, team, and vision.
                  </p>
                </div>
                <div className="md:mx-auto flex justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:mx-auto flex justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Initial Screening</h3>
                  <p className="text-gray-600">
                    Our selection committee reviews applications to shortlist startups for the next round.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Pitch Presentation</h3>
                  <p className="text-gray-600">
                    Shortlisted startups present their business to our panel of mentors and industry experts.
                  </p>
                </div>
                <div className="md:mx-auto flex justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="md:mx-auto flex justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Final Selection</h3>
                  <p className="text-gray-600">
                    Based on pitch performance and potential, startups are selected for the incubation program.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Onboarding & Kickoff</h3>
                  <p className="text-gray-600">
                    Selected startups complete paperwork and join an orientation session to begin the program.
                  </p>
                </div>
                <div className="md:mx-auto flex justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 md:p-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take Your Startup to the Next Level?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Applications for our next cohort are now open. Submit yours today and begin your journey towards success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/apply" className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Apply Now
            </a>
            <a href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I apply to multiple programs simultaneously?</h3>
              <p className="text-gray-600">Yes, you can apply to multiple programs, but we recommend focusing on the one that best aligns with your startup's stage and sector. If we believe your startup would be a better fit for a different program, we'll let you know.</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do I need to relocate to join the program?</h3>
              <p className="text-gray-600">While physical presence is beneficial for certain workshops and networking events, most of our programs offer hybrid options. Remote participation is possible, especially for the initial phases.</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What happens after the incubation program ends?</h3>
              <p className="text-gray-600">Graduates of our programs join our alumni network with continued access to resources, investor connections, and community events. We also offer extension options for startups that need additional support.</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Is there any equity requirement to join the program?</h3>
              <p className="text-gray-600">Our basic incubation programs don't require equity. However, for programs that include significant funding support, there may be equity considerations which are discussed transparently during the selection process.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/faq" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <span>View All FAQs</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
