export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold text-xl">
                SB
              </div>
              <span className="font-bold text-xl tracking-tight">Sayar Basu</span>
            </div>
            <p className="text-gray-400 mt-2 max-w-md">
              Building the future of artificial intelligence and machine learning solutions.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            &copy; {currentYear} Sayar Basu. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="https://github.com/Sayar-212" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/sayar-basu-21027b261/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a href="https://x.com/BasuSayar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-twitter-fill text-xl"></i>
            </a>
            <a href="mailto:sayar.basu.cse26@heritageit.edu.in" className="text-gray-400 hover:text-white transition-colors">
              <i className="ri-mail-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
