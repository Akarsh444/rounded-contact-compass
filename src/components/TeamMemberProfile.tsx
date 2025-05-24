
import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowLeft } from "lucide-react";

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

interface TeamMemberProfileProps {
  member: TeamMember;
  onBack: () => void;
}

const TeamMemberProfile = ({ member, onBack }: TeamMemberProfileProps) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/40">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Team</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Specializations badges */}
            <div className="flex gap-2 flex-wrap">
              {member.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="text-xs font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wider"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Name and title */}
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 leading-tight">
                {member.name.split(' ')[0]}{' '}
                <span className="block text-gray-600">
                  {member.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-xl font-medium text-teal-600 uppercase tracking-wide">
                {member.role}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                {member.description}
              </p>
            </div>

            {/* Experience stats */}
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-light text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-light text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
            </div>

            {/* Contact and social */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Get in Touch</h3>
                <a
                  href={`mailto:${member.social.email}`}
                  className="text-teal-600 hover:text-teal-700 transition-colors duration-300 text-lg"
                >
                  {member.social.email}
                </a>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: member.social.facebook },
                  { icon: Instagram, href: member.social.instagram },
                  { icon: Linkedin, href: member.social.linkedin },
                  { icon: Twitter, href: member.social.twitter }
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberProfile;
