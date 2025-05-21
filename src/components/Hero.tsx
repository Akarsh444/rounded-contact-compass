
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ngo-primary/80 to-ngo-dark/90"></div>
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto relative z-10 text-center text-white mt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Making A Difference In Every Life
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            At Prashraya, we believe in creating sustainable change through compassion, 
            dedication and community involvement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-ngo-primary hover:bg-ngo-accent hover:text-ngo-dark"
              onClick={() => document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'})}
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ngo-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
