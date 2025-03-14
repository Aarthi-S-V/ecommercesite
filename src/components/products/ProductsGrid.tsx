
import React from 'react';
import ProductCard, { ProductType } from './ProductCard';

interface ProductsGridProps {
  products: ProductType[];
  title?: string;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, title }) => {
  return (
    <div className="py-6">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <a href="#" className="text-violet hover:text-violet-dark font-medium">
            View all
          </a>
        </div>
      )}
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
