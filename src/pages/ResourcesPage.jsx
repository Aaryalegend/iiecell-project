import { useState } from 'react';

const ResourcesPage = () => {
  // State for active tab (Toolkits, Policy Docs, or Blog/News)
  const [activeTab, setActiveTab] = useState('toolkits');

  // Sample toolkit resources
  const toolkits = [
    {
      id: 1,
      title: "Startup Business Plan Template",
      description: "A comprehensive template to create a compelling business plan for your startup.",
      icon: "document",
      fileType: "PDF",
      fileSize: "<50MB",
      downloadLink: "https://vhsbi.com/wp-content/uploads/2019/02/Startup-Business-Plan-Template.pdf"
    },
    {
      id: 2,
      title: "Investor Pitch Deck Guide",
      description: "Complete guide to creating an effective pitch deck that attracts investors.",
      icon: "presentation",
      fileType: "PPT",
      fileSize: "<50MB", 
      downloadLink: "https://www.alumni.hbs.edu/Documents/events/NVCPitchDeckTemplate.pdf"
    },
    {
      id: 3,
      title: "Financial Projection Toolkit",
      description: "Excel templates for creating 3-year financial projections for your business.",
      icon: "spreadsheet",
      fileType: "XLS",
      fileSize: "<50MB",
      downloadLink: "https://ocw.mit.edu/courses/15-s21-nuts-and-bolts-of-business-plans-january-iap-2014/09b5bb7de6d9ca4db7e4b2924c484f20_MIT15_S21IAP14_Session3.2.pdf"
    },
    {
      id: 4,
      title: "Market Research Framework",
      description: "A step-by-step guide to conducting effective market research for your startup.",
      icon: "chart",
      fileType: "PDF",
      fileSize: "<50MB",
      downloadLink: "https://backup.pondiuni.edu.in/storage/dde/downloads/markiii_mr.pdf"
    },
    {
      id: 5,
      title: "Brand Development Guide",
      description: "Tools and templates to develop a consistent brand identity for your startup.",
      icon: "image",
      fileType: "PDF",
      fileSize: "<50MB",
      downloadLink: "https://work.iwgplc.com/Giudelines/No18%20Brand%20style%20guide.pdf"
    }
  ];

  // Sample policy documents
  const policyDocs = [
    {
      id: 1,
      title: "Intellectual Property Rights Guide",
      description: "Comprehensive guide to protecting your intellectual property and navigating IPR laws in India.",
      category: "IPR",
      fileType: "PDF",
      lastUpdated: "May 15, 2025",
      downloadLink: "https://dst.gov.in/sites/default/files/E-BOOK%20IPR.pdf"
    },
    {
      id: 2,
      title: "Compliance Framework for Section 8 Companies",
      description: "Detailed documentation on regulatory compliance requirements for Section 8 non-profit startups.",
      category: "Compliance",
      fileType: "PDF",
      lastUpdated: "June 3, 2025",
      downloadLink: "https://www.icsi.edu/media/filer_public/26/e1/26e12d33-33d9-45a0-8cc3-62e1292a9177/presentation_by_cs_sandeep_parekh_compressed.pdf"
    },
    {
      id: 3,
      title: "GST Registration and Filing Guide",
      description: "Step-by-step guide for startups to navigate GST registration and regular filing requirements.",
      category: "Tax",
      fileType: "PDF",
      lastUpdated: "April 22, 2025",
      downloadLink: "https://tutorial.gst.gov.in/cbt/registration/gstregistration/course/story_content/external_files/GST_Registration_Document_Checklist.pdf"
    },
    {
      id: 4,
      title: "Legal Structure Comparison Guide",
      description: "Comparison of different legal structures available for startups in India with pros and cons.",
      category: "Legal",
      fileType: "PDF",
      lastUpdated: "March 10, 2025",
      downloadLink: "https://irt.shodhsagar.com/index.php/j/article/download/677/672/1356"
    },
    {
      id: 5,
      title: "Data Privacy and Protection Policy Template",
      description: "Template and guidelines for creating a compliant data privacy policy for your startup.",
      category: "Privacy",
      fileType: "DOCX",
      lastUpdated: "June 12, 2025",
      downloadLink: "https://www.eugdpr.institute/wp-content/uploads/2019/09/Data-Protection-Template.pdf"
    }
  ];

  // Sample blog/news articles
  const blogNews = [
    {
      id: 1,
      title: "Startup India Seed Fund Scheme Expands to New Sectors",
      summary: "The government has expanded the Startup India Seed Fund Scheme to include additional sectors such as clean energy, agritech, and health technology.",
      category: "Government Schemes",
      date: "June 10, 2025",
      author: "Ministry of Commerce and Industry",
      readMore: "#",
      image: "/src/assets/news/1.jpg"
    },
    {
      id: 2,
      title: "New Tax Incentives Announced for Deep Tech Startups",
      summary: "Finance Minister announces new tax benefits for startups working in deep tech sectors including AI, quantum computing, and biotechnology.",
      category: "Policy Updates",
      date: "May 27, 2025",
      author: "Ministry of Finance",
      readMore: "#",
      image: "/src/assets/news/2.jpg"
    },
    {
      id: 3,
      title: "DPIIT Simplifies Recognition Process for Startups",
      summary: "Department for Promotion of Industry and Internal Trade has simplified the process for startup recognition, making it easier to avail government benefits.",
      category: "Government Schemes",
      date: "May 12, 2025",
      author: "DPIIT",
      readMore: "#",
      image: "/src/assets/news/3.jpg"
    },
    {
      id: 4,
      title: "Sustainable Startup Initiative Launched by NITI Aayog",
      summary: "NITI Aayog introduces a new initiative to support startups focused on sustainability and circular economy business models.",
      category: "Initiatives",
      date: "April 22, 2025",
      author: "NITI Aayog",
      readMore: "#",
      image: "/src/assets/news/4.jpg"
    }
  ];

  // Icon components for toolkit items
  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'document':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'presentation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      case 'spreadsheet':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'image':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="container-custom py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Resources</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Access valuable resources to help your startup succeed, from business templates to 
        policy documents and latest updates on startup schemes.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-12">
        <button
          onClick={() => setActiveTab('toolkits')}
          className={`px-6 py-3 text-lg font-medium rounded-lg transition ${
            activeTab === 'toolkits' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Toolkits
        </button>
        <button
          onClick={() => setActiveTab('policyDocs')}
          className={`px-6 py-3 text-lg font-medium rounded-lg transition ${
            activeTab === 'policyDocs' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Policy Documents
        </button>
        <button
          onClick={() => setActiveTab('blogNews')}
          className={`px-6 py-3 text-lg font-medium rounded-lg transition ${
            activeTab === 'blogNews' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Blog & News
        </button>
      </div>

      {/* Toolkits Content */}
      <div className={`${activeTab === 'toolkits' ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolkits.map(toolkit => (
            <div key={toolkit.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    {renderIcon(toolkit.icon)}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                    {toolkit.fileType}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{toolkit.title}</h3>
                <p className="text-gray-600 mb-6">{toolkit.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{toolkit.fileSize}</span>
                  <a 
                    href={toolkit.downloadLink} 
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>Download</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policy Documents Content */}
      <div className={`${activeTab === 'policyDocs' ? 'block' : 'hidden'}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 mb-8">
          <div className="grid grid-cols-12 bg-gray-50 p-4 border-b text-gray-700 font-medium">
            <div className="col-span-5 md:col-span-6">Document Title</div>
            <div className="col-span-4 md:col-span-3">Category</div>
            <div className="col-span-3 hidden md:block">Last Updated</div>
          </div>
          
          {policyDocs.map(doc => (
            <div key={doc.id} className="grid grid-cols-12 p-4 border-b hover:bg-blue-50 transition-colors">
              <div className="col-span-5 md:col-span-6">
                <h3 className="font-medium text-gray-900">{doc.title}</h3>
                <p className="text-sm text-gray-600 mt-1 pr-2 hidden md:block">{doc.description}</p>
              </div>
              <div className="col-span-4 md:col-span-3 flex items-center">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {doc.category}
                </span>
              </div>
              <div className="col-span-3 hidden md:flex items-center text-gray-600 text-sm">
                {doc.lastUpdated}
              </div>
              <div className="col-span-3 md:hidden flex items-center justify-end">
                <a 
                  href={doc.downloadLink} 
                  className="p-1 text-blue-600 hover:text-blue-800"
                  aria-label={`Download ${doc.title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
              <div className="col-span-12 md:hidden text-sm text-gray-600 mt-2">
                <p className="mb-2">{doc.description}</p>
                <div className="flex justify-between items-center">
                  <span>{doc.lastUpdated}</span>
                  <a 
                    href={doc.downloadLink} 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <span>Download {doc.fileType}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex col-span-12 md:col-span-3 md:justify-end md:items-center">
                <a 
                  href={doc.downloadLink} 
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <span>Download {doc.fileType}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog & News Content */}
      <div className={`${activeTab === 'blogNews' ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogNews.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-5">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-3">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm text-gray-500">By {article.author}</span>
                  <a 
                    href={article.readMore} 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2.5 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition flex items-center">
            <span>View All Articles</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
