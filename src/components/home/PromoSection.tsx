
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PromoSection = () => {
  return (
    <section className="py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Promo */}
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800&h=400" 
            alt="Electronics Sale" 
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet/90 to-violet/30 flex flex-col justify-center px-8">
            <h3 className="text-white text-2xl font-bold mb-2">Summer Tech Sale</h3>
            <p className="text-white text-sm mb-4">Get up to 30% off on the latest electronics</p>
            <Button asChild className="w-max bg-yellow hover:bg-yellow-dark text-foreground">
              <Link to="/categories/electronics">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Second Promo */}
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?auto=format&fit=crop&q=80&w=800&h=400" 
            alt="Fashion Sale" 
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink/90 to-pink/30 flex flex-col justify-center px-8">
            <h3 className="text-white text-2xl font-bold mb-2">Fashion Week</h3>
            <p className="text-white text-sm mb-4">Discover the latest trends with special prices</p>
            <Button asChild className="w-max bg-yellow hover:bg-yellow-dark text-foreground">
              <Link to="/categories/fashion">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
