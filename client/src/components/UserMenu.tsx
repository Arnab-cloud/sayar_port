import { useRef, useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

interface UserMenuProps {
  onOpenBadgeModal: () => void;
}

export default function UserMenu({ onOpenBadgeModal }: UserMenuProps) {
  const { currentUser, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };
  
  const handleViewBadge = () => {
    setIsOpen(false);
    onOpenBadgeModal();
  };
  
  return (
    <div className="relative" ref={menuRef}>
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleMenu}
          className="h-9 w-9 rounded-full overflow-hidden border-2 border-primary-500 cursor-pointer"
          aria-label="User profile"
        >
          {currentUser?.photoURL ? (
            <img 
              src={currentUser.photoURL} 
              alt="User profile" 
              className="h-full w-full object-cover" 
            />
          ) : (
            <div className="h-full w-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <i className="ri-user-fill text-primary-600 dark:text-primary-400"></i>
            </div>
          )}
        </button>
      </div>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              {currentUser?.photoURL ? (
                <img 
                  src={currentUser.photoURL} 
                  alt="User avatar" 
                  className="h-8 w-8 rounded-full" 
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                  <i className="ri-user-fill text-primary-600 dark:text-primary-400"></i>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {currentUser?.displayName || "User"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {currentUser?.email || ""}
                </p>
              </div>
            </div>
          </div>
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              <i className="ri-user-line mr-2"></i> Profile
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              <i className="ri-settings-line mr-2"></i> Settings
            </a>
            <button 
              onClick={handleViewBadge}
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <i className="ri-medal-line mr-2"></i> Your Badge
            </button>
            <button 
              onClick={handleSignOut}
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <i className="ri-logout-box-line mr-2"></i> Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
