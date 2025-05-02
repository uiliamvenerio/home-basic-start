import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div 
      className={`rounded-xl overflow-hidden transition-all ${
        plan.highlighted 
          ? 'bg-white border-2 border-primary-500 shadow-strong scale-105 z-10' 
          : 'bg-white border border-gray-200 shadow-subtle hover:shadow-medium'
      }`}
    >
      {plan.highlighted && (
        <div className="bg-primary-500 py-2 text-center text-white text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
          <span className="text-gray-600 ml-1">{plan.period}</span>
        </div>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        
        <hr className="my-6" />
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex">
              <CheckCircle className="h-5 w-5 text-success-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to="/register" 
          className={`w-full btn ${
            plan.highlighted ? 'btn-primary' : 'btn-outline'
          } btn-lg`}
        >
          {plan.cta}
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;