import { useAuth } from "@/hooks/useAuth";

interface HeroProps {
  onOpenAuthModal: () => void;
}

export default function Hero({ onOpenAuthModal }: HeroProps) {
  const { currentUser } = useAuth();

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-black dark:via-black dark:to-black dark:bg-gradient-animated clip-path-slant relative overflow-hidden neural-pulse">
      <div className="ai-pattern absolute inset-0"></div>
      
      {/* GenAI Visual Elements - SYMMETRICAL DESIGN */}
      <div className="block">
        {/* Floating Particles - Arranged around the profile box */}
        <div className="ai-particle absolute h-4 w-4 rounded-full bg-cyan-500/40 blur-[2px] top-[20%] left-[20%] animate-float-slow"></div>
        <div className="ai-particle absolute h-4 w-4 rounded-full bg-purple-500/40 blur-[2px] top-[20%] right-[20%] animate-float-medium"></div>
        <div className="ai-particle absolute h-4 w-4 rounded-full bg-blue-400/40 blur-[2px] bottom-[30%] left-[30%] animate-float-fast"></div>
        <div className="ai-particle absolute h-4 w-4 rounded-full bg-indigo-500/40 blur-[2px] bottom-[30%] right-[30%] animate-float-slow"></div>
        <div className="ai-particle absolute h-4 w-4 rounded-full bg-fuchsia-500/40 blur-[2px] top-[30%] left-[40%] animate-float-medium"></div>
        <div className="ai-particle absolute h-4 w-4 rounded-full bg-pink-500/40 blur-[2px] top-[30%] right-[40%] animate-float-slow"></div>
        <div className="ai-particle absolute h-4 w-4 rounded-full bg-teal-500/40 blur-[2px] bottom-[40%] left-[15%] animate-float-fast"></div>
        <div className="ai-particle absolute h-4 w-4 rounded-full bg-violet-500/40 blur-[2px] bottom-[40%] right-[15%] animate-float-medium"></div>
        
        {/* Top Left - Text Generation */}
        <div className="absolute top-[15%] left-[5%] w-48 h-10 overflow-hidden bg-black/20 dark:bg-black/30 backdrop-blur-sm rounded-lg border border-green-500/20 p-2">
          <div className="text-typing whitespace-nowrap text-sm font-mono text-green-600 dark:text-green-400 animate-typing">generate("AI/ML") → GenAI...</div>
        </div>
        
        {/* Top Right - Image Generation */}
        <div className="absolute top-[15%] right-[5%] w-48 h-48 border border-purple-500/20 rounded-md overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 animate-diffusion"></div>
          <div className="absolute inset-0 flex items-center justify-center text-purple-700 dark:text-white font-bold text-sm">DALL·E</div>
        </div>
        
        {/* Bottom Left - LLM Tokens */}
        <div className="absolute bottom-[15%] left-[5%] flex space-x-1 bg-black/20 dark:bg-black/30 backdrop-blur-sm p-2 rounded-lg border border-blue-500/20">
          <div className="h-6 w-6 bg-blue-500/50 dark:bg-blue-500/70 rounded-md animate-token-1 flex items-center justify-center text-white font-bold text-xs">L</div>
          <div className="h-6 w-6 bg-indigo-500/50 dark:bg-indigo-500/70 rounded-md animate-token-2 flex items-center justify-center text-white font-bold text-xs">L</div>
          <div className="h-6 w-6 bg-violet-500/50 dark:bg-violet-500/70 rounded-md animate-token-3 flex items-center justify-center text-white font-bold text-xs">M</div>
        </div>
        
        {/* Bottom Right - Stable Diffusion */}
        <div className="absolute bottom-[15%] right-[5%] flex items-center space-x-1 bg-black/20 dark:bg-black/30 backdrop-blur-sm p-2 rounded-lg border border-pink-500/20">
          <div className="text-pink-700 dark:text-white font-bold text-xs">Stable Diffusion</div>
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500/50 to-purple-500/50 dark:from-pink-500/70 dark:to-purple-500/70 animate-spin-slow"></div>
        </div>
        
        {/* Left Center - ChatGPT */}
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex items-center space-x-1 bg-black/20 dark:bg-black/30 backdrop-blur-sm p-2 rounded-lg border border-teal-500/20">
          <div className="w-6 h-6 rounded-full bg-teal-500/50 dark:bg-teal-500/70 flex items-center justify-center text-white font-bold text-xs">G</div>
          <div className="text-teal-700 dark:text-white font-bold text-xs">ChatGPT</div>
        </div>
        
        {/* Right Center - Midjourney */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 flex items-center space-x-1 bg-black/20 dark:bg-black/30 backdrop-blur-sm p-2 rounded-lg border border-blue-500/20">
          <div className="text-blue-700 dark:text-white font-bold text-xs">Midjourney</div>
          <div className="w-6 h-6 rounded-md bg-gradient-to-r from-blue-500/50 to-indigo-500/50 dark:from-blue-500/70 dark:to-indigo-500/70"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            AI/ML Engineer & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 font-extrabold">GenAI Enthusiast</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-white/90 mb-8">
            Building intelligent solutions at the intersection of artificial intelligence, machine learning, and data science.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button 
              onClick={onOpenAuthModal}
              className="px-8 py-3 bg-white dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 text-primary-600 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:from-cyan-600 dark:hover:to-blue-600 transition-all shadow-lg"
            >
              {currentUser ? 'View Your Profile Badge' : 'Sign in to view full profile'}
            </button>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary-700 dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500 text-white rounded-lg font-medium hover:bg-primary-800 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all shadow-lg"
            >
              Explore Projects
            </a>
          </div>
          
          {/* Profile Preview Card */}
          <div className="flex items-center justify-center mt-12">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-16 -left-16 h-32 w-32 bg-secondary-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 h-24 w-24 bg-primary-500/20 rounded-full blur-xl"></div>
              
              {!currentUser ? (
                /* Protected version for non-authenticated users */
                <div className="bg-white/90 backdrop-blur-lg border border-gray-200 dark:bg-white/10 dark:border-white/20 rounded-xl p-6 shadow-xl relative">
                  <div className="flex items-center space-x-4">
                    {/* Headshot with locked overlay */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden filter blur-sm bg-gray-300">
                        {/* We're not using the placeholder image directly as per requirements */}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200/70 dark:bg-black/30 rounded-full">
                        <i className="ri-lock-line text-gray-600 dark:text-white text-xl"></i>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-800 dark:text-white font-semibold text-lg truncate">Sayar Basu</h3>
                      <p className="text-gray-600 dark:text-white/70 text-sm truncate">AI/ML Engineer | LLM & GenAI Specialist</p>
                      <div className="flex items-center mt-1">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-white/20 rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-secondary-500"></div>
                        </div>
                        <span className="text-gray-500 dark:text-white/60 text-xs ml-2">Profile locked</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-gray-100 dark:bg-white/5 rounded-lg p-2 text-center">
                      <span className="text-xs text-gray-500 dark:text-white/60">Experience</span>
                      <div className="flex items-center justify-center mt-1">
                        <i className="ri-lock-line text-gray-400 dark:text-white/40 mr-1"></i>
                        <span className="text-gray-400 dark:text-white/40 text-xs">Locked</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-white/5 rounded-lg p-2 text-center">
                      <span className="text-xs text-gray-500 dark:text-white/60">Projects</span>
                      <div className="flex items-center justify-center mt-1">
                        <i className="ri-lock-line text-gray-400 dark:text-white/40 mr-1"></i>
                        <span className="text-gray-400 dark:text-white/40 text-xs">Locked</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-white/5 rounded-lg p-2 text-center">
                      <span className="text-xs text-gray-500 dark:text-white/60">Contact</span>
                      <div className="flex items-center justify-center mt-1">
                        <i className="ri-lock-line text-gray-400 dark:text-white/40 mr-1"></i>
                        <span className="text-gray-400 dark:text-white/40 text-xs">Locked</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={onOpenAuthModal}
                    className="w-full mt-4 py-2 bg-primary-100 hover:bg-primary-200 dark:bg-white/10 dark:hover:bg-white/20 text-primary-700 dark:text-white rounded-lg border border-primary-200 dark:border-white/20 transition-colors flex items-center justify-center"
                  >
                    <i className="ri-google-fill mr-2"></i>
                    <span>Sign in to unlock</span>
                  </button>
                </div>
              ) : (
                /* Full version for authenticated users */
                <div className="bg-white/90 backdrop-blur-lg border border-gray-200 dark:bg-white/10 dark:border-white/20 rounded-xl p-6 shadow-xl relative">
                  <div className="flex items-center space-x-4">
                    {/* Constant profile image */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50">
                        <img 
                          src="https://blogger.googleusercontent.com/img/a/AVvXsEgLhFyRrLh3rCyveZufQg1-eC4bjWwK8cCxDjlCVgY7gEXlx---WSZQwwFhw1ZO5dHwrLaHb_JZbhoUPNZfXOvT2SvDIpQtObNh7QAEjcE-DCatl9GqdkCC16I1DiiabWJcoOBxjBtZ_XDGFVYL_QBi1ilHAnVwUrfZ-_WePb983J08GgpDIur51n-52wg=w306-h345" 
                          alt="Sayar Basu" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-800 dark:text-white font-semibold text-lg truncate">{currentUser.displayName || 'User'}</h3>
                      <p className="text-gray-600 dark:text-white/70 text-sm truncate">AI/ML Engineer | LLM & GenAI Specialist</p>
                      <div className="flex items-center mt-1">
                        <div className="w-24 h-2 bg-gray-200 dark:bg-white/20 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-green-500"></div>
                        </div>
                        <span className="text-gray-500 dark:text-white/60 text-xs ml-2">Profile unlocked</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg p-2 text-center transition-colors cursor-pointer">
                      <span className="text-xs text-gray-500 dark:text-white/60">Experience</span>
                      <div className="flex items-center justify-center mt-1">
                        <span className="text-gray-800 dark:text-white text-sm">1.5+ years</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg p-2 text-center transition-colors cursor-pointer">
                      <span className="text-xs text-gray-500 dark:text-white/60">Projects</span>
                      <div className="flex items-center justify-center mt-1">
                        <span className="text-gray-800 dark:text-white text-sm">12+</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg p-2 text-center transition-colors cursor-pointer">
                      <span className="text-xs text-gray-500 dark:text-white/60">Contact</span>
                      <div className="flex items-center justify-center mt-1">
                        <span className="text-gray-800 dark:text-white text-sm">Available</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="#contact"
                    className="w-full mt-4 py-2 bg-primary-100 hover:bg-primary-200 dark:bg-white/10 dark:hover:bg-white/20 text-primary-700 dark:text-white rounded-lg border border-primary-200 dark:border-white/20 transition-colors flex items-center justify-center"
                  >
                    <i className="ri-mail-line mr-2"></i>
                    <span>Contact Me</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
