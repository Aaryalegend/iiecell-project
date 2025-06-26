const ApplyPage = () => {
  return (
    <div className="container-custom py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Apply Now</h1>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Incubation Program</h2>
          <p className="text-gray-600">
            Fill out the application form below to apply for our startup incubation program. Our team will review your application and get back to you within 7-10 business days.
          </p>
        </div>

        <form className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name *</label>
                <input 
                  type="text" 
                  id="firstName"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone *</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Startup Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Startup Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="startupName" className="block text-gray-700 mb-1">Startup Name *</label>
                <input 
                  type="text" 
                  id="startupName"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-gray-700 mb-1">Website (if any)</label>
                <input 
                  type="url" 
                  id="website"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="sector" className="block text-gray-700 mb-1">Sector *</label>
                <select 
                  id="sector"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a sector</option>
                  <option value="fintech">FinTech</option>
                  <option value="healthtech">HealthTech</option>
                  <option value="edtech">EdTech</option>
                  <option value="cleantech">CleanTech</option>
                  <option value="agritech">AgriTech</option>
                  <option value="ai-ml">AI/ML</option>
                  <option value="iot">IoT</option>
                  <option value="social-impact">Social Impact</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="stage" className="block text-gray-700 mb-1">Current Stage *</label>
                <select 
                  id="stage"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select current stage</option>
                  <option value="ideation">Ideation</option>
                  <option value="prototype">Prototype</option>
                  <option value="mvp">MVP</option>
                  <option value="early-revenue">Early Revenue</option>
                  <option value="growth">Growth</option>
                </select>
              </div>
            </div>
          </div>

          {/* Pitch */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Pitch</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="problem" className="block text-gray-700 mb-1">Problem Statement *</label>
                <textarea 
                  id="problem"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                  placeholder="What problem are you solving?"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="solution" className="block text-gray-700 mb-1">Solution *</label>
                <textarea 
                  id="solution"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                  placeholder="How are you solving this problem?"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="traction" className="block text-gray-700 mb-1">Traction & Metrics</label>
                <textarea 
                  id="traction"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                  placeholder="Any traction metrics, users, revenue, etc."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Additional */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="requirements" className="block text-gray-700 mb-1">Support Requirements *</label>
                <textarea 
                  id="requirements"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                  placeholder="What kind of support are you looking for? (Funding, Mentorship, Workspace, etc.)"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="hearAbout" className="block text-gray-700 mb-1">How did you hear about us? *</label>
                <select 
                  id="hearAbout"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="website">Website</option>
                  <option value="social-media">Social Media</option>
                  <option value="event">Event</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="btn-primary w-full py-3 text-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
