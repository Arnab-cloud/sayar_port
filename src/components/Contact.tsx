import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  onOpenAuthModal: () => void;
}

export default function Contact({ onOpenAuthModal }: ContactProps) {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">Interested in collaborating or have questions about my work?</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info */}
              <div className="p-8 bg-primary-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 ai-pattern opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  {/* Preview for non-authenticated users */}
                  {!currentUser && (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <i className="ri-map-pin-line text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-white/80">Sign in to view</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <i className="ri-mail-line text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-white/80">Sign in to view</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <i className="ri-global-line text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Profiles</h4>
                          <div className="flex space-x-3 mt-2">
                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white">
                              <i className="ri-github-fill"></i>
                            </span>
                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white">
                              <i className="ri-linkedin-fill"></i>
                            </span>
                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white">
                              <i className="ri-twitter-fill"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 mt-6 border-t border-white/20">
                        <button 
                          onClick={onOpenAuthModal}
                          className="px-6 py-2.5 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors shadow font-medium"
                        >
                          Sign in to view contact details
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Full info for authenticated users */}
                  {currentUser && (
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <i className="ri-map-pin-line text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-white/80">Kolkata, India</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <i className="ri-mail-line text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <a href="mailto:sayar.basu.cse26@heritageit.edu.in" className="text-white/80 hover:text-white transition-colors">
                            sayar.basu.cse26@heritageit.edu.in
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <i className="ri-phone-line text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <a href="tel:+917980384252" className="text-white/80 hover:text-white transition-colors">
                            +91 7980384252
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <i className="ri-global-line text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Profiles</h4>
                          <div className="flex space-x-3 mt-2">
                            <a href="https://github.com/Sayar-212" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                              <i className="ri-github-fill"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/sayar-basu-21027b261/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                              <i className="ri-linkedin-fill"></i>
                            </a>
                            <a href="https://x.com/BasuSayar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                              <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="mailto:sayar.basu.cse26@heritageit.edu.in" className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                              <i className="ri-mail-fill"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 mt-6 border-t border-white/20">
                        <div className="bg-white/10 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Available For</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Consulting</span>
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">AI Projects</span>
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Speaking</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" 
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" 
                      placeholder="Subject" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" 
                      placeholder="Your message" 
                      required
                    ></textarea>
                  </div>
                  
                  <div className="!mt-6">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow font-medium flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="ri-send-plane-line ml-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
