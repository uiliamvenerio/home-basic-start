import React, { useState } from 'react';
import { 
  Search, Plus, Filter, ArrowUpDown, MoreHorizontal, Calendar,
  Utensils, Clock, Users
} from 'lucide-react';

const MenusPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const menus = [
    {
      id: 1,
      name: 'Weight Loss Plan - 1800 kcal',
      description: 'A balanced menu for healthy weight loss with 1800 kcal daily intake.',
      type: 'Weight Management',
      meals: 5,
      lastUpdated: '2 days ago',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Muscle Building Plan',
      description: 'High protein meal plan designed for muscle growth and recovery.',
      type: 'Sports Nutrition',
      meals: 6,
      lastUpdated: '1 week ago',
      image: 'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Diabetic-Friendly Menu',
      description: 'Low glycemic index foods for blood sugar management.',
      type: 'Medical Nutrition',
      meals: 4,
      lastUpdated: '3 days ago',
      image: 'https://images.pexels.com/photos/5946087/pexels-photo-5946087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Plant-Based Weekly Plan',
      description: 'Complete vegan nutrition with balanced macronutrients.',
      type: 'Specialized Diet',
      meals: 3,
      lastUpdated: '5 days ago',
      image: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      name: 'Heart-Healthy Low Sodium',
      description: 'DASH diet inspired meal plan for cardiovascular health.',
      type: 'Medical Nutrition',
      meals: 5,
      lastUpdated: '1 day ago',
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      name: 'Athlete Performance Menu',
      description: 'Optimized nutrition plan for endurance and performance.',
      type: 'Sports Nutrition',
      meals: 6,
      lastUpdated: '4 days ago',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const tabs = [
    { id: 'all', label: 'All Menus' },
    { id: 'weight', label: 'Weight Management' },
    { id: 'sports', label: 'Sports Nutrition' },
    { id: 'medical', label: 'Medical Nutrition' },
    { id: 'specialized', label: 'Specialized Diets' }
  ];
  
  const filteredMenus = activeTab === 'all' 
    ? menus 
    : menus.filter(menu => {
        if (activeTab === 'weight') return menu.type === 'Weight Management';
        if (activeTab === 'sports') return menu.type === 'Sports Nutrition';
        if (activeTab === 'medical') return menu.type === 'Medical Nutrition';
        if (activeTab === 'specialized') return menu.type === 'Specialized Diet';
        return true;
      });
  
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="bg-white rounded-xl shadow-subtle p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Menus</h1>
            <p className="text-gray-600 mt-1">Create and manage meal plans for your clients.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="btn btn-primary btn-md">
              <Plus className="h-4 w-4 mr-2" />
              Create Menu
            </button>
          </div>
        </div>
      </div>
      
      {/* Filters and search */}
      <div className="bg-white rounded-xl shadow-subtle p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search menus..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="btn btn-outline btn-md flex-1">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="btn btn-outline btn-md flex-1">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 font-medium text-sm border-b-2 transition-colors
                  ${activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Menu cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenus.map((menu) => (
          <div key={menu.id} className="bg-white rounded-xl shadow-subtle overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={menu.image}
                alt={menu.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{menu.name}</h3>
                  <span className="inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {menu.type}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{menu.description}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <div className="flex items-center mr-4">
                  <Calendar className="mr-1 h-4 w-4 text-gray-400" />
                  <span>{menu.lastUpdated}</span>
                </div>
                <div className="flex items-center">
                  <Utensils className="mr-1 h-4 w-4 text-gray-400" />
                  <span>{menu.meals} meals</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap space-x-2">
                <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Edit
                </button>
                <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Duplicate
                </button>
                <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Create new menu card */}
      <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center">
        <div className="p-3 bg-primary-50 rounded-full mb-4">
          <Plus className="h-6 w-6 text-primary-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">Create a new menu</h3>
        <p className="text-gray-500 mt-1 max-w-sm">Design a new meal plan with recipes, nutritional information, and preparation instructions.</p>
        <button className="mt-4 btn btn-primary btn-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MenusPage;