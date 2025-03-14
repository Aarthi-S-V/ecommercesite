
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  const banners = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1920&h=600",
      title: "Summer Collection",
      description: "Discover our latest products with up to 40% off",
      buttonText: "Shop Now",
      buttonLink: "/categories/summer",
      position: "left"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1920&h=600",
      title: "Tech Gadgets",
      description: "Explore the newest innovations in tech",
      buttonText: "Explore",
      buttonLink: "/categories/electronics",
      position: "right"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=1920&h=600",
      title: "Home & Decor",
      description: "Transform your space with our premium selections",
      buttonText: "Discover",
      buttonLink: "/categories/home",
      position: "left"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className={`absolute inset-0 flex flex-col justify-center 
                    ${banner.position === 'left' ? 'items-start pl-8 md:pl-16' : 'items-end pr-8 md:pr-16'}`}
                >
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg max-w-md text-white">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">{banner.title}</h2>
                    <p className="text-sm md:text-base mb-4">{banner.description}</p>
                    <Button asChild className="bg-pink hover:bg-pink-dark">
                      <Link to={banner.buttonLink}>{banner.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default HeroBanner;
