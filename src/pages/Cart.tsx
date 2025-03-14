
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { 
  Trash2, 
  ShoppingBag, 
  Minus, 
  Plus,
  ArrowLeft,
  CreditCard,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProductsGrid from '@/components/products/ProductsGrid';
import { getFeaturedProducts } from '@/services/productService';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getTotalItems,
    getTotalPrice
  } = useCart();
  
  const recommendedProducts = getFeaturedProducts().slice(0, 4);
  
  // Shipping cost calculation
  const shippingCost = getTotalPrice() > 50 ? 0 : 7.99;
  const tax = getTotalPrice() * 0.07; // 7% tax
  const totalWithTaxAndShipping = getTotalPrice() + shippingCost + tax;
  
  if (cart.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild>
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
          
          {recommendedProducts.length > 0 && (
            <div className="mt-12">
              <ProductsGrid 
                products={recommendedProducts}
                title="Recommended Products"
              />
            </div>
          )}
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
          <Button 
            variant="ghost" 
            className="text-muted-foreground" 
            onClick={clearCart}
          >
            <Trash2 className="mr-2 h-4 w-4" /> Clear cart
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {cart.map((item) => (
                <div key={item.product.id} className="p-4 border-b last:border-b-0">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="sm:w-24 sm:h-24 flex-shrink-0">
                      <Link to={`/product/${item.product.id}`}>
                        <img 
                          src={item.product.image} 
                          alt={item.product.title} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </Link>
                    </div>
                    
                    <div className="flex-grow">
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="font-medium hover:text-violet">{item.product.title}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground mb-2">{item.product.category}</p>
                      
                      <div className="flex flex-wrap items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                          <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-muted-foreground hover:text-destructive"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Button asChild variant="outline" className="text-violet">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal ({getTotalItems()} items)</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>${totalWithTaxAndShipping.toFixed(2)}</span>
              </div>
              
              <Button className="w-full bg-pink hover:bg-pink-dark" size="lg">
                <Lock className="mr-2 h-4 w-4" /> Proceed to Checkout
              </Button>
              
              <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
        
        {recommendedProducts.length > 0 && (
          <div className="mt-12">
            <ProductsGrid 
              products={recommendedProducts}
              title="You Might Also Like"
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
