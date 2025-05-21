
const About = () => {
  return (
    <section id="about" className="py-20 bg-ngo-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ngo-primary mb-4">About Us</h2>
          <div className="w-24 h-1 bg-ngo-secondary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="About Prashraya" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-ngo-dark">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Prashraya is dedicated to empowering communities through sustainable development and innovative solutions. 
              We work tirelessly to address social challenges and create positive change in society.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-ngo-dark">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              We envision a world where every individual has equal opportunities to thrive, 
              where communities are resilient and sustainable, and where compassion drives meaningful action.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-bold text-ngo-primary text-4xl">150+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-bold text-ngo-primary text-4xl">5K+</h4>
                <p className="text-gray-600">Lives Impacted</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-bold text-ngo-primary text-4xl">10+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-bold text-ngo-primary text-4xl">30+</h4>
                <p className="text-gray-600">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
