
import { ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Team</span>
        </button>

        <div className="grid grid-cols-2 gap-0 min-h-[80vh]">
          {/* Left side - Specializations and name */}
          <div className="bg-gray-100 p-16 flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex gap-4 mb-8">
                {member.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium text-gray-700 uppercase tracking-wider"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              
              <h1 className="text-6xl font-light text-gray-900 leading-tight mb-2">
                {member.name.split(' ')[0]}{' '}
                <span className="text-gray-800 font-normal">
                  {member.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                {member.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-light text-gray-900 mb-2">15+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-light text-gray-900 mb-2">4.9</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">
                    Impact Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            
            {/* Circular badge overlay */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-yellow-400 rounded-full flex flex-col items-center justify-center text-center">
              <div className="text-xs font-bold text-gray-900 uppercase leading-none">
                Get In
              </div>
              <div className="text-xs font-bold text-gray-900 uppercase leading-none">
                Touch
              </div>
              <ArrowLeft className="w-4 h-4 text-gray-900 mt-1 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
