const TrustSignals = () => {
  // Replace with actual partner logos
  const partners = [
    { id: 1, name: "Ministry of Electronics and Information Technology (MeitY)", logo: "/partners/meity.png" },
    { id: 2, name: "Department of Science & Technology (DST)", logo: "/partners/dst.png" },
    { id: 3, name: "Startup India", logo: "/partners/startup-india.png" },
    { id: 4, name: "Atal Innovation Mission", logo: "/partners/aim.png" },
    { id: 5, name: "NITI Aayog", logo: "/partners/niti-aayog.png" },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container-custom">
        <h3 className="text-center text-xl text-gray-600 mb-10">Supported & Recognized By</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4">
              {/* Placeholder for actual logos */}
              <div className="h-16 w-32 bg-gray-100 flex items-center justify-center rounded">
                <span className="text-sm text-gray-500 text-center px-2">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
