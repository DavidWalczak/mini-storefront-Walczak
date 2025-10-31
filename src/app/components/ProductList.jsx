'use client';

import ProductCard from './ProductCard';

export default function ProductList({ products, onAdd, cart }) {
  return (
    <div className="product-list">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} cart={cart || []} />
      ))}
    </div>
  );
}