import { Bell, User, Menu } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-50 to-white/80 backdrop-blur-sm shadow-sm border-b border-blue-100 px-6 py-4 flex justify-between items-center">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors group"
      >
        <Menu className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
      </button>
      <div className="flex-1" />

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative group">
          <Bell className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-sm">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">Dr. Everest</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;