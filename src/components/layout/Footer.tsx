
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-violet text-white">
      <div className="bg-violet-dark py-3">
        <div className="container mx-auto text-center">
          <Button 
            onClick={scrollToTop}
            variant="ghost" 
            className="text-white hover:bg-violet hover:text-yellow-light"
          >
            Back to top <ArrowUp className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-yellow-light">About ShopVibe</Link></li>
              <li><Link to="/careers" className="hover:text-yellow-light">Careers</Link></li>
              <li><Link to="/press" className="hover:text-yellow-light">Press Releases</Link></li>
              <li><Link to="/community" className="hover:text-yellow-light">Community</Link></li>
              <li><Link to="/accessibility" className="hover:text-yellow-light">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><Link to="/sell" className="hover:text-yellow-light">Sell products on ShopVibe</Link></li>
              <li><Link to="/affiliate" className="hover:text-yellow-light">Become an Affiliate</Link></li>
              <li><Link to="/advertise" className="hover:text-yellow-light">Advertise Your Products</Link></li>
              <li><Link to="/publish" className="hover:text-yellow-light">Self-Publish with Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-yellow-light">Help Center</Link></li>
              <li><Link to="/returns" className="hover:text-yellow-light">Returns & Replacements</Link></li>
              <li><Link to="/shipping" className="hover:text-yellow-light">Shipping Rates & Policies</Link></li>
              <li><Link to="/orders" className="hover:text-yellow-light">Track Orders</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-light">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-light">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-light">
                <Twitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-light">
                <Instagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-light">
                <Youtube />
              </a>
            </div>
            <h3 className="font-bold text-lg mb-2">Download Our App</h3>
            <div className="flex space-x-2">
              <Button className="bg-black hover:bg-gray-800 text-white">
                App Store
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white">
                Google Play
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-violet-light text-center">
          <p>© {new Date().getFullYear()} ShopVibe. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2 text-sm">
            <Link to="/privacy" className="hover:text-yellow-light">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-light">Terms of Use</Link>
            <Link to="/cookies" className="hover:text-yellow-light">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
