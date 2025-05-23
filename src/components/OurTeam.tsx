
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Executive Director",
    description: "Sarah leads our organization with over 15 years of experience in community development and social impact initiatives.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "sarah@prashraya.org"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Program Manager",
    description: "Michael oversees our educational programs and has a background in curriculum development and youth mentorship.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "michael@prashraya.org"
    }
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Community Outreach",
    description: "Priya builds bridges between our organization and local communities, ensuring our programs meet real needs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "priya@prashraya.org"
    }
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Finance Director",
    description: "David ensures transparency and accountability in our financial operations and grant management.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "david@prashraya.org"
    }
  }
];

const OurTeam = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ngo-primary mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who work tirelessly to make a positive impact in our communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-ngo-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-ngo-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.facebook}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ngo-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ngo-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ngo-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ngo-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-ngo-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
