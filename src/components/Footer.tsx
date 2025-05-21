
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ngo-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
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
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-300">
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
