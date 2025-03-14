
import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    title: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500&h=300',
    link: '/categories/electronics'
  },
  {
    id: 2,
    title: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=500&h=300',
    link: '/categories/fashion'
  },
  {
    id: 3,
    title: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-bda9da8a1abb?auto=format&fit=crop&q=80&w=500&h=300',
    link: '/categories/home'
  },
  {
    id: 4,
    title: 'Beauty',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=500&h=300',
    link: '/categories/beauty'
  },
  {
    id: 5,
    title: 'Books',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=500&h=300',
    link: '/categories/books'
  },
  {
    id: 6,
    title: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500&h=300',
    link: '/categories/toys'
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(category => (
          <CategoryCard 
            key={category.id} 
            title={category.title} 
            image={category.image} 
            link={category.link} 
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
