import { useState } from 'react';

const EventsPage = () => {
  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Startup Funding Masterclass",
      date: "July 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Virtual (Zoom)",
      description: "Learn how to secure funding for your startup with expert investors and successful entrepreneurs.",
      image: "/assets/events/1.jpg",
      registerLink: "#"
    },
    {
      id: 2,
      title: "Innovation Workshop Series",
      date: "August 5, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "IIE Campus, Conference Hall B",
      description: "A hands-on workshop focused on developing innovative solutions for real-world problems.",
      image: "/assets/events/2.jpg",
      registerLink: "#"
    },
    {
      id: 3,
      title: "Tech Entrepreneurship Webinar",
      date: "August 23, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual (Microsoft Teams)",
      description: "Join industry leaders as they discuss the future of tech entrepreneurship and emerging opportunities.",
      image: "/assets/events/3.jpg",
      registerLink: "#"
    }
  ];

  // Sample data for past events
  const pastEvents = [
    {
      id: 1,
      title: "Annual Startup Showcase 2025",
      date: "March 12, 2025",
      images: [
        "/assets/startups/edulearn.jpg",
        "/assets/startups/ecoinnovate.jpg",
        "/assets/startups/healthtech.jpg"
      ],
      description: "Our flagship event showcasing innovative startups from our incubation program."
    },
    {
      id: 2,
      title: "Women in Entrepreneurship Summit",
      date: "January 28, 2025",
      images: [
        "/assets/images/incubation-center.jpg",
        "/assets/startups/finsecure.jpg"
      ],
      description: "Celebrating and supporting women entrepreneurs across various sectors."
    },
    {
      id: 3,
      title: "Industry-Academia Partnership Forum",
      date: "December 10, 2024",
      images: [
        "/assets/startups/agrotech.jpg",
        "/assets/startups/ecoinnovate.jpg"
      ],
      description: "Bridging the gap between academic research and industry applications."
    }
  ];

  // For image gallery modal
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openGallery = (event, index = 0) => {
    setSelectedEvent(event);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeGallery = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="container-custom py-12 md:py-20">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Events</h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          Stay updated with our workshops, webinars, and networking opportunities designed 
          to foster innovation and entrepreneurship.
        </p>
      </div>

      {/* Upcoming Events Section */}
      <section className="mb-20">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-gray-300 w-16 mr-4"></div>
          <h2 className="text-3xl font-bold text-indigo-600">Upcoming Workshops & Webinars</h2>
          <div className="h-px bg-gray-300 w-16 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">Upcoming</span>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-5">{event.description}</p>
                <div className="text-center">
                  <a
                    href={event.registerLink}
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Gallery Section */}
      <section>
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-gray-300 w-16 mr-4"></div>
          <h2 className="text-3xl font-bold text-indigo-600">Past Events Gallery</h2>
          <div className="h-px bg-gray-300 w-16 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-52 overflow-hidden group">
                <img 
                  src={event.images[0]} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <button 
                    onClick={() => openGallery(event)}
                    className="px-4 py-2 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100"
                  >
                    View Gallery
                  </button>
                </div>
                <div className="absolute bottom-0 right-0 bg-white rounded-tl-lg px-3 py-1 text-sm font-medium text-gray-700">
                  {event.images.length} photos
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery Modal */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeGallery}></div>

            {/* Modal */}
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-gray-900 px-4 py-3 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{selectedEvent.title}</h3>
                <button onClick={closeGallery} className="text-white hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="relative h-96">
                <img 
                  src={selectedEvent.images[currentImageIndex]} 
                  alt={`${selectedEvent.title} image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="bg-gray-900 px-4 py-3 flex justify-between items-center">
                <span className="text-sm text-white">
                  Image {currentImageIndex + 1} of {selectedEvent.images.length}
                </span>
                <div className="flex space-x-3">
                  <button 
                    onClick={prevImage}
                    className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImage}
                    className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
