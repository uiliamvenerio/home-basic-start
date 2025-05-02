import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Menu, X, Home, BookOpen, ChefHat, FileSpreadsheet, 
  User, LogOut, ChevronRight, Sun, Moon
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you would implement dark mode styling here
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const navLinks = [
    { to: '/dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    { to: '/menus', icon: <BookOpen size={20} />, label: 'Menus' },
    { to: '/recipes', icon: <ChefHat size={20} />, label: 'Recipes' },
    { to: '/technical-sheets', icon: <FileSpreadsheet size={20} />, label: 'Technical Sheets' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-900 bg-opacity-50 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-medium transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-primary-500">NutriPlanner</span>
          </div>
          <button 
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 lg:hidden"
            onClick={closeSidebar}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col justify-between h-[calc(100%-4rem)]">
          <nav className="mt-6 px-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive 
                      ? 'bg-primary-50 text-primary-500' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={closeSidebar}
              >
                <span className="mr-3">{link.icon}</span>
                {link.label}
                <ChevronRight size={16} className="ml-auto" />
              </NavLink>
            ))}
          </nav>

          <div className="px-4 pb-6 space-y-4">
            <div className="border-t pt-4">
              <button 
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleDarkMode}
              >
                <span className="mr-3">
                  {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                </span>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              
              <button 
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                onClick={handleLogout}
              >
                <span className="mr-3 text-error-500">
                  <LogOut size={20} />
                </span>
                <span className="text-error-500">Logout</span>
              </button>
            </div>
            
            <div className="flex items-center px-4 py-2">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 font-medium">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 truncate">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-subtle z-10">
          <div className="px-4 h-16 flex items-center justify-between">
            <button
              className="p-1 rounded-md text-gray-500 hover:bg-gray-100 lg:hidden"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
            
            <div className="flex-1 lg:ml-4">
              <h1 className="text-xl font-semibold text-gray-800">
                {navLinks.find(link => location.pathname.startsWith(link.to))?.label || 'Dashboard'}
              </h1>
            </div>
            
            <div className="flex items-center">
              <div className="hidden md:flex items-center mr-4">
                <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;