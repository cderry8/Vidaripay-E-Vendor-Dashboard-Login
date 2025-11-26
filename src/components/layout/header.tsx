import { FiBell } from "react-icons/fi";

interface NavbarProps {
  user: {
    name: string;
    avatar: string;
  };
  sidebarWidth: number;
}

export default function Navbar({ user, sidebarWidth }: NavbarProps) {
  return (
    <nav
      className="flex justify-end items-center p-4 bg-white min-h-[75px] z-50 gap-4 fixed top-0"
      style={{
        left: sidebarWidth,
        right: 0,
        boxShadow: "0 4px 6px -3px rgba(0, 0, 0, 0.1)", 
      }}
    >
    
      <button className="relative text-gray-700 hover:text-black">
        <FiBell size={24} />
      
        <span className="absolute top-0 right-1 w-2 h-2 bg-[#D86411] rounded-full"></span>
      </button>

     
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="https://penguinui.s3.amazonaws.com/component-assets/avatar-7.webp"
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </nav>
  );
}
