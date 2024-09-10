import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  date: string;
}

interface ProjectListProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onSelectProject }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-md cursor-pointer relative overflow-hidden transition-colors duration-300 hover:bg-blue-50"
            whileHover={{ scale: 1.02 }}
            onClick={() => onSelectProject(project)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-700 inline-flex items-center transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="text-right text-sm text-gray-500">
                {project.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;