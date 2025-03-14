
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getProductsByCategory, getAllProducts } from '@/services/productService';
import ProductsGrid from '@/components/products/ProductsGrid';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const normalizedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
  
  // Get products - if no category specified, get all products
  const products = category 
    ? getProductsByCategory(category) 
    : getAllProducts();
  
  const pageName = normalizedCategory || 'All Products';
  
  // UI state for filters
  const [showFilters, setShowFilters] = React.useState(false);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-sm text-violet hover:text-violet-dark">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/categories" className="text-sm text-violet hover:text-violet-dark">
                    Categories
                  </Link>
                </div>
              </li>
              {category && (
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm text-gray-500">
                      {normalizedCategory}
                    </span>
                  </div>
                </li>
              )}
            </ol>
          </nav>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{pageName}</h1>
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters - Hidden on mobile unless toggled */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
              <h2 className="font-bold text-lg mb-4">Filters</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider defaultValue={[0, 500]} max={1000} step={10} />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm">$0</span>
                  <span className="text-sm">$1000</span>
                </div>
              </div>
              
              {/* Rating */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <Checkbox id={`rating-${rating}`} />
                      <label 
                        htmlFor={`rating-${rating}`} 
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {rating}+ Stars
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Availability */}
              <div>
                <h3 className="font-medium mb-3">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="in-stock" />
                    <label 
                      htmlFor="in-stock" 
                      className="ml-2 text-sm cursor-pointer"
                    >
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="on-sale" />
                    <label 
                      htmlFor="on-sale" 
                      className="ml-2 text-sm cursor-pointer"
                    >
                      On Sale
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-violet">Apply Filters</Button>
                <Button variant="outline" className="w-full mt-2">Reset</Button>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="md:col-span-3">
            {products.length > 0 ? (
              <ProductsGrid products={products} />
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <h2 className="text-xl font-semibold mb-2">No products found</h2>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any products in this category.
                </p>
                <Button asChild>
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
