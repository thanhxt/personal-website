import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Hackathon } from '../types';

interface HackathonProps {
  hackathon: Hackathon;
}


const HackathonExperience: React.FC<HackathonProps> = ({ hackathon }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Hackathon Experience</h2>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md relative overflow-hidden">
        <div className="flex items-start">
        <Award className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{hackathon.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2 ">{hackathon.description}</p>
            <p className="text-blue-600 font-semibold mb-4 dark:text-blue-400">{hackathon.achievement}</p>
            <a
              href={hackathon.link}
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center transition-colors duration-200"
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