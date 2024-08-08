import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm text-gray-600">© 2024 Todo App. All rights reserved.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
          <Github className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
