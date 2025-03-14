
import { ProductType } from '@/components/products/ProductCard';

// Mock product data
const products: ProductType[] = [
  {
    id: 1,
    title: "Wireless Noise Cancelling Headphones",
    price: 249.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.7,
    reviewCount: 1289,
    isNew: true,
    category: "Electronics"
  },
  {
    id: 2,
    title: "Smart Fitness Watch with Heart Rate Monitor",
    price: 179.99,
    originalPrice: 229.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.5,
    reviewCount: 867,
    isSale: true,
    category: "Electronics"
  },
  {
    id: 3,
    title: "Premium Leather Crossbody Bag",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.3,
    reviewCount: 531,
    category: "Fashion"
  },
  {
    id: 4,
    title: "Ultra HD 4K Smart TV - 55 inch",
    price: 599.99,
    originalPrice: 799.99,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.6,
    reviewCount: 935,
    isSale: true,
    category: "Electronics"
  },
  {
    id: 5,
    title: "Stainless Steel Kitchen Knife Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1593618998160-284a7ff1d7f7?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.8,
    reviewCount: 423,
    category: "Home & Kitchen"
  },
  {
    id: 6,
    title: "Men's Classic Oxford Dress Shoes",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.4,
    reviewCount: 312,
    category: "Fashion"
  },
  {
    id: 7,
    title: "Wireless Bluetooth Speaker with Deep Bass",
    price: 69.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.2,
    reviewCount: 687,
    isSale: true,
    category: "Electronics"
  },
  {
    id: 8,
    title: "Professional Hair Dryer and Styling Kit",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.7,
    reviewCount: 256,
    isNew: true,
    category: "Beauty"
  },
  {
    id: 9,
    title: "Best-Selling Fiction Novel - Hardcover",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.9,
    reviewCount: 1054,
    category: "Books"
  },
  {
    id: 10,
    title: "Educational Building Blocks Set for Kids",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=500&h=500",
    rating: 4.6,
    reviewCount: 387,
    category: "Toys & Games"
  }
];

// Get all products
export const getAllProducts = (): ProductType[] => {
  return products;
};

// Get products by category
export const getProductsByCategory = (category: string): ProductType[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

// Get featured products (for example, high-rated products)
export const getFeaturedProducts = (): ProductType[] => {
  return products.filter(product => product.rating >= 4.5);
};

// Get new arrivals
export const getNewArrivals = (): ProductType[] => {
  return products.filter(product => product.isNew);
};

// Get products on sale
export const getProductsOnSale = (): ProductType[] => {
  return products.filter(product => product.isSale);
};

// Get a product by ID
export const getProductById = (id: number): ProductType | undefined => {
  return products.find(product => product.id === id);
};

// Search products
export const searchProducts = (query: string): ProductType[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.title.toLowerCase().includes(searchTerm) || 
    product.category.toLowerCase().includes(searchTerm)
  );
};
