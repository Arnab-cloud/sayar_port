import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import BadgeModal from "@/components/BadgeModal";
import { Link } from "wouter";

export default function AllProjects() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const { currentUser } = useAuth();

  const handleOpenAuthModal = () => {
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const handleOpenBadgeModal = () => {
    setShowBadgeModal(true);
  };

  const handleCloseBadgeModal = () => {
    setShowBadgeModal(false);
  };

  // Function to render project card
  const renderProjectCard = (
    title: string,
    description: string,
    year: string,
    category: string,
    categoryColor: string,
    icon: string,
    iconColor: string,
    gradientFrom: string,
    gradientTo: string,
    tags: string[],
    projectLink?: string,
    liveLink?: string
  ) => {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
        <div className={`h-48 bg-gradient-to-r ${gradientFrom} ${gradientTo} flex items-center justify-center`}>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
            <i className={`${icon} text-4xl ${iconColor}`}></i>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 ${categoryColor} rounded-full text-xs font-medium`}>{category}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{year}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400 text-xs">{tag}</span>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            {projectLink && (
              <a 
                href={projectLink} 
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconColor.replace('text-', '')} hover:${iconColor.replace('text-', 'text-').replace('-400', '-300').replace('-600', '-700')} text-sm font-medium inline-flex items-center`}
              >
                <i className="ri-github-fill mr-1"></i>
                <span>View on GitHub</span>
                <i className="ri-external-link-line ml-1"></i>
              </a>
            )}
            
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconColor.replace('text-', '')} hover:${iconColor.replace('text-', 'text-').replace('-400', '-300').replace('-600', '-700')} text-sm font-medium inline-flex items-center`}
              >
                {liveLink.includes('linkedin.com') ? (
                  <>
                    <i className="ri-linkedin-fill mr-1"></i>
                    <span>View Certificate</span>
                  </>
                ) : liveLink.includes('bitsindri.ac.in') ? (
                  <>
                    <i className="ri-verified-badge-line mr-1"></i>
                    <span>View Verification</span>
                  </>
                ) : (
                  <>
                    <i className="ri-global-line mr-1"></i>
                    <span>View Live Demo</span>
                  </>
                )}
                <i className="ri-external-link-line ml-1"></i>
              </a>
            )}
            
            {!projectLink && !liveLink && (
              <a 
                href="#" 
                className={`${iconColor.replace('text-', '')} hover:${iconColor.replace('text-', 'text-').replace('-400', '-300').replace('-600', '-700')} text-sm font-medium inline-flex items-center`}
              >
                <span>Project Details</span>
              </a>
            )}
            
            {!currentUser && !projectLink && !liveLink && (
              <div className="absolute right-0 top-0 mt-6 mr-6">
                <div className="relative group">
                  <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400">
                    <i className="ri-lock-line"></i>
                  </button>
                  <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-2 text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    Sign in to view detailed project information
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header onOpenAuthModal={handleOpenAuthModal} onOpenBadgeModal={handleOpenBadgeModal} />
      <main>
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h2>
              <p className="text-gray-600 dark:text-gray-400">A comprehensive collection of my work in artificial intelligence and machine learning</p>
              <Link href="/" className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400">
                <i className="ri-arrow-left-line mr-2"></i>
                <span>Back to Home</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* RnPsoft Internship Portfolio */}
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl col-span-1 md:col-span-2 lg:col-span-3 relative">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-600 to-red-600 text-white px-4 py-2 text-xs font-bold rounded-bl-lg z-10">
                  <i className="ri-verified-badge-fill mr-1"></i>
                  <span>Certified Internship</span>
                </div>
                <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-bold rounded-full z-10 flex items-center">
                  <i className="ri-star-fill mr-1"></i>
                  <span>Featured</span>
                </div>
                <div className="h-56 bg-gradient-to-r from-orange-500/40 via-red-500/40 to-purple-500/40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">RnPsoft Internship Projects</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">Delivering high-impact AI solutions across multiple enterprise platforms</p>
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        <span>3 Months</span>
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center">
                        <i className="ri-calendar-line mr-1"></i>
                        <span>2025</span>
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center">
                        <i className="ri-building-4-line mr-1"></i>
                        <span>RnPsoft</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Project 1: AIClassroom */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/10 p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-school-line text-xl text-white"></i>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">AIClassroom.in</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        Developed an AI-powered educational platform with interactive learning tools and personalized curriculum generation.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {["Gen-AI", "ML", "ConversationalAI"].map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-orange-200/50 dark:bg-orange-800/30 rounded text-orange-700 dark:text-orange-300 text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                      <a 
                        href="https://aiclassroom.in/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400 font-medium"
                      >
                        <i className="ri-global-line mr-1"></i>
                        <span>Visit Platform</span>
                        <i className="ri-external-link-line ml-1"></i>
                      </a>
                    </div>
                    
                    {/* Project 2: abiv.in */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/10 p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-global-line text-xl text-white"></i>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">abiv.in</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        Contributed to a comprehensive web platform with advanced data visualization and user engagement features.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {["DeepFake Technologies", "ML", "Analytics"].map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-red-200/50 dark:bg-red-800/30 rounded text-red-700 dark:text-red-300 text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                      <a 
                        href="https://abiv.in" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center text-sm text-red-600 hover:text-red-700 dark:text-red-400 font-medium"
                      >
                        <i className="ri-global-line mr-1"></i>
                        <span>Visit Platform</span>
                        <i className="ri-external-link-line ml-1"></i>
                      </a>
                    </div>
                    
                    {/* Project 3: Generative AI - Mathematics Solver */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 p-5 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-calculator-line text-xl text-white"></i>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Math Solver with Diagrams</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        Built a generative AI system that solves complex mathematical problems and generates explanatory diagrams for enhanced understanding.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {["Generative AI", "Mathematics", "Visualization"].map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-200/50 dark:bg-purple-800/30 rounded text-purple-700 dark:text-purple-300 text-xs font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-briefcase-4-line text-xl text-white"></i>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white">Professional Internship</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">3-month intensive AI development program</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <a 
                          href="https://www.linkedin.com/posts/sayar-basu-21027b261_completion-certificate-activity-7327717417709723648-7gix?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBKKmwBmwY2qZ9Q77pw02GS0Cp1ptSAAwk" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium rounded-full hover:from-orange-600 hover:to-red-600 transition-all"
                        >
                          <i className="ri-linkedin-fill mr-1"></i>
                          <span>View Certificate</span>
                          <i className="ri-external-link-line ml-1"></i>
                        </a>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                          <i className="ri-calendar-line mr-1"></i>
                          <span>2025</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
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
                    <span className="font-semibold">Second project under my AltairX company</span> - A revolutionary AI-powered code editor that secured 10th position in the prestigious AIgnite competition. One of its kind in the industry.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Founder", "AI", "Code Editor", "Competition", "AIgnite"].map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="https://github.com/Sayar-212/AltairX_AIgnite" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-github-fill mr-1"></i>
                      <span>View on GitHub</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
                    
                    <a 
                      href="https://aignite2025.com/leaderboard" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-verified-badge-line mr-1"></i>
                      <span>View Competition Verification</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
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
                    <span className="font-semibold">My umbrella project</span> featuring an AI-powered career guidance system. Part of the broader AltairX ecosystem I developed. Currently runs on a local ngrok server when deployed.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Owner", "AI", "Career Guidance", "NLP", "Chatbot"].map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded text-green-600 dark:text-green-400 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="https://github.com/Sayar-212/Altair" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-github-fill mr-1"></i>
                      <span>View on GitHub</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
                    
                    <a 
                      href="https://altairai.netlify.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-global-line mr-1"></i>
                      <span>View Demo (requires server)</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
                    <div className="flex items-center mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <i className="ri-information-line mr-1"></i>
                      <span>Note: Demo requires ngrok server to be running</span>
                    </div>
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
                    <span className="font-semibold">My own startup venture</span> - An innovative rental marketplace platform I conceptualized and pitched at Presidency University, receiving special recognition. Currently advancing from ideation to development phase.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Founder", "Startup", "Marketplace", "Real Estate"].map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="https://rent-pe-sigma.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-global-line mr-1"></i>
                      <span>View Prototype</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Codsoft Projects Internship */}
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl relative">
                <div className="absolute top-0 right-0 bg-amber-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg z-10">
                  Internship
                </div>
                <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 text-xs font-bold rounded-full z-10 flex items-center">
                  <i className="ri-verified-badge-line mr-1"></i>
                  <span>Certified</span>
                </div>
                <div className="h-48 bg-gradient-to-r from-amber-500/40 to-orange-500/40 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-amber-600 dark:bg-amber-500 rounded-full flex items-center justify-center">
                      <div className="relative">
                        <i className="ri-code-s-slash-line text-3xl text-white"></i>
                        <i className="ri-ai-generate text-xl text-white absolute -top-1 -right-3"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-xs font-medium">AI Internship</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">2024</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Codsoft Projects</h3>
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">@Codsoft</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Completed multiple AI projects during my internship at Codsoft, demonstrating proficiency in machine learning, data analysis, and AI application development. Received official certification for the completed work.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["AI", "Machine Learning", "Python", "Data Analysis", "Certified"].map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-amber-50 dark:bg-amber-900/20 rounded text-amber-700 dark:text-amber-400 text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="https://github.com/Sayar-212/CodSoftAI" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-github-fill mr-1"></i>
                      <span>View on GitHub</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/posts/sayar-basu-21027b261_artificial-intelligence-internship-trainee-activity-7212775918308610048-lIGx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBKKmwBmwY2qZ9Q77pw02GS0Cp1ptSAAwk" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-linkedin-fill mr-1"></i>
                      <span>View Certificate</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {renderProjectCard(
                "DeafTech - Indian Sign Language Translator",
                "Indian Sign Language Translator and speech synthesizer. Ranked 15th in Intra College hackathon.",
                "2024",
                "Accessibility AI",
                "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
                "ri-hand-coin-line",
                "text-emerald-600 dark:text-emerald-400",
                "from-emerald-500/30",
                "to-teal-500/30",
                ["Computer Vision", "Speech Synthesis", "Accessibility", "Hackathon"],
                "https://github.com/Sayar-212/DeafTech---SignLanguageDetector",
                "https://www.linkedin.com/posts/sayar-basu-21027b261_hackheritage2k25-deaftech-aiforgood-activity-7300915284306010112-amP8"
              )}
              
              {/* Project 7 - Sign Language Translator */}
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
                <div className="h-48 bg-gradient-to-r from-red-500/30 to-pink-500/30 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-red-600 dark:bg-red-500 rounded-full flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <i className="ri-hand-coin-fill text-3xl text-white absolute left-1"></i>
                        <i className="ri-hand-coin-line text-3xl text-white absolute right-1 transform scale-x-[-1]"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-xs font-medium">Accessibility AI</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Sign Language Translator</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Sign Language Translator to Text and Speech and Reverse. 8th rank out of 20 teams. Special Mention, State Winner @ BIT Sindri Innovathon 2025.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Computer Vision", "Speech Synthesis", "Accessibility"].map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400 text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a 
                      href="https://github.com/INNOVATHON/8---bits-------INNOVATHON-25" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-github-fill mr-1"></i>
                      <span>View on GitHub</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
                    
                    <a 
                      href="https://innovathonbits.bitsindri.ac.in/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium inline-flex items-center"
                    >
                      <i className="ri-verified-badge-line mr-1"></i>
                      <span>View Verification</span>
                      <i className="ri-external-link-line ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 8 - TatvIQ */}
              {renderProjectCard(
                "TatvIQ",
                "Intelligent Resume Analyser and Employee Sentiment And Attrition measure.",
                "2024",
                "GenAI Application",
                "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400",
                "ri-bar-chart-grouped-line",
                "text-indigo-600 dark:text-indigo-400",
                "from-indigo-500/30",
                "to-purple-500/30",
                ["AI", "Sentiment Analysis", "HR Tech"],
                "https://github.com/Sayar-212/TatvIQ",
                "https://tatviq-production.up.railway.app/"
              )}
              
              {/* Project 9 - CodeX-PhoenixAI */}
              {renderProjectCard(
                "CodeX-PhoenixAI",
                "AI-enhanced code editor for time and suggestion analysis. Won 2nd Prize in Synergy Skillcef AI Hackathon.",
                "2024",
                "AI Code Editor",
                "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400",
                "ri-code-box-line",
                "text-teal-600 dark:text-teal-400",
                "from-teal-500/30",
                "to-cyan-500/30",
                ["AI", "Code Analysis", "React"],
                "https://github.com/Sayar-212/CodeX-PhoenixAI_SynergyAI",
                "https://www.linkedin.com/posts/sayar-basu-21027b261_phoenixai-has-made-me-proud-i-am-activity-7288208600030724096-ydgm"
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={handleCloseAuthModal} 
        onSuccess={() => {
          handleCloseAuthModal();
          if (currentUser) {
            setTimeout(() => {
              handleOpenBadgeModal();
            }, 500);
          }
        }}
      />
      <BadgeModal 
        isOpen={showBadgeModal} 
        onClose={handleCloseBadgeModal} 
      />
    </>
  );
}