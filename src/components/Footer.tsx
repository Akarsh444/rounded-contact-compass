
import { Facebook, Instagram, Linkedin, Youtube, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-ngo-dark text-white">
      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-ngo-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-ngo-secondary mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-gray-300">
              Have questions or want to get involved? Reach out to us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-ngo-accent/20 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <Input id="name" type="text" placeholder="Your Name" required className="w-full bg-ngo-dark/50 text-white border-gray-600" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" required className="w-full bg-ngo-dark/50 text-white border-gray-600" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <Input id="subject" type="text" placeholder="Subject" required className="w-full bg-ngo-dark/50 text-white border-gray-600" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <Textarea id="message" placeholder="Your Message" required className="w-full min-h-[150px] bg-ngo-dark/50 text-white border-gray-600" />
                </div>
                
                <Button type="submit" className="w-full bg-ngo-primary hover:bg-ngo-dark/80">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-ngo-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-300">123 NGO Street, Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ngo-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ngo-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-300">info@prashraya.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ngo-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Working Hours</h4>
                      <p className="text-gray-300">Monday - Friday: 9AM - 5PM</p>
                      <p className="text-gray-300">Saturday: 10AM - 2PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-ngo-primary flex items-center justify-center text-white hover:bg-ngo-dark/80 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-ngo-primary flex items-center justify-center text-white hover:bg-ngo-dark/80 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-ngo-primary flex items-center justify-center text-white hover:bg-ngo-dark/80 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-ngo-primary flex items-center justify-center text-white hover:bg-ngo-dark/80 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-ngo-primary flex items-center justify-center text-white hover:bg-ngo-dark/80 transition-colors">
                    <X className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1653308456806!5m2!1sen!2sus" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Prashraya Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Bottom */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 pt-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="overflow-hidden rounded-full w-12 h-12 border-2 border-white">
                <img 
                  src="https://prashraya.org/wp-content/uploads/elementor/thumbs/354150415_220248024272103_8189691252379910077_n-qtir2fw9zqtc7qrxft7est9yuk34qnuch8ihrepctc.jpg" 
                  alt="Prashraya NGO Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="ml-3 text-xl font-bold">Prashraya</span>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to creating sustainable change through compassion, dedication and community involvement.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our latest projects and events.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-ngo-primary px-4 py-2 rounded-r-md hover:bg-ngo-secondary transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 pb-8 text-center text-gray-300">
          <p>&copy; {currentYear} Prashraya. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="mx-2 hover:text-white">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="mx-2 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
