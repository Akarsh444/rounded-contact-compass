
import { Facebook, Instagram, Linkedin, Youtube, X, Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Our NGO</h3>
            <div className="flex items-center mb-4">
              <div className="overflow-hidden rounded-md bg-[#49C6E5] p-2 w-16 h-16 flex items-center justify-center">
                <span className="text-xl font-bold">NGO</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering communities through sustainable development programs since 2015.
            </p>
            <p className="text-gray-300">
              We believe in creating lasting change by working directly with communities to address their most pressing needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Support Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="#donate" className="hover:text-white">Donate</a></li>
              <li><a href="#volunteer" className="hover:text-white">Volunteer</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#0FA0CE]" />
                <span>+91 88788 50707</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#0FA0CE]" />
                <a href="mailto:support@ngo.org" className="hover:text-white">
                  support@ngo.org
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-[#0FA0CE]" />
                <span>104, Indore, Madhya Pradesh</span>
              </li>
              <li className="mt-2">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#0FA0CE] text-white px-4 py-2 rounded hover:bg-[#0c8db6] transition-colors"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on our projects and impact stories.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="w-full border border-[#9F9EA1] bg-transparent text-white px-4 py-2 rounded-md focus:outline-none focus:border-[#0FA0CE]"
              />
              <button
                type="submit"
                className="w-full bg-[#0FA0CE] px-4 py-2 rounded-md hover:bg-[#0c8db6] transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-[#1E2736] p-3 rounded-full hover:bg-[#0FA0CE] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-[#1E2736] p-3 rounded-full hover:bg-[#0FA0CE] transition-colors">
              <X className="h-5 w-5" />
            </a>
            <a href="#" className="bg-[#1E2736] p-3 rounded-full hover:bg-[#0FA0CE] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-[#1E2736] p-3 rounded-full hover:bg-[#0FA0CE] transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} NGO Foundation. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
