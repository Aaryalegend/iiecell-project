import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold text-white ml-1">Walchand <br />Engineering and Innovation Council</span>
            </div>
            <p className="text-gray-300 mb-4">
              Innovation Incubator and Entrepreneurship Cell is a Section 8 company dedicated to empowering startups and driving innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-400" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-blue-400" aria-label="Twitter">
                <FaTwitter size={22} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-blue-400" aria-label="Facebook">
                <FaFacebook size={22} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-blue-400" aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-blue-400">Programs</Link></li>
              <li><Link to="/startups" className="text-gray-300 hover:text-blue-400">Startups</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-blue-400">Resources</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-blue-400">Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-blue-400">Terms of Service</Link></li>
              <li><Link to="/annual-reports" className="text-gray-300 hover:text-blue-400">Annual Reports</Link></li>
              {/* <li><span className="text-gray-300">Section 8 CIN: U74999XX2023NPL123456</span></li> */}
              {/* <li><span className="text-gray-300">12A/80G Certified</span></li> */}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <p>Dean Innovation, Incubation and Entrepreneurship.</p>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">
                Walchand College Of Engineering, <br />
                Vishrambaug, Sangli - 416415<br />
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> <a href="mailto:weic@walchandsangli.ac.in" className="text-blue-500 hover:text-blue-400">weic@wlachandsangli.ac.in</a>
              </p>
              {/* <p className="text-gray-300">
                <strong>Phone:</strong> <a href="tel:+911234567890" className="hover:text-blue-400">+91 123 456 7890</a>
              </p> */}
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center sm:text-left">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} WCE - INNOVATION INCUBATION AND ENTREPRENEURSHIP CELL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
