import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-400 to-indigo-700 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Idea into Reality?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our innovation ecosystem and get access to mentorship, funding, workspace, and a network of industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/apply"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-center"
              >
                Apply Now
              </Link>
              <Link 
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="aspect-square max-w-md mx-auto bg-white/10 rounded-lg backdrop-blur-sm p-8 flex items-center justify-center">
              {/* This could be an illustration or image */}
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">30+</div>
                <div className="text-xl">Startups Currently in Program</div>
                <div className="mt-6 text-lg">Next Cohort Starts</div>
                <div className="text-2xl font-semibold">September 1, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
