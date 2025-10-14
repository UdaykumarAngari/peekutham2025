import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Upload,
  Brain,
  CheckCircle,
  BarChart3,
  Settings,
  Menu,
  X
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/upload', icon: Upload, label: 'Upload' },
    { path: '/ai-suggestions', icon: Brain, label: 'AI Suggestions' },
    { path: '/validation', icon: CheckCircle, label: 'Validation' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <motion.div
        className={`bg-gradient-to-br from-blue-50 to-white shadow-xl h-screen fixed left-0 top-0 z-50 transition-all duration-300 border-r border-blue-100 ${
          isCollapsed ? 'w-16' : 'w-64'
        } ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        initial={{ x: -256 }}
        animate={{ x: isOpen ? 0 : window.innerWidth >= 1024 ? 0 : -256 }}
        transition={{ duration: 0.3 }}
      >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className={`flex items-center space-x-2 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
            <Brain className="w-6 h-6 text-white" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold text-gray-800"> MedCodeAI</span>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
        >
          {isCollapsed ? <Menu className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" /> : <X className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-primary/10 text-primary shadow-sm border-r-2 border-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;