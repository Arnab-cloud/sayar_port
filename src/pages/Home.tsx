import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import BadgeModal from "@/components/BadgeModal";
import AchievementBar from "@/components/AchievementBar";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
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

  return (
    <>
      <Header onOpenAuthModal={handleOpenAuthModal} onOpenBadgeModal={handleOpenBadgeModal} />
      <main>
        <Hero onOpenAuthModal={handleOpenAuthModal} />
        <AchievementBar onOpenAuthModal={handleOpenAuthModal} />
        <About onOpenAuthModal={handleOpenAuthModal} />
        <Projects onOpenAuthModal={handleOpenAuthModal} />
        <Skills onOpenAuthModal={handleOpenAuthModal} />
        <Contact onOpenAuthModal={handleOpenAuthModal} />
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
