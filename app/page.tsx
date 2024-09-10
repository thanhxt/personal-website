'use client';

import React, { useState } from 'react';
import Leaf from './components/Leaf';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import ProjectModal from './components/ProjectModal';
import HackathonExperience from './components/HackathonExperience';


interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  date: string;
}

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { 
      id: 1, 
      title: 'Student Server', 
      description: 'RESTful API for student data management using Java Spring, PostgreSQL, and Keycloak. Containerized with Docker and Kubernetes-ready.', 
      link: 'https://github.com/thanhxt/StudentServer', 
      date: 'Java-Spring, Postgres, Keycloak, Docker, Kubernetes' 
    },
    { 
      id: 2, 
      title: 'Carbon Tracing Web App', 
      description: 'Hackathon project: Web app to track employee CO2 footprint. Python-Flask backend with HTML/CSS/JS frontend.', 
      link: 'https://github.com/thanhxt/Roche-Hackfestival-2', 
      date: 'Python-Flask, HTML, CSS, JavaScript' 
    },
    { 
      id: 3, 
      title: 'Snake', 
      description: 'Classic Snake game in Java using Swing. Features growing snake, random food spawns, and score tracking.', 
      link: 'https://github.com/thanhxt/Snake', 
      date: 'Java-Swing' 
    },
  ];

  const hackathon = {
    name: "Hackfestival 2024",
    description: "Participated in a 48-hour hackathon, developing an innovative solution for tracking the Co2 footprint for employees at Roche.",
    achievement: "Build the Backend for the app using Flask",
    link: "https://github.com/thanhxt/Roche-Hackfestival-2"
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <Leaf key={i} delay={i * 500} />
        ))}
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <Header />
        <main>
          <AboutMe />
          <ProjectList projects={projects} onSelectProject={setSelectedProject} />
          <HackathonExperience {...hackathon} />
        </main>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Home;