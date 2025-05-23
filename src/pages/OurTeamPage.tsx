
import Header from "@/components/Header";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";

const OurTeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-20">
        <OurTeam />
      </div>
      <Footer />
    </div>
  );
};

export default OurTeamPage;
