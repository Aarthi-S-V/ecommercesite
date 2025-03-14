
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-violet shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white">ShopVibe</h1>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full max-w-2xl">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pr-10 rounded-md border-0"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full bg-yellow hover:bg-yellow-dark text-foreground"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Nav Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/wishlist" className="text-white hover:text-yellow-light">
              <div className="flex flex-col items-center">
                <Heart className="h-6 w-6" />
                <span className="text-xs">Wishlist</span>
              </div>
            </Link>
            <Link to="/account" className="text-white hover:text-yellow-light">
              <div className="flex flex-col items-center">
                <User className="h-6 w-6" />
                <span className="text-xs">Account</span>
              </div>
            </Link>
            <Link to="/cart" className="text-white hover:text-yellow-light relative">
              <div className="flex flex-col items-center">
                <ShoppingCart className="h-6 w-6" />
                <span className="text-xs">Cart</span>
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-pink text-white">
                    {cartCount}
                  </Badge>
                )}
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Search - Only visible on mobile */}
        <div className="mt-3 md:hidden">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pr-10 rounded-md"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full bg-yellow hover:bg-yellow-dark text-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-2 bg-violet-light rounded-md shadow-lg">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="px-4 py-2 text-white hover:bg-violet-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className="px-4 py-2 text-white hover:bg-violet-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/wishlist" 
                className="px-4 py-2 text-white hover:bg-violet-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
              <Link 
                to="/account" 
                className="px-4 py-2 text-white hover:bg-violet-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
              <Link 
                to="/cart" 
                className="px-4 py-2 text-white hover:bg-violet-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart {cartCount > 0 && `(${cartCount})`}
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Categories Navigation */}
      <div className="bg-violet-dark py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-6 overflow-x-auto pb-1 text-sm text-white">
            <Link to="/categories/electronics" className="whitespace-nowrap hover:text-yellow-light">
              Electronics
            </Link>
            <Link to="/categories/fashion" className="whitespace-nowrap hover:text-yellow-light">
              Fashion
            </Link>
            <Link to="/categories/home" className="whitespace-nowrap hover:text-yellow-light">
              Home & Kitchen
            </Link>
            <Link to="/categories/beauty" className="whitespace-nowrap hover:text-yellow-light">
              Beauty
            </Link>
            <Link to="/categories/books" className="whitespace-nowrap hover:text-yellow-light">
              Books
            </Link>
            <Link to="/categories/toys" className="whitespace-nowrap hover:text-yellow-light">
              Toys & Games
            </Link>
            <Link to="/categories/grocery" className="whitespace-nowrap hover:text-yellow-light">
              Grocery
            </Link>
            <Link to="/categories/deals" className="whitespace-nowrap font-bold text-pink-light">
              Today's Deals
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
