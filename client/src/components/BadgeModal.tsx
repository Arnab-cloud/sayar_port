import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface BadgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BadgeModal({ isOpen, onClose }: BadgeModalProps) {
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  
  // Generate a random badge ID
  const badgeId = `AIML${Math.floor(1000 + Math.random() * 9000)}`;

  // Share platform configurations
  const sharePlatforms = [
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-box-fill',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      name: 'Twitter',
      icon: 'ri-twitter-fill',
      color: 'bg-blue-400',
      hoverColor: 'hover:bg-blue-500',
      textColor: 'text-white'
    },
    {
      name: 'Facebook',
      icon: 'ri-facebook-fill',
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800',
      textColor: 'text-white'
    },
    {
      name: 'WhatsApp',
      icon: 'ri-whatsapp-fill',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      textColor: 'text-white'
    }
  ];

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Get the badge image from the server
      const response = await fetch('/api/generate-badge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: currentUser?.displayName || 'Guest',
          email: currentUser?.email || '',
          photoURL: "https://blogger.googleusercontent.com/img/a/AVvXsEgLhFyRrLh3rCyveZufQg1-eC4bjWwK8cCxDjlCVgY7gEXlx---WSZQwwFhw1ZO5dHwrLaHb_JZbhoUPNZfXOvT2SvDIpQtObNh7QAEjcE-DCatl9GqdkCC16I1DiiabWJcoOBxjBtZ_XDGFVYL_QBi1ilHAnVwUrfZ-_WePb983J08GgpDIur51n-52wg=w306-h345"
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate badge');
      }

      const badgeBlob = await response.blob();
      const url = window.URL.createObjectURL(badgeBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sayar-basu-badge.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Badge Downloaded",
        description: "Your badge has been downloaded successfully!",
      });
    } catch (error) {
      console.error('Error downloading badge:', error);
      toast({
        title: "Download Failed",
        description: "Failed to download your badge. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async (platform: string) => {
    try {
      setIsSharing(true);
      
      // First, get the badge image URL
      const response = await fetch('/api/generate-badge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: currentUser?.displayName || 'Guest',
          email: currentUser?.email || '',
          photoURL: "https://blogger.googleusercontent.com/img/a/AVvXsEgLhFyRrLh3rCyveZufQg1-eC4bjWwK8cCxDjlCVgY7gEXlx---WSZQwwFhw1ZO5dHwrLaHb_JZbhoUPNZfXOvT2SvDIpQtObNh7QAEjcE-DCatl9GqdkCC16I1DiiabWJcoOBxjBtZ_XDGFVYL_QBi1ilHAnVwUrfZ-_WePb983J08GgpDIur51n-52wg=w306-h345"
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate badge');
      }
      
      // Create a blob URL for the image
      const badgeBlob = await response.blob();
      const blobUrl = URL.createObjectURL(badgeBlob);
      
      // Create share text
      const shareText = `Check out my AI/ML Engineer badge from Sayar Basu's portfolio!`;
      const shareUrl = window.location.origin;
      
      // Create appropriate share URL based on platform
      let shareLink = '';
      
      switch(platform.toLowerCase()) {
        case 'linkedin':
          shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;
          break;
        case 'twitter':
          shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
          break;
        case 'facebook':
          shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
          break;
        case 'whatsapp':
          shareLink = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
          break;
        default:
          shareLink = '';
      }
      
      // Open share link in new window
      if (shareLink) {
        window.open(shareLink, '_blank');
      }
      
      // Revoke the blob URL to free memory
      URL.revokeObjectURL(blobUrl);
      
      toast({
        title: "Badge Shared",
        description: `Your badge has been shared on ${platform}!`,
      });
    } catch (error) {
      console.error('Error sharing badge:', error);
      toast({
        title: "Sharing Failed",
        description: "Failed to share your badge. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSharing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}
    >
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden relative z-10">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Custom Badge</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for visiting my profile! Here's your personalized badge as a token of appreciation.
          </p>
          
          <div className="flex flex-col items-center">
            <div className="relative mb-6 w-full max-w-[400px] mx-auto">
              {/* Display the actual badge from the server */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={`/api/generate-badge?name=${encodeURIComponent(currentUser?.displayName || 'Guest')}&email=${encodeURIComponent(currentUser?.email || '')}&photoURL=${encodeURIComponent(currentUser?.photoURL || '')}&t=${new Date().getTime()}`}
                  alt="Your Badge"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <i className="ri-download-line mr-2"></i>
                  <span>Download Badge</span>
                </>
              )}
            </button>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium text-center text-gray-700 dark:text-gray-300 mb-4">Share on social media</h3>
              <div className="grid grid-cols-2 gap-4">
                {sharePlatforms.map((platform) => (
                  <button 
                    key={platform.name}
                    onClick={() => handleShare(platform.name)}
                    disabled={isSharing}
                    className={`flex items-center justify-center px-4 py-2.5 ${platform.color} ${platform.hoverColor} ${platform.textColor} rounded-lg transition-colors shadow-sm`}
                  >
                    <i className={`${platform.icon} text-lg mr-2`} />
                    <span>{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
