import { useAuth } from "@/hooks/useAuth";
import { Link } from "wouter";

interface ProjectsProps {
  onOpenAuthModal: () => void;
}

export default function Projects({ onOpenAuthModal }: ProjectsProps) {
  const { currentUser } = useAuth();
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI/ML Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Showcasing my work in artificial intelligence and machine learning</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AltairX - AI CodeBase Editor */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl border-2 border-green-500 dark:border-green-400 relative">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg z-10">
              Founder
            </div>
            <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 text-xs font-bold rounded z-10 flex items-center">
              <i className="ri-trophy-line mr-1"></i>
              <span>10th @ AIgnite</span>
            </div>
            <div className="h-48 bg-gradient-to-r from-green-500/40 to-teal-500/40 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full flex items-center justify-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <div className="relative">
                    <i className="ri-code-box-line text-3xl text-white"></i>
                    <i className="ri-ai-generate text-xl text-white absolute -top-1 -right-3"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">AltairX Company</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">2025</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">AltairX - AI CodeBase Editor</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-semibold">Second project under my AltairX company</span> - A revolutionary AI-powered code editor that secured 10th position in the prestigious AIgnite competition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400 text-xs font-medium">Founder</span>
                <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400 text-xs font-medium">AI</span>
                <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400 text-xs font-medium">Competition</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Sayar-212/AltairX_AIgnite" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium">
                  View on GitHub
                </a>
                {!currentUser && (
                  <div className="relative group">
                    <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                      <i className="ri-lock-line"></i>
                    </button>
                    <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-2 text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      Sign in to view detailed project information
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* AltairX - Career Guidance Bot */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl border-2 border-green-500 dark:border-green-400 relative">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg z-10">
              Owner
            </div>
            <div className="h-48 bg-gradient-to-r from-green-500/40 to-teal-500/40 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full flex items-center justify-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <div className="relative">
                    <i className="ri-robot-line text-3xl text-white"></i>
                    <i className="ri-briefcase-4-line text-xl text-white absolute -bottom-1 -right-3"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">Umbrella Project</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">2024</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-600 dark:text-green-400">Altair - Career Guidance Bot</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-semibold">My umbrella project</span> featuring an AI-powered career guidance system. Part of the broader AltairX ecosystem I developed.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400 text-xs font-medium">Owner</span>
                <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400 text-xs font-medium">AI</span>
                <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400 text-xs font-medium">Chatbot</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://github.com/Sayar-212/Altair" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium">
                  View on GitHub
                </a>
                {!currentUser && (
                  <div className="relative group">
                    <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                      <i className="ri-lock-line"></i>
                    </button>
                    <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-2 text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      Sign in to view detailed project information
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* RentPe - My Own Startup */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl border-2 border-blue-500 dark:border-blue-400 relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg z-10">
              Founder
            </div>
            <div className="h-48 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-full flex items-center justify-center relative">
                <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                  <i className="ri-home-4-line text-3xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-bold">My Startup</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">2024</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">RentPe</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                <span className="font-semibold">My own startup venture</span> - An innovative rental marketplace platform I conceptualized and pitched at Presidency University, receiving special recognition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400 text-xs font-medium">Founder</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400 text-xs font-medium">Startup</span>
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400 text-xs font-medium">Marketplace</span>
              </div>
              <div className="flex justify-between items-center">
                <a href="https://rent-pe-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
                  View Prototype
                </a>
                {!currentUser && (
                  <div className="relative group">
                    <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                      <i className="ri-lock-line"></i>
                    </button>
                    <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-2 text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                      Sign in to view detailed project information
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {!currentUser && (
          <div className="text-center mt-12">
            <button 
              onClick={onOpenAuthModal}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow inline-flex items-center"
            >
              <span>Sign in to view all projects</span>
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        )}
        
        {currentUser && (
          <div className="text-center mt-12">
            <Link href="/projects" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow inline-flex items-center">
              <span>View all projects</span>
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
