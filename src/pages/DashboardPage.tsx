import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChefHat, BookOpen, FileSpreadsheet, Users, TrendingUp, 
  Calendar, ClipboardList, Clock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  
  const stats = [
    { name: 'Total Recipes', value: '42', icon: <ChefHat className="h-6 w-6 text-primary-500" /> },
    { name: 'Menu Plans', value: '8', icon: <BookOpen className="h-6 w-6 text-secondary-500" /> },
    { name: 'Technical Sheets', value: '15', icon: <FileSpreadsheet className="h-6 w-6 text-accent-500" /> },
    { name: 'Active Clients', value: '24', icon: <Users className="h-6 w-6 text-success-500" /> },
  ];
  
  const recentRecipes = [
    { id: 1, name: 'Mediterranean Quinoa Bowl', category: 'Lunch', calories: 420, date: '2 days ago' },
    { id: 2, name: 'Protein Overnight Oats', category: 'Breakfast', calories: 310, date: '3 days ago' },
    { id: 3, name: 'Grilled Salmon with Asparagus', category: 'Dinner', calories: 520, date: '5 days ago' },
    { id: 4, name: 'Greek Yogurt Parfait', category: 'Snack', calories: 180, date: '1 week ago' },
  ];
  
  const upcomingTasks = [
    { id: 1, name: 'Create weekly meal plan for Sarah J.', due: 'Tomorrow', priority: 'High' },
    { id: 2, name: 'Update nutritional values for new recipes', due: 'In 2 days', priority: 'Medium' },
    { id: 3, name: 'Client consultation with Alex M.', due: 'Friday, 10:00 AM', priority: 'High' },
    { id: 4, name: 'Review and approve team meal plans', due: 'Next Monday', priority: 'Low' },
  ];
  
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-white rounded-xl shadow-subtle p-6">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome back, {user?.name?.split(' ')[0] || 'Nutritionist'}!</h2>
        <p className="text-gray-600 mt-1">Here's what's happening with your nutrition practice today.</p>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-subtle p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {stat.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{stat.name}</h3>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent activity and tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent recipes */}
        <div className="bg-white rounded-xl shadow-subtle p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Recipes</h3>
            <Link to="/recipes" className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
              View all
            </Link>
          </div>
          
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Calories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentRecipes.map((recipe) => (
                  <tr key={recipe.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">{recipe.name}</div>
                      </div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{recipe.category}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {recipe.calories} kcal
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Upcoming tasks */}
        <div className="bg-white rounded-xl shadow-subtle p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Upcoming Tasks</h3>
            <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
              Add new
            </button>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {upcomingTasks.map((task) => (
              <li key={task.id} className="py-4">
                <div className="flex items-start">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{task.name}</p>
                    <div className="flex mt-1">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <p>Due {task.due}</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span 
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        task.priority === 'High' 
                          ? 'bg-error-100 text-error-800' 
                          : task.priority === 'Medium'
                            ? 'bg-warning-100 text-warning-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Quick actions */}
      <div className="bg-white rounded-xl shadow-subtle p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link 
            to="/recipes" 
            className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center transition-colors"
          >
            <div className="p-2 bg-primary-50 rounded-full mb-4">
              <ChefHat className="h-6 w-6 text-primary-500" />
            </div>
            <h4 className="text-sm font-medium text-gray-900">Create Recipe</h4>
            <p className="text-xs text-gray-500 mt-1">Add a new recipe with nutritional data</p>
          </Link>
          
          <Link 
            to="/menus" 
            className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center transition-colors"
          >
            <div className="p-2 bg-secondary-50 rounded-full mb-4">
              <BookOpen className="h-6 w-6 text-secondary-500" />
            </div>
            <h4 className="text-sm font-medium text-gray-900">Design Menu</h4>
            <p className="text-xs text-gray-500 mt-1">Create a new menu or meal plan</p>
          </Link>
          
          <Link 
            to="/technical-sheets" 
            className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center transition-colors"
          >
            <div className="p-2 bg-accent-50 rounded-full mb-4">
              <FileSpreadsheet className="h-6 w-6 text-accent-500" />
            </div>
            <h4 className="text-sm font-medium text-gray-900">Technical Sheet</h4>
            <p className="text-xs text-gray-500 mt-1">Generate detailed nutritional breakdown</p>
          </Link>
          
          <div className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center transition-colors cursor-pointer">
            <div className="p-2 bg-success-50 rounded-full mb-4">
              <Calendar className="h-6 w-6 text-success-500" />
            </div>
            <h4 className="text-sm font-medium text-gray-900">Schedule Session</h4>
            <p className="text-xs text-gray-500 mt-1">Book a client consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;