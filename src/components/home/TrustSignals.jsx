import meityLogo from '/assets/partners/meity.png';
import dstLogo from '/assets/partners/dst.png';
import startupIndiaLogo from '/assets/partners/startup-india.png';
import aimLogo from '/assets/partners/aim.png';
import nitiAayogLogo from '/assets/partners/niti-aayog.png';

const TrustSignals = () => {
  const partners = [
    { id: 1, name: "Ministry of Electronics and Information Technology (MeitY)", logo: meityLogo },
    { id: 2, name: "Department of Science & Technology (DST)", logo: dstLogo },
    { id: 3, name: "Startup India", logo: startupIndiaLogo },
    { id: 4, name: "Atal Innovation Mission", logo: aimLogo },
    { id: 5, name: "NITI Aayog", logo: nitiAayogLogo },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container-custom">
        <h3 className="text-center text-xl text-gray-600 mb-10">Supported & Recognized By</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center justify-center p-4">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-24 w-48 object-contain rounded"
              />
              <span className="mt-2 text-xs text-gray-500 text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
