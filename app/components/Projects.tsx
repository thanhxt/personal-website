import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

const ProjectList: React.FC<ProjectsProps> = ({ projects, onSelectProject }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md cursor-pointer relative overflow-hidden hover:bg-blue-50"
            whileHover={{ scale: 1.02 }}
            onClick={() => onSelectProject(project)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 dark:text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="text-right text-sm text-gray-500 dark:text-gray-400">
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