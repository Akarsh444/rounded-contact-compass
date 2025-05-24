
import { Facebook, Instagram, Linkedin, Twitter, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Anjali Verma",
    role: "Executive Director",
    specializations: ["Rural Development", "Women Empowerment"],
    description: "Anjali has 15+ years in nonprofit leadership focused on rural development and women empowerment.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Program Management", "Impact Assessment"],
    description: "Ravi manages key programs and ensures alignment with local needs and impact goals.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Community Engagement", "Strategic Partnerships"],
    description: "Sneha builds strong community ties and drives long-term engagement strategies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Education Programs", "Volunteer Training"],
    description: "Amit develops learning programs and trains volunteers to support underserved students.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Healthcare Access", "Rural Health"],
    description: "Priya runs health campaigns and works with clinics to improve rural healthcare access.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Donor Relations", "Partnership Development"],
    description: "Rohan leads donor relations and builds funding collaborations with private partners.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Social Media", "Digital Storytelling"],
    description: "Kritika drives social media campaigns and digital storytelling for awareness.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Volunteer Management", "Training Programs"],
    description: "Neha recruits, trains, and supports volunteers for smooth program delivery.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Budget Management", "Financial Transparency"],
    description: "Arjun manages budgets, ensures transparency, and handles donor reporting.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Legal Compliance", "Policy Advisory"],
    description: "Divya ensures legal compliance, reviews contracts, and advises on policies.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Data Analysis", "Impact Measurement"],
    description: "Siddharth analyzes data and tracks key metrics to improve program impact.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Environmental Sustainability", "Green Practices"],
    description: "Ishita promotes green practices and integrates sustainability across projects.",
    image: "https://images.unsplash.com/photo-1594736797933-d0d30c3b9fcb?w=600&h=800&fit=crop&crop=face",
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
    specializations: ["Youth Mentorship", "Skill Development"],
    description: "Kabir leads skill-building and mentorship initiatives for underprivileged youth.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      twitter: "#",
      email: "kabir@prashraya.org"
    }
  }
];

const OurTeam = ({ onMemberClick }: { onMemberClick?: (member: typeof teamMembers[0]) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absIndex = Math.abs(diff);
    
    if (absIndex === 0) {
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 30,
        opacity: 1
      };
    } else if (absIndex === 1) {
      const translateX = diff > 0 ? '100px' : '-100px';
      return {
        transform: `translateX(${translateX}) scale(0.9)`,
        zIndex: 20,
        opacity: 0.7
      };
    } else if (absIndex === 2) {
      const translateX = diff > 0 ? '150px' : '-150px';
      return {
        transform: `translateX(${translateX}) scale(0.8)`,
        zIndex: 10,
        opacity: 0.4
      };
    } else {
      return {
        transform: 'translateX(200px) scale(0.7)',
        zIndex: 0,
        opacity: 0
      };
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <div className="text-left mb-20 max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-4 tracking-tight">
            MEET
          </h1>
          <h2 className="text-6xl md:text-7xl font-light text-gray-400 mb-8 tracking-tight">
            OUR
          </h2>
          <h3 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            TEAM
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            When you need dedicated and effective social impact services, you can trust our team at Prashraya NGO.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-40 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="relative w-full max-w-md mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="absolute inset-0 transition-all duration-500 ease-out cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => onMemberClick?.(member)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-light text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-teal-600 uppercase tracking-wider">
                        {member.role}
                      </p>
                      <div className="flex justify-center gap-2 flex-wrap">
                        {member.specializations.map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-40 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
