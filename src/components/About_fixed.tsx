import { useAuth } from "@/hooks/useAuth";

interface AboutProps {
  onOpenAuthModal: () => void;
}

export default function About({ onOpenAuthModal }: AboutProps) {
  const { currentUser } = useAuth();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">Get to know more about my background and expertise</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Content Column */}
            <div className="col-span-1 lg:col-span-2">
              {/* Bio Card */}
              {!currentUser && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Sayar Basu</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    AI/ML Engineer specializing in GenAI and LLMs. Passionate about building intelligent solutions that solve real-world problems.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="ri-lock-line text-gray-500 dark:text-gray-400 mr-2"></i>
                      <span className="text-gray-500 dark:text-gray-400">Full background and expertise locked</span>
                    </div>
                    <button 
                      onClick={onOpenAuthModal}
                      className="px-4 py-1.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              )}
              
              {currentUser && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl p-5 shadow-md transition-all hover:shadow-lg h-full">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="bg-primary-100 dark:bg-primary-800 w-8 h-8 rounded-lg flex items-center justify-center mr-2">
                      <i className="ri-user-line text-primary-600 dark:text-primary-400"></i>
                    </span>
                    Professional Summary
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    AI/ML Engineer with 1.5+ years of experience specializing in Generative AI, Large Language Models (LLMs), and Multimodal AI systems. I combine deep technical fluency with creative problem-solving to build transformative AI applications that bridge research and industry.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    My work is grounded in computer science and mathematics, and spans industries including healthcare, finance, e-commerce, and assistive tech. From crafting responsible AI frameworks to building end-to-end ML pipelines and real-time inference engines, I engineer AI that works — fast, ethical, and scalable.
                  </p>
                </div>
              )}
            </div>
            
            {/* Center Profile Box Column */}
            <div className="col-span-1 flex justify-center">
              {/* Preview version for non-authenticated users */}
              {!currentUser && (
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="w-full h-96 md:h-auto aspect-[3/4] bg-gray-300 filter blur-sm"></div>
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
                    <i className="ri-lock-line text-white text-3xl mb-2"></i>
                    <p className="text-white text-center font-medium">Sign in to view full profile details</p>
                  </div>
                </div>
              )}
              
              {/* Full version for authenticated users */}
              {currentUser && (
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="w-full h-96 md:h-auto aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 relative">
                    {/* Matrix-style code rain effect */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="code-rain"></div>
                    </div>
                    
                    {/* Tech circuit pattern overlay */}
                    <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
                    
                    {/* Profile content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      {/* Top section with tech metrics */}
                      <div className="space-y-3">
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-blue-300">// AI Experience</span>
                            <span className="text-xs font-mono text-green-300">1.5+ years</span>
                          </div>
                          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 w-[85%]"></div>
                          </div>
                        </div>
                        
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-purple-300">// LLM Expertise</span>
                            <span className="text-xs font-mono text-green-300">Advanced</span>
                          </div>
                          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-500 to-green-500 w-[90%]"></div>
                          </div>
                        </div>
                        
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/30">
                          <div className="text-xs font-mono text-cyan-300 mb-2">// Tech Stack</div>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-black/50 rounded text-xs font-mono text-cyan-400 border border-cyan-500/30">Python</span>
                            <span className="px-2 py-1 bg-black/50 rounded text-xs font-mono text-green-400 border border-green-500/30">TensorFlow</span>
                            <span className="px-2 py-1 bg-black/50 rounded text-xs font-mono text-purple-400 border border-purple-500/30">PyTorch</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Middle section with animated elements */}
                      <div className="flex justify-center items-center py-4">
                        <div className="relative h-16 w-16">
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/50 animate-spin-slow"></div>
                          <div className="absolute inset-2 rounded-full border-2 border-dashed border-green-500/50 animate-spin-slow-reverse"></div>
                          <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-500/50 animate-spin-slow"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-xs font-mono">AI</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-400/30 shadow-lg">
                        <div className="relative">
                          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="absolute -inset-1 bg-green-500/30 rounded-full animate-ping opacity-75"></div>
                        </div>
                        <span className="text-sm font-medium flex items-center">
                          <code className="mr-1 font-mono text-green-300">status:</code> 
                          <span className="text-green-400 font-semibold">Available for projects</span>
                          <i className="ri-code-line ml-2 text-green-300"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Content Column */}
            <div className="col-span-1 lg:col-span-2">
              {/* Current Focus Areas Card for non-authenticated users */}
              {!currentUser && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-sm">AI</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-sm">GenAI</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-sm">LLMs</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-sm">Python</span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-sm">More...</span>
                  </div>
                </div>
              )}
              
              {/* Full content for authenticated users */}
              {currentUser && (
                <div className="bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 border border-green-100 dark:border-green-800/50 rounded-xl p-5 shadow-md transition-all hover:shadow-lg h-full">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="bg-primary-100 dark:bg-primary-800 w-8 h-8 rounded-lg flex items-center justify-center mr-2">
                      <i className="ri-focus-3-line text-primary-600 dark:text-primary-400"></i>
                    </span>
                    Current Focus Areas
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
                          <i className="ri-cpu-line text-blue-600 dark:text-blue-400"></i>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">LLM fine-tuning, quantization, and low-latency deployment</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start">
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg mr-3">
                          <i className="ri-ai-generate text-purple-600 dark:text-purple-400"></i>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">Building multimodal AI systems for real-time and enterprise applications</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start">
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg mr-3">
                          <i className="ri-database-2-line text-green-600 dark:text-green-400"></i>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">Prompt engineering, RAG architectures, and vector store optimization</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start">
                        <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg mr-3">
                          <i className="ri-shield-check-line text-amber-600 dark:text-amber-400"></i>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">Developing ethical AI standards and explainable AI solutions</p>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 border-cyan-500 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start">
                        <div className="bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded-lg mr-3">
                          <i className="ri-device-line text-cyan-600 dark:text-cyan-400"></i>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">Edge AI and Mobile GPU optimization for GenAI models</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Skills & Tools Section and Resume/Contact Links */}
          {currentUser && (
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-800 w-8 h-8 rounded-lg flex items-center justify-center mr-2">
                  <i className="ri-tools-line text-primary-600 dark:text-primary-400"></i>
                </span>
                Skills & Tools
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left column of skills */}
                <div>
                  {/* Core Domains */}
                  <div className="mb-6">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Core Domains
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['AI', 'Machine Learning', 'GenAI', 'LLMs', 'NLP', 'Computer Vision', 'Deep Learning', 'Multimodal AI', 'MLOps', 'Edge AI', 'Ethical AI', 'XAI', 'Math Solvers'].map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-100 dark:border-blue-800/50 hover:shadow-sm transition-all">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Programming & Scripting */}
                  <div className="mb-6">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Programming & Scripting
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Java', 'HTML/CSS', 'JavaScript', 'Bash'].map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm border border-green-100 dark:border-green-800/50 hover:shadow-sm transition-all">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Frameworks & Libraries */}
                  <div className="mb-6">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Frameworks & Libraries
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['PyTorch', 'TensorFlow', 'HuggingFace Transformers', 'LangChain', 'OpenCV', 'MediaPipe', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'SymPy'].map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm border border-purple-100 dark:border-purple-800/50 hover:shadow-sm transition-all">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right column of skills */}
                <div>
                  {/* LLM & GenAI Tooling */}
                  <div className="mb-6">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      LLM & GenAI Tooling
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['HuggingFace Hub', 'OpenAI APIs', 'Ollama', 'Mistral', 'Falcon', 'Gemma', 'FLAN-T5', 'LLaMA', 'SDXL-Lightning', 'SadTalker', 'VITS'].map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-full text-sm border border-amber-100 dark:border-amber-800/50 hover:shadow-sm transition-all">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Vector Databases & RAG Stack */}
                  <div className="mb-6">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      Vector Databases & RAG Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['Pinecone', 'Weaviate', 'FAISS', 'ChromaDB', 'Haystack'].map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded-full text-sm border border-cyan-100 dark:border-cyan-800/50 hover:shadow-sm transition-all">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Infrastructure & DevOps */}
                  <div className="mb-6">
                    <h5 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Infrastructure & DevOps
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['Docker', 'Git', 'GitHub Actions', 'NVIDIA CUDA', 'Mobile GPU Deployment', 'Google Colab', 'HuggingFace Spaces'].map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm border border-indigo-100 dark:border-indigo-800/50 hover:shadow-sm transition-all">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Resume and Contact links at the bottom */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="https://drive.google.com/file/d/1JMp4Edbvsx7wEXdSemfwbrJE83qphieM/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-md flex items-center"
                >
                  <i className="ri-file-text-line mr-2"></i> View Resume
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-md flex items-center"
                >
                  <i className="ri-mail-line mr-2"></i> Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
