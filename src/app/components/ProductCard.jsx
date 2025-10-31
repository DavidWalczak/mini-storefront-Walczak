'use client';

export default function ProductCard({ product, onAdd, cart }) {
  const cartItem = cart?.find((item) => item.id === product.id);
  const qtyInCart = cartItem?.qty || 0;
  const disabled = product.stock <= qtyInCart;

  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-stock">
          {product.stock - qtyInCart > 0
            ? `${product.stock - qtyInCart} in stock`
            : 'Out of stock'}
        </p>
      </div>

      <div className="product-actions">
        <button
          className={`add-to-cart ${disabled ? 'disabled' : ''}`}
          onClick={() => onAdd(product)}
          disabled={disabled}
        >
          {disabled ? 'Unavailable' : 'Add to Cart'}
        </button>

        {qtyInCart > 0 && (
          <p className="cart-status visible">In cart: {qtyInCart}</p>
        )}
      </div>
    </div>
  );
}