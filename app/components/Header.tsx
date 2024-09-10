import React from 'react';
import { Linkedin, Github, FileText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="mb-16 text-center">
      <h1 className="text-5xl font-bold mb-2">Xuan Thanh Tran</h1>
      <p className="text-xl text-gray-600">Software Engineer</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://linkedin.com/in/xuanthanhtran" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://github.com/thanhxt" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          <FileText className="h-6 w-6" />
          <span className="sr-only">Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
