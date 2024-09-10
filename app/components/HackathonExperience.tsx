import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface HackathonProps {
  name: string;
  description: string;
  achievement: string;
  link: string;
}

const HackathonExperience: React.FC<HackathonProps> = ({ name, description, achievement, link }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Hackathon Experience</h2>
      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md relative overflow-hidden">
        <div className="flex items-start">
          <Award className="h-6 w-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-blue-600 font-semibold mb-4">{achievement}</p>
            <a
              href={link}
              className="text-blue-500 hover:text-blue-700 inline-flex items-center transition-colors duration-200"
            >
              Learn More <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonExperience;