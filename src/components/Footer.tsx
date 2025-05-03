
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agency-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <a href="#home" className="flex items-center">
                <span className="text-2xl font-bold font-heading">IGNITE<span className="text-agency-orange">.</span></span>
              </a>
            </div>
            <p className="text-gray-300 mb-6">
              A full-service digital marketing agency helping businesses achieve exceptional growth online through strategic and data-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-agency-orange transition-colors p-2 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-agency-orange transition-colors p-2 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-agency-orange transition-colors p-2 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-agency-orange transition-colors p-2 rounded-full">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Search Engine Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Social Media Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Design & Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-agency-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-agency-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">hello@ignitedigital.com</span>
              </li>
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-agency-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">123 Marketing St, San Francisco, CA 94103</span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
                />
                <button 
                  type="submit" 
                  className="bg-agency-orange hover:bg-agency-orangeLight text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} IGNITE Marketing Agency. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
