import { FC, useState, useEffect } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import Image from "next/image";
import { usePathname } from 'next/navigation'; 

export type NavLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type User = {
  name: string;
  role: string;
  username?: string;
  avatarUrl?: string;
};


interface SidebarProps {
  links: NavLink[];
  user: User;
  isMenuOpen: boolean; 
  toggleMenu: () => void; 
}

const Sidebar: FC<SidebarProps> = ({ links, user, isMenuOpen, toggleMenu }) => {
  const [hasMounted, setHasMounted] = useState(false); 
  const pathname = usePathname(); 

  useEffect(() => {
    setHasMounted(true); 
  }, []);

  if (!hasMounted) return null;

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen bg-white shadow-md flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? "w-64" : "w-20"
      }`}
    >
     
      <button
        onClick={toggleMenu}  
        className="absolute -right-1 top-6 w-4 h-8 flex items-center justify-center border bg-white shadow hover:bg-gray-100 transition"
      >
        <FiChevronLeft className={`${isMenuOpen ? "" : "rotate-180"} transition-transform`} />
      </button>

      <div className="flex flex-col h-full overflow-y-auto">
       
        <div className="flex items-center justify-center px-6 py-6">
          {isMenuOpen ? (
            <div className="transition-all duration-300 ease-in-out">
              <Image
                src="/Vidaripay-logo-full.png"
                alt="logo"
                width={150}
                height={50}
                className="w-full max-w-[150px]"
                style={{
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                }}
              />
            </div>
          ) : (
            <div className="transition-all duration-300 ease-in-out">
              <Image
                src="/Vidaripay-logo-icon.png"
                alt="logo"
                width={40}
                height={30}
                className="w-10 h-7"
                style={{
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                }}
              />
            </div>
          )}
        </div>

        <div className="mx-4 border-b border-gray-400" />

        
        <nav className="flex-1 mt-6 px-3 space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors duration-300 ease-in-out ${
                pathname === link.href
                  ? "bg-[#D86411] text-white" 
                  : "text-gray-700 hover:bg-[#D86411] hover:text-white"
              } ${isMenuOpen ? "gap-3" : "justify-center"}`}
            >
              <span className="text-xl">{link.icon}</span>
              {isMenuOpen && <span>{link.label}</span>}
            </a>
          ))}
        </nav>

        <div className="mx-4 border-t border-gray-400 mt-4" />

       
        <div className="px-6 py-6">
          <button
            onClick={() => alert("Logging out...")}
            className="w-full flex items-center justify-center gap-3 space-x-6 cursor-pointer rounded-lg font-medium text-gray-700 transition-colors duration-300 ease-in-out"
          >
            <AiOutlineLogout className={`text-xl ${isMenuOpen ? "" : "mx-auto"}`} />
            {isMenuOpen && <span>Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
