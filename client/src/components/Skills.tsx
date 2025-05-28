import { useAuth } from "@/hooks/useAuth";

interface SkillsProps {
  onOpenAuthModal: () => void;
}

export default function Skills({ onOpenAuthModal }: SkillsProps) {
  const { currentUser } = useAuth();
  
  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">My technical capabilities across AI, software development, and entrepreneurship</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {!currentUser ? (
            /* Preview Version (Blurred) for non-authenticated users */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
                <div className="text-center p-6 max-w-md">
                  <i className="ri-lock-line text-5xl text-primary-600 dark:text-primary-500 mb-4"></i>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Skills & Expertise Locked</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Sign in with your Google account to view my complete skills and expertise in AI/ML.</p>
                  <button 
                    onClick={onOpenAuthModal}
                    className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow"
                  >
                    Sign in to Unlock
                  </button>
                </div>
              </div>
              
              {/* Left Column */}
              <div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">AI & Machine Learning</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Large Language Models</span>
                        <span className="text-gray-500 dark:text-gray-400">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Computer Vision</span>
                        <span className="text-gray-500 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Reinforcement Learning</span>
                        <span className="text-gray-500 dark:text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Natural Language Processing</span>
                        <span className="text-gray-500 dark:text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Deep Learning</span>
                        <span className="text-gray-500 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Generative AI</span>
                        <span className="text-gray-500 dark:text-gray-400">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tools & Technologies</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">PyTorch / TensorFlow</span>
                        <span className="text-gray-500 dark:text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">HuggingFace Transformers</span>
                        <span className="text-gray-500 dark:text-gray-400">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">LangChain / LlamaIndex</span>
                        <span className="text-gray-500 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">MLOps / Model Deployment</span>
                        <span className="text-gray-500 dark:text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Vector Databases</span>
                        <span className="text-gray-500 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Python Data Stack</span>
                        <span className="text-gray-500 dark:text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Full Version (Unblurred) for authenticated users */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">AI & Machine Learning</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Large Language Models</span>
                        <span className="text-gray-500 dark:text-gray-400">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Computer Vision</span>
                        <span className="text-gray-500 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Reinforcement Learning</span>
                        <span className="text-gray-500 dark:text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Natural Language Processing</span>
                        <span className="text-gray-500 dark:text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Deep Learning</span>
                        <span className="text-gray-500 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Generative AI</span>
                        <span className="text-gray-500 dark:text-gray-400">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Tools & Technologies</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">PyTorch / TensorFlow</span>
                        <span className="text-gray-500 dark:text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">HuggingFace Transformers</span>
                        <span className="text-gray-500 dark:text-gray-400">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">LangChain / LlamaIndex</span>
                        <span className="text-gray-500 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">MLOps / Model Deployment</span>
                        <span className="text-gray-500 dark:text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Vector Databases</span>
                        <span className="text-gray-500 dark:text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Python Data Stack</span>
                        <span className="text-gray-500 dark:text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-secondary-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
