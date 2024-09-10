import React from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';

const ContactButton: React.FC = () => {
  return (
    <section className="text-center">
      <Link href="/contact" passHref>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Contact Me
          <Send className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </Link>
    </section>
  );
};

export default ContactButton;
