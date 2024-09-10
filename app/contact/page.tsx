import React from 'react';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <p className="mb-4">This is a placeholder for your contact page. You can add a contact form or your contact information here.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Contact;