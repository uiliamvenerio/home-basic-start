import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, Building, Phone, Save, Check } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  
  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    company: 'Nutrition Solutions LLC',
    bio: 'Registered Dietitian specializing in sports nutrition and metabolic health. Helping clients achieve their health goals through evidence-based nutritional strategies.',
    profession: 'Registered Dietitian',
    specialty: 'Sports Nutrition',
    yearsOfExperience: '8'
  });
  
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    newClients: true,
    marketing: false,
    updates: true
  });
  
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  
  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };
  
  const handleSave = () => {
    // In a real app, this would save to an API
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };
  
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="bg-white rounded-xl shadow-subtle p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-1">Manage your account information and preferences.</p>
          </div>
          <button 
            onClick={handleSave}
            className={`mt-4 sm:mt-0 btn ${saveSuccess ? 'bg-success-500 hover:bg-success-600' : 'btn-primary'} btn-md transition-colors`}
          >
            {saveSuccess ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Saved
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-subtle p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={profile.company}
                      onChange={handleInputChange}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Professional Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  value={profile.bio}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <hr className="my-8" />
            
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Professional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={profile.profession}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                  Specialty Area
                </label>
                <input
                  type="text"
                  id="specialty"
                  name="specialty"
                  value={profile.specialty}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience
                </label>
                <input
                  type="text"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={profile.yearsOfExperience}
                  onChange={handleInputChange}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Password</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="currentPassword"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="md:mt-7">
                <p className="text-xs text-gray-500">
                  Leave blank if you don't want to change your password.
                </p>
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="newPassword"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-subtle p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile</h2>
            
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 font-medium text-2xl">
                {profile.name?.split(' ').map(n => n[0]).join('') || 'U'}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{profile.name}</h3>
              <p className="text-gray-600">{profile.profession}</p>
              
              <button className="mt-4 btn btn-outline btn-md w-full">
                Upload Photo
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-base font-medium text-gray-900 mb-4">Account Status</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Plan:</span>
                <span className="font-medium text-primary-600">Professional</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-700">Renewal:</span>
                <span>June 15, 2023</span>
              </div>
              <button className="mt-4 btn btn-primary btn-sm w-full">
                Upgrade Plan
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Settings</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="emailAlerts"
                    name="emailAlerts"
                    type="checkbox"
                    checked={notifications.emailAlerts}
                    onChange={handleNotificationChange}
                    className="h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="emailAlerts" className="font-medium text-gray-700">Email alerts</label>
                  <p className="text-gray-500">Receive email notifications for important updates.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="newClients"
                    name="newClients"
                    type="checkbox"
                    checked={notifications.newClients}
                    onChange={handleNotificationChange}
                    className="h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="newClients" className="font-medium text-gray-700">New client notifications</label>
                  <p className="text-gray-500">Get notified when a new client signs up.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="marketing"
                    name="marketing"
                    type="checkbox"
                    checked={notifications.marketing}
                    onChange={handleNotificationChange}
                    className="h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="marketing" className="font-medium text-gray-700">Marketing emails</label>
                  <p className="text-gray-500">Receive promotional offers and updates.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="updates"
                    name="updates"
                    type="checkbox"
                    checked={notifications.updates}
                    onChange={handleNotificationChange}
                    className="h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="updates" className="font-medium text-gray-700">Product updates</label>
                  <p className="text-gray-500">Get notified about new features and improvements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          onClick={handleSave}
          className={`btn ${saveSuccess ? 'bg-success-500 hover:bg-success-600' : 'btn-primary'} btn-lg transition-colors`}
        >
          {saveSuccess ? (
            <>
              <Check className="h-5 w-5 mr-2" />
              All Changes Saved
            </>
          ) : (
            <>
              <Save className="h-5 w-5 mr-2" />
              Save All Changes
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;