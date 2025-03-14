
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroBanner from '@/components/home/HeroBanner';
import CategoriesSection from '@/components/home/CategoriesSection';
import PromoSection from '@/components/home/PromoSection';
import ProductsGrid from '@/components/products/ProductsGrid';
import { 
  getFeaturedProducts, 
  getNewArrivals, 
  getProductsOnSale 
} from '@/services/productService';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const salesProducts = getProductsOnSale();
  
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <HeroBanner />
        
        <CategoriesSection />
        
        <ProductsGrid 
          products={featuredProducts} 
          title="Featured Products" 
        />
        
        <PromoSection />
        
        <ProductsGrid 
          products={newArrivals} 
          title="New Arrivals" 
        />
        
        <ProductsGrid 
          products={salesProducts} 
          title="Special Offers" 
        />
      </div>
    </Layout>
  );
};

export default Index;
