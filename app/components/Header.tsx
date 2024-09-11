import Link from 'next/link'
import { Linkedin, Github, FileText, Sun, Moon, ArrowLeft } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, showBackButton = false }) => {
  return (
    <header className="mb-16 text-center relative">
      <button
        onClick={toggleDarkMode}
        className="absolute top-0 right-0 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>
      {showBackButton && (
        <Link href="/" legacyBehavior>
          <a className="absolute top-0 left-0 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Back to Home</span>
          </a>
        </Link>
      )}
      <h1 className="text-5xl font-bold mb-2">Xuan Thanh Tran</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">Software Engineer</p>
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
  )
}
export default Header

