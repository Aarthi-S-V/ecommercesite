
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getProductById } from '@/services/productService';
import { useCart } from '@/context/CartContext';
import { 
  Star, 
  Heart,
  Truck, 
  ShieldCheck, 
  ArrowLeft, 
  Share2,
  Minus,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductsGrid from '@/components/products/ProductsGrid';
import { getFeaturedProducts } from '@/services/productService';
import { toast } from '@/components/ui/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(parseInt(id || '0'));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== product?.id).slice(0, 4);
  
  const discountPercentage = product?.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
    toast({
      title: isWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product?.title} has been ${isWishlist ? 'removed from' : 'added to'} your wishlist`,
    });
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.title,
        text: `Check out this great product: ${product?.title}`,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Product link copied to clipboard",
      });
    }
  };
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="mb-6">Sorry, the product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
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
                  <Link to={`/categories/${product.category.toLowerCase()}`} className="text-sm text-violet hover:text-violet-dark">
                    {product.category}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm text-gray-500 truncate max-w-[200px]">
                    {product.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-auto object-contain" 
              />
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
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-dark">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-dark' : ''}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm">({product.reviewCount} reviews)</span>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg line-through text-muted-foreground ml-3">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <Badge className="ml-3 bg-pink-light text-pink-dark">
                    {discountPercentage}% off
                  </Badge>
                </>
              )}
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.
                Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <h3 className="font-medium mr-4">Quantity</h3>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 text-lg font-medium w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="flex-1 bg-yellow hover:bg-yellow-dark text-foreground" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className={`${isWishlist ? 'bg-pink text-white border-pink' : 'text-pink hover:text-pink-dark'}`}
                  onClick={toggleWishlist}
                >
                  <Heart className={`h-5 w-5 ${isWishlist ? 'fill-current' : ''}`} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-start mb-3">
                <div className="text-violet mr-3">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-gray-600">For orders over $50</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-violet mr-3">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Secure Payment</h4>
                  <p className="text-sm text-gray-600">100% secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <ProductsGrid 
              products={relatedProducts}
              title="You May Also Like"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
