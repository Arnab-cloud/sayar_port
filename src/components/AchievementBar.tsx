import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface AchievementBarProps {
  onOpenAuthModal: () => void;
}

export default function AchievementBar({ onOpenAuthModal }: AchievementBarProps) {
  const { currentUser } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of achievements
  const achievements = [
    "🏆 Ranked 10 in Aignite",
    "🏆 10th Place in AIgnite Competition with AltairX CodeBase Editor",
    "🚀 Founded RentPe - Innovative Rental Marketplace Platform",
    "🎓 Completed RnPsoft AI Development Internship",
    "🌟 Ranked 15th in Intra College Hackathon with DeafTech",
    "🥇 8th Place in BIT Sindri Innovathon with Sign Language Translator",
    "🤖 Developed Codsoft AI Projects with Official Certification"
  ];

  // Auto-rotate achievements
  useEffect(() => {
    // Start with the first achievement immediately
    setCurrentIndex(0);
    
    // Delay the start of rotation to ensure first achievement is visible longer
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
      }, 15000); // Change every 15 seconds (extremely slow)
      
      return () => clearInterval(interval);
    }, 5000); // Wait 5 seconds before starting rotation
    
    return () => clearTimeout(initialDelay);
  }, [achievements.length]);

  return (
    <div className="w-full bg-gradient-to-r from-primary-600/90 to-secondary-600/90 backdrop-blur-sm py-2 fade-in">
      <div className="container mx-auto px-4 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex-1 overflow-hidden">
            <div className="whitespace-nowrap overflow-hidden relative">
              <div 
                className="inline-block animate-marquee"
                style={{
                  animation: `marquee 90s linear infinite`,
                  transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}rem))`
                }}
              >
                {achievements.map((achievement, index) => (
                  <span 
                    key={index} 
                    className={`inline-block px-4 text-sm md:text-base text-white font-medium transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-70'}`}
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {!currentUser && (
            <button 
              onClick={onOpenAuthModal}
              className="ml-4 px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-white text-xs font-medium transition-colors"
            >
              Sign in to view more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Add this to your global CSS
const style = document.createElement('style');
style.textContent = `
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  animation: marquee 90s linear infinite; /* Moderate animation speed - 1.5 minutes per cycle */
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
}
`;
document.head.appendChild(style);
