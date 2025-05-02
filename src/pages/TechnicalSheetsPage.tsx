import React, { useState } from 'react';
import { 
  Search, Plus, Filter, ArrowUpDown, MoreHorizontal, FileSpreadsheet,
  Clock, CalendarCheck, Download
} from 'lucide-react';

const TechnicalSheetsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const technicalSheets = [
    {
      id: 1,
      name: 'Protein Power Smoothie Analysis',
      description: 'Complete nutritional analysis of protein smoothie with macronutrient breakdown.',
      category: 'Beverage',
      created: 'May 15, 2023',
      status: 'Published',
      macros: { protein: 25, carbs: 30, fat: 10 }
    },
    {
      id: 2,
      name: 'Mediterranean Meal Plan - Week 1',
      description: 'Week 1 of Mediterranean diet with daily nutritional targets and meal breakdown.',
      category: 'Meal Plan',
      created: 'June 2, 2023',
      status: 'Draft',
      macros: { protein: 20, carbs: 50, fat: 30 }
    },
    {
      id: 3,
      name: 'Post-Workout Recovery Meal',
      description: 'Optimal post-exercise nutrition profile for muscle recovery and glycogen replenishment.',
      category: 'Athlete Nutrition',
      created: 'April 30, 2023',
      status: 'Published',
      macros: { protein: 35, carbs: 50, fat: 15 }
    },
    {
      id: 4,
      name: 'Diabetic-Friendly Breakfast Options',
      description: 'Low glycemic breakfast options with complete nutritional analysis.',
      category: 'Medical Nutrition',
      created: 'May 22, 2023',
      status: 'Published',
      macros: { protein: 20, carbs: 30, fat: 50 }
    },
    {
      id: 5,
      name: 'Plant-Based Protein Sources',
      description: 'Comprehensive analysis of plant-based protein sources with amino acid profiles.',
      category: 'Educational',
      created: 'June 10, 2023',
      status: 'Draft',
      macros: { protein: 30, carbs: 45, fat: 25 }
    },
    {
      id: 6,
      name: 'Children\'s Nutritional Requirements',
      description: 'Age-specific nutritional requirements for optimal growth and development.',
      category: 'Pediatric Nutrition',
      created: 'May 5, 2023',
      status: 'Published',
      macros: { protein: 15, carbs: 55, fat: 30 }
    }
  ];
  
  const tabs = [
    { id: 'all', label: 'All Sheets' },
    { id: 'meal', label: 'Meal Plans' },
    { id: 'recipe', label: 'Recipe Analysis' },
    { id: 'athlete', label: 'Athlete Nutrition' },
    { id: 'medical', label: 'Medical Nutrition' },
    { id: 'educational', label: 'Educational' }
  ];
  
  const filteredSheets = activeTab === 'all' 
    ? technicalSheets 
    : technicalSheets.filter(sheet => {
        if (activeTab === 'meal') return sheet.category === 'Meal Plan';
        if (activeTab === 'recipe') return sheet.category === 'Beverage' || sheet.category === 'Recipe Analysis';
        if (activeTab === 'athlete') return sheet.category === 'Athlete Nutrition';
        if (activeTab === 'medical') return sheet.category === 'Medical Nutrition';
        if (activeTab === 'educational') return sheet.category === 'Educational' || sheet.category === 'Pediatric Nutrition';
        return true;
      });
  
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="bg-white rounded-xl shadow-subtle p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Technical Sheets</h1>
            <p className="text-gray-600 mt-1">Create and manage detailed nutritional specification sheets.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="btn btn-primary btn-md">
              <Plus className="h-4 w-4 mr-2" />
              Create Sheet
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
                placeholder="Search technical sheets..."
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
      
      {/* Technical sheet cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSheets.map((sheet) => (
          <div key={sheet.id} className="bg-white rounded-xl shadow-subtle overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{sheet.name}</h3>
                  <span className="inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {sheet.category}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600">{sheet.description}</p>
              
              {/* Macronutrient visual */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Macronutrient Distribution</span>
                  <span>100%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="flex h-full">
                    <div 
                      className="bg-primary-500" 
                      style={{ width: `${sheet.macros.protein}%` }}
                    ></div>
                    <div 
                      className="bg-secondary-500" 
                      style={{ width: `${sheet.macros.carbs}%` }}
                    ></div>
                    <div 
                      className="bg-accent-500" 
                      style={{ width: `${sheet.macros.fat}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex mt-1 text-xs justify-between">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-primary-500 rounded-full mr-1"></div>
                    <span>Protein {sheet.macros.protein}%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-secondary-500 rounded-full mr-1"></div>
                    <span>Carbs {sheet.macros.carbs}%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-accent-500 rounded-full mr-1"></div>
                    <span>Fat {sheet.macros.fat}%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center text-sm text-gray-500 justify-between">
                <div className="flex items-center">
                  <CalendarCheck className="mr-1 h-4 w-4 text-gray-400" />
                  <span>{sheet.created}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  sheet.status === 'Published' 
                    ? 'bg-success-100 text-success-800' 
                    : 'bg-warning-100 text-warning-800'
                }`}>
                  {sheet.status}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap space-x-2">
                <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Edit
                </button>
                <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  <Download className="h-4 w-4 inline mr-1" />
                  Export PDF
                </button>
                <button className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Create new technical sheet card */}
      <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center">
        <div className="p-3 bg-primary-50 rounded-full mb-4">
          <Plus className="h-6 w-6 text-primary-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">Create a new technical sheet</h3>
        <p className="text-gray-500 mt-1 max-w-sm">Generate detailed nutritional specifications for recipes, meal plans, or educational materials.</p>
        <button className="mt-4 btn btn-primary btn-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TechnicalSheetsPage;