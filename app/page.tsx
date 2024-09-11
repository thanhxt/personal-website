'use client';

import React, { useState, useEffect } from 'react';
import Leaf from './components/Leaf';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectModal from './components/ProjectModal';
import HackathonExperience from './components/HackathonExperience';
import ContactButton from './components/ContactButton';
import { Project, Hackathon } from './types';
import Projects from './components/Projects';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(false);

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

  const hackathon: Hackathon = {
    name: "Hackfestival 2024",
    description: "Participated in a 48-hour hackathon, developing an innovative solution for tracking the Co2 footprint for employees at Roche.",
    achievement: "Build the Backend for the app using Flask",
    link: "https://github.com/thanhxt/Roche-Hackfestival-2"
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 font-sans relative overflow-hidden transition-colors duration-300`}>
      {[...Array(20)].map((_, i) => (
        <Leaf key={i} delay={i * 0.5} />
      ))}
      <div className="max-w-4xl mx-auto relative z-10">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <AboutMe />
          <Projects projects={projects} onSelectProject={setSelectedProject} />  
          <HackathonExperience hackathon={hackathon} />
          <ContactButton />
        </main>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}