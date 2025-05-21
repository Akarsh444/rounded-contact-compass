
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1B2533] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Our NGO</h3>
            <div className="flex items-center mb-4">
              <div className="bg-[#35E0C7] text-[#1B2533] rounded p-2">
                <span className="font-bold">NGO</span>
              </div>
              <span className="ml-3 text-xl font-bold">Prashraya</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering communities through sustainable development programs since 2015.
            </p>
            <p className="text-gray-300">
              We believe in creating lasting change by working directly with communities to address their most pressing needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#donate" className="hover:text-white">Donate</a></li>
              <li><a href="#volunteer" className="hover:text-white">Volunteer</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📞</span> +91 88788 50707
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span> support@ngo.org
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span> 104, Indore, Madhya Pradesh
              </li>
            </ul>
            <button
              className="mt-4 bg-[#35E0C7] text-[#1B2533] px-4 py-2 rounded hover:bg-[#2AC7B0] transition-colors font-medium"
            >
              Get Directions
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on our projects and impact stories.
            </p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 w-full text-gray-900 rounded-md border border-gray-400 focus:outline-none mb-2"
              />
              <button
                type="submit"
                className="bg-[#35E0C7] text-[#1B2533] px-4 py-2 rounded hover:bg-[#2AC7B0] transition-colors font-medium"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700" />
        
        <div className="pt-6 text-center text-gray-300">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="bg-[#1B2533] hover:text-white p-2 rounded-full border border-gray-700 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-[#1B2533] hover:text-white p-2 rounded-full border border-gray-700 transition-colors">
              <X className="h-5 w-5" />
            </a>
            <a href="#" className="bg-[#1B2533] hover:text-white p-2 rounded-full border border-gray-700 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-[#1B2533] hover:text-white p-2 rounded-full border border-gray-700 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p>© {currentYear} NGO Foundation. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="mx-2 hover:text-white">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="mx-2 hover:text-white">Terms & Conditions</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="mx-2 hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
