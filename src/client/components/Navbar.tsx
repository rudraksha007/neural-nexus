
import { Link } from "react-router-dom";
import { Home, User, ChartLine, Heart, Mail } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About Us", icon: User },
    { path: "/prediction", label: "Prediction", icon: ChartLine },
    { path: "/health-tips", label: "Health Tips", icon: Heart },
    { path: "/contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-sage-600">
            Health Predictor AI
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-1 text-gray-600 hover:text-sage-600 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          
          <div className="md:hidden flex items-center">
            {/* Mobile menu button - simplified version */}
            <button className="text-gray-600 hover:text-sage-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
