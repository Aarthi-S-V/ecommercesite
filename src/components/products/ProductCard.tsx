
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { toast } from '@/components/ui/use-toast';

export interface ProductType {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
}

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlist(!isWishlist);
    
    if (!isWishlist) {
      toast({
        title: "Added to wishlist",
        description: `${product.title} has been added to your wishlist`,
      });
    } else {
      toast({
        title: "Removed from wishlist",
        description: `${product.title} has been removed from your wishlist`,
      });
    }
  };
  
  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart`,
    });
  };
  
  // Calculate discount percentage
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="h-full overflow-hidden hover-scale">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-48 object-cover"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className={`absolute top-2 right-2 rounded-full ${isWishlist ? 'bg-pink text-white' : 'bg-white/80 text-pink hover:bg-white'}`}
            onClick={toggleWishlist}
          >
            <Heart className={`h-5 w-5 ${isWishlist ? 'fill-current' : ''}`} />
          </Button>
          
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-violet text-white">
              New
            </Badge>
          )}
          
          {product.isSale && (
            <Badge className="absolute top-2 left-2 bg-pink text-white">
              Sale
            </Badge>
          )}
        </div>
        
        <CardHeader className="p-3">
          <CardTitle className="text-sm font-medium line-clamp-2">{product.title}</CardTitle>
          <CardDescription className="text-xs">{product.category}</CardDescription>
        </CardHeader>
        
        <CardContent className="p-3 pt-0">
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-dark">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-dark' : ''}`} 
                />
              ))}
            </div>
            <span className="text-xs ml-1">({product.reviewCount})</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm line-through text-muted-foreground ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <Badge className="ml-2 bg-pink-light text-pink-dark">
                  {discountPercentage}% off
                </Badge>
              </>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-3 pt-0">
          <Button 
            className="w-full bg-yellow hover:bg-yellow-dark text-foreground" 
            size="sm"
            onClick={addToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
