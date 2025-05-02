import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChefHat, CalendarCheck, FileSpreadsheet, CheckCircle, Zap, Shield, 
  Users, Clock, Menu, X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';

const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const features = [
    {
      icon: <ChefHat className="h-6 w-6 text-primary-500" />,
      title: 'Recipe Management',
      description: 'Create, organize, and store all your recipes in one place with detailed nutritional information.'
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-primary-500" />,
      title: 'Menu Planning',
      description: 'Design balanced meal plans and menus for your clients with easy drag-and-drop functionality.'
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-primary-500" />,
      title: 'Technical Sheets',
      description: 'Generate professional technical specification sheets with complete nutritional breakdowns.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary-500" />,
      title: 'Client Management',
      description: 'Manage your client list, track progress, and store important client information securely.'
    }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual nutritionists just getting started.',
      features: [
        'Up to 50 recipes',
        '10 menu plans',
        'Basic technical sheets',
        'Limited client management',
        'Email support'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      description: 'Ideal for professional nutritionists with an established practice.',
      features: [
        'Unlimited recipes',
        'Unlimited menu plans',
        'Advanced technical sheets',
        'Full client management',
        'Priority support',
        'Advanced analytics'
      ],
      cta: 'Go Professional',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For nutrition practices with multiple team members.',
      features: [
        'Everything in Professional',
        'Team collaboration tools',
        'White-label options',
        'API access',
        'Dedicated account manager',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  const testimonials = [
    {
      quote: "NutriPlanner has transformed how I work with clients. Creating meal plans is now quick and enjoyable instead of tedious.",
      author: "Sarah Johnson",
      title: "Registered Dietitian",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The technical sheets feature saves me hours of work every week. My clients love the professional presentation.",
      author: "Michael Rodriguez",
      title: "Sports Nutritionist",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "As a nutrition clinic manager, the team features help us collaborate seamlessly. Worth every penny.",
      author: "Lisa Chen",
      title: "Nutrition Clinic Director",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white sticky top-0 z-10 shadow-subtle">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <ChefHat className="h-8 w-8 text-primary-500" />
                <span className="ml-2 text-xl font-semibold text-gray-900">NutriPlanner</span>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-gray-600 hover:text-primary-500 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-500 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary-500 transition-colors">Testimonials</a>
              
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn btn-primary btn-md">
                  Go to Dashboard
                </Link>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/login" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-primary btn-md">
                    Sign Up Free
                  </Link>
                </div>
              )}
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-primary-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="text-gray-600 hover:text-primary-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#testimonials" 
                  className="text-gray-600 hover:text-primary-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                
                {isAuthenticated ? (
                  <Link 
                    to="/dashboard" 
                    className="btn btn-primary btn-md w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <Link 
                      to="/login" 
                      className="text-primary-600 font-medium hover:text-primary-700 transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/register" 
                      className="btn btn-primary btn-md w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up Free
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 animate-slideUp">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Streamline Your Nutrition Practice with <span className="text-primary-500">NutriPlanner</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The all-in-one platform for nutritionists to create professional meal plans, 
                recipes, and technical sheets for their clients.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register" className="btn btn-primary btn-lg">
                  Get Started Free
                </Link>
                <a href="#features" className="btn btn-outline btn-lg">
                  Learn More
                </a>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {testimonials.map((testimonial, index) => (
                    <img 
                      key={index}
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="h-8 w-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="ml-4 text-sm text-gray-600">
                  Trusted by <span className="font-medium">2,000+</span> nutritionists
                </p>
              </div>
            </div>
            <div className="md:w-1/2 animate-fadeIn">
              <img 
                src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Nutritionist using NutriPlanner" 
                className="rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Nutritionists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your nutrition practice efficiently and deliver 
              outstanding value to your clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-subtle border border-gray-100 hover:shadow-medium transition-shadow"
              >
                <div className="p-2 bg-primary-50 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why Nutritionists Choose NutriPlanner
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Zap className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Boost productivity</span> - Save up to 10 hours per week on administrative tasks
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Professional presentation</span> - Impress clients with beautiful, branded materials
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Quick implementation</span> - Get up and running in less than a day
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/7947950/pexels-photo-7947950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Nutritionist with client" 
                  className="rounded-xl shadow-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that's right for your practice. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              All plans include a 14-day free trial. No credit card required to start.
            </p>
            <Link to="/register" className="btn btn-lg btn-primary">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Nutritionists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what other nutritionists are saying about NutriPlanner.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl shadow-subtle"
              >
                <div className="mb-4 text-primary-500">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/register" className="btn btn-lg btn-primary">
              Join Them Today
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Nutrition Practice?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of nutritionists who are saving time, impressing clients, and growing their practices with NutriPlanner.
          </p>
          <Link to="/register" className="btn btn-lg bg-white text-primary-600 hover:bg-gray-100">
            Start Your Free Trial
          </Link>
          <p className="mt-4 opacity-80">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center text-white mb-4">
                <ChefHat className="h-8 w-8 text-primary-400" />
                <span className="ml-2 text-xl font-semibold">NutriPlanner</span>
              </div>
              <p className="mb-4">
                The professional platform for nutritionists to manage recipes, menus, and client nutrition plans.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} NutriPlanner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;