
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Anjali Verma",
    role: "Executive Director",
    description: "Anjali has 15+ years in nonprofit leadership focused on rural development and women empowerment.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "anjali@prashraya.org"
    }
  },
  {
    id: 2,
    name: "Ravi Mehra",
    role: "Program Manager",
    description: "Ravi manages key programs and ensures alignment with local needs and impact goals.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "ravi@prashraya.org"
    }
  },
  {
    id: 3,
    name: "Sneha Iyer",
    role: "Community Outreach Lead",
    description: "Sneha builds strong community ties and drives long-term engagement strategies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "sneha@prashraya.org"
    }
  },
  {
    id: 4,
    name: "Amit Joshi",
    role: "Education Coordinator",
    description: "Amit develops learning programs and trains volunteers to support underserved students.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "amit@prashraya.org"
    }
  },
  {
    id: 5,
    name: "Priya Nair",
    role: "Healthcare Program Officer",
    description: "Priya runs health campaigns and works with clinics to improve rural healthcare access.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "priya@prashraya.org"
    }
  },
  {
    id: 6,
    name: "Rohan Deshmukh",
    role: "Fundraising & Partnerships Lead",
    description: "Rohan leads donor relations and builds funding collaborations with private partners.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "rohan@prashraya.org"
    }
  },
  {
    id: 7,
    name: "Kritika Sharma",
    role: "Digital Media Manager",
    description: "Kritika drives social media campaigns and digital storytelling for awareness.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "kritika@prashraya.org"
    }
  },
  {
    id: 8,
    name: "Neha Kapoor",
    role: "Volunteer Coordinator",
    description: "Neha recruits, trains, and supports volunteers for smooth program delivery.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "neha@prashraya.org"
    }
  },
  {
    id: 9,
    name: "Arjun Rao",
    role: "Financial Officer",
    description: "Arjun manages budgets, ensures transparency, and handles donor reporting.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "arjun@prashraya.org"
    }
  },
  {
    id: 10,
    name: "Divya Menon",
    role: "Legal & Compliance Head",
    description: "Divya ensures legal compliance, reviews contracts, and advises on policies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "divya@prashraya.org"
    }
  },
  {
    id: 11,
    name: "Siddharth Jain",
    role: "Monitoring & Evaluation Lead",
    description: "Siddharth analyzes data and tracks key metrics to improve program impact.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "siddharth@prashraya.org"
    }
  },
  {
    id: 12,
    name: "Ishita Gupta",
    role: "Sustainability Coordinator",
    description: "Ishita promotes green practices and integrates sustainability across projects.",
    image: "https://images.unsplash.com/photo-1594736797933-d0d30c3b9fcb?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "ishita@prashraya.org"
    }
  },
  {
    id: 13,
    name: "Kabir Shah",
    role: "Youth Engagement Officer",
    description: "Kabir leads skill-building and mentorship initiatives for underprivileged youth.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "kabir@prashraya.org"
    }
  }
];

const TeamCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } hover:-translate-y-2`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,249,255,0.8) 100%)',
      }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Profile Image */}
      <div className="relative mb-6 flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-2 rounded-full border-2 border-teal-200/30 group-hover:border-teal-400/50 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center relative z-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-teal-600 font-semibold mb-3 text-sm uppercase tracking-wide">
          {member.role}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {member.description}
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-3">
          {[
            { icon: Facebook, href: member.social.facebook },
            { icon: Instagram, href: member.social.instagram },
            { icon: Linkedin, href: member.social.linkedin },
            { icon: Twitter, href: member.social.twitter },
            { icon: Mail, href: `mailto:${member.social.email}` }
          ].map(({ icon: Icon, href }, iconIndex) => (
            <a
              key={iconIndex}
              href={href}
              className="w-10 h-10 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center text-teal-600 hover:from-teal-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and abstract shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50"></div>
      
      {/* Abstract background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Meet Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Dedicated People Behind
            <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals who work tirelessly to create positive change and make a lasting impact in communities across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
