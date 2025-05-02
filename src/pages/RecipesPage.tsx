import React, { useState } from 'react';
import { 
  Search, Plus, Filter, ArrowUpDown, MoreHorizontal, ChefHat,
  Clock, Tag, Users
} from 'lucide-react';

const RecipesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const recipes = [
    {
      id: 1,
      name: 'Quinoa & Vegetable Stir Fry',
      description: 'Quick and healthy stir fry with protein-rich quinoa and fresh vegetables.',
      category: 'Main Course',
      prepTime: '25 mins',
      calories: 380,
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Greek Yogurt Parfait',
      description: 'Creamy yogurt parfait with honey, berries, and homemade granola.',
      category: 'Breakfast',
      prepTime: '10 mins',
      calories: 240,
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Baked Salmon with Asparagus',
      description: 'Omega-rich salmon baked with lemon and served with roasted asparagus.',
      category: 'Main Course',
      prepTime: '30 mins',
      calories: 420,
      image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Protein Energy Bites',
      description: 'No-bake energy bites made with oats, nut butter, and chocolate chips.',
      category: 'Snack',
      prepTime: '15 mins',
      calories: 120,
      image: 'https://images.pexels.com/photos/1028710/pexels-photo-1028710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      name: 'Mediterranean Grain Bowl',
      description: 'Nutritious bowl with farro, chickpeas, cucumber, tomatoes, and feta.',
      category: 'Main Course',
      prepTime: '20 mins',
      calories: 450,
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      name: 'Avocado Toast with Poached Egg',
      description: 'Whole grain toast with mashed avocado and perfectly poached egg.',
      category: 'Breakfast',
      prepTime: '15 mins',
      calories: 320,
      image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];
  
  const tabs = [
    { id: 'all', label: 'All Recipes' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'main', label: 'Main Course' },
    { id: 'side', label: 'Side Dishes' },
    { id: 'snack', label: 'Snacks' },
    { id: 'dessert', label: 'Desserts' }
  ];
  
  const filteredRecipes = activeTab === 'all' 
    ? recipes 
    : recipes.filter(recipe => {
        if (activeTab === 'breakfast') return recipe.category === 'Breakfast';
        if (activeTab === 'main') return recipe.category === 'Main Course';
        if (activeTab === 'side') return recipe.category === 'Side Dish';
        if (activeTab === 'snack') return recipe.category === 'Snack';
        if (activeTab === 'dessert') return recipe.category === 'Dessert';
        return true;
      });
  
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="bg-white rounded-xl shadow-subtle p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Recipes</h1>
            <p className="text-gray-600 mt-1">Create and manage nutritional recipes for your meal plans.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="btn btn-primary btn-md">
              <Plus className="h-4 w-4 mr-2" />
              Create Recipe
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
                placeholder="Search recipes..."
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
      
      {/* Recipe cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-xl shadow-subtle overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{recipe.name}</h3>
                  <span className="inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {recipe.category}
                  </span>
                </div>
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500 justify-between">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-gray-400" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center font-medium">
                  {recipe.calories} kcal
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
                  Add to Menu
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Create new recipe card */}
      <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center">
        <div className="p-3 bg-primary-50 rounded-full mb-4">
          <Plus className="h-6 w-6 text-primary-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">Create a new recipe</h3>
        <p className="text-gray-500 mt-1 max-w-sm">Add a new recipe with ingredients, nutritional information, and preparation steps.</p>
        <button className="mt-4 btn btn-primary btn-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default RecipesPage;