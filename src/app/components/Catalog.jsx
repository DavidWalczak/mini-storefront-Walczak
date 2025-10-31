'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import CartSummary from './CartSummary';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState(0);

  // Fetch products from API route
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  // Add item to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === product.id);
      if (existing) {
        if (existing.qty < product.stock) {
          return prevCart.map((i) =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        } else {
          alert('Cannot add more than available stock.');
          return prevCart;
        }
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === id);
      if (!existing) return prevCart;
      if (existing.qty > 1) {
        return prevCart.map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        );
      }
      return prevCart.filter((i) => i.id !== id);
    });
  };

  // Reset entire cart
  const handleResetCart = () => {
    if (cart.length === 0) {
      alert('Your cart is already empty.');
      return;
    }
    const confirmed = confirm('Are you sure you want to clear your cart?');
    if (confirmed) {
      setCart([]);
    }
  };

  // Filter products
  const filteredProducts = products.filter(
    (p) =>
      (category === 'all' || p.category === category) &&
      p.price <= price
  );

  return (
    <div className="catalog">
      <header className="store-header">
        <h1 className="store-title">Mini Storefront</h1>
      </header>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            className="filter-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Apparel">Apparel</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="price">Max Price: ${price}</label>
          <input
            type="range"
            id="price"
            className="filter-input"
            min="0"
            max="1500"
            step="50"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <section className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={handleAddToCart}
            cart={cart}
          />
        ))}
      </section>

      <div className="cart-section">
        <CartSummary cart={cart} onRemove={handleRemoveFromCart} />
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button
            onClick={handleResetCart}
            className="reset-cart"
            style={{
              backgroundColor: '#cfc493',
              color: '#006747',
              border: 'none',
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
          >
            Reset Cart
          </button>
        </div>
      </div>
    </div>
  );
}