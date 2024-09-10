import React from 'react';
import { ChevronRight } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-600 mb-4 max-w-2xl">
      I&apos;m currently a computer science &amp; business major at Hochschule Karlsruhe. I have a passion for coding, learning, and building.
      <br />
      <br />
      When I&apos;m not programming you can catch me playing the guitar, trying new restaurants, and staring at other people&apos;s dogs and cats.
      <br />
      <br />
      I&apos;m always open to exploring new opportunities, so feel free to contact me.
      </p>
      <a
        href="mailto:thanhtran_xuan@hotmail.de"
        className="text-blue-500 hover:text-blue-700 inline-flex items-center transition-colors duration-200"
      >
        Contact Me
        <ChevronRight className="ml-1 h-4 w-4" />
      </a>
      
    </section>
  );
};

export default AboutMe;