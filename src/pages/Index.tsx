
import Header from "@/components/Header";
import OurTeam from "@/components/OurTeam";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-20">
        <OurTeam />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
