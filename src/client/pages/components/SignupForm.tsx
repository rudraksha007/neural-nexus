import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, ArrowRight } from 'lucide-react';

interface SignupFormProps {
  onSignIn: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep === 2 && validateStep2()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Account created successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setCurrentStep(1);
    }
  };
  
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white/10 p-8 shadow-xl backdrop-blur-xl transition-all duration-500">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-3xl font-bold text-white">Create Account</h2>
        <p className="text-white/80">Join our community today</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`transition-all duration-500 ${currentStep === 1 ? 'block' : 'hidden'}`}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
              Full Name
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-5 w-5 text-white/60" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`block w-full rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-white/20'
                } bg-white/5 p-2.5 pl-10 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30`}
                placeholder="John Doe"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
              Email Address
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="h-5 w-5 text-white/60" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-white/20'
                } bg-white/5 p-2.5 pl-10 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30`}
                placeholder="your@email.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>
          
          <button
            type="button"
            onClick={handleNextStep}
            className="group mt-6 flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300/30"
          >
            Continue
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className={`transition-all duration-500 ${currentStep === 2 ? 'block' : 'hidden'}`}>
          <div className="mb-4">
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-white/60" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`block w-full rounded-lg border ${
                  errors.password ? 'border-red-500' : 'border-white/20'
                } bg-white/5 p-2.5 pl-10 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-white">
              Confirm Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-5 w-5 text-white/60" />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block w-full rounded-lg border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-white/20'
                } bg-white/5 p-2.5 pl-10 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
            )}
          </div>
          
          <div className="mt-6 flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="flex w-1/3 items-center justify-center rounded-lg border border-white/20 bg-transparent px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white/5 focus:outline-none focus:ring-4 focus:ring-white/10"
            >
              Back
            </button>
            <button
              type="submit"
              className="group flex w-2/3 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300/30"
            >
              Create Account
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </form>
      
      {/* Progress indicator */}
      <div className="mt-8 flex justify-center space-x-2">
        <div
          className={`h-2 w-12 rounded-full ${
            currentStep === 1 ? 'bg-blue-500' : 'bg-white/20'
          } transition-colors duration-300`}
        ></div>
        <div
          className={`h-2 w-12 rounded-full ${
            currentStep === 2 ? 'bg-blue-500' : 'bg-white/20'
          } transition-colors duration-300`}
        ></div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-white/80">
          Already have an account?{' '}
          <button 
            onClick={onSignIn}
            className="font-medium text-blue-400 hover:text-blue-300 bg-transparent border-none p-0 cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;