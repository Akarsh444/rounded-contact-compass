
import Header from "@/components/Header";
import OurTeam from "@/components/OurTeam";
import TeamMemberProfile from "@/components/TeamMemberProfile";
import Footer from "@/components/Footer";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specializations: string[];
  description: string;
  image: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

const OurTeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleBackToTeam = () => {
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-20">
        {selectedMember ? (
          <TeamMemberProfile member={selectedMember} onBack={handleBackToTeam} />
        ) : (
          <OurTeam onMemberClick={handleMemberClick} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OurTeamPage;
