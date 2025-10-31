'use client';

export default function CartSummary({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-summary">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p className="status-empty">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <button onClick={() => onRemove(item.id)}>-</button>
                <span className="cart-item-qty">{item.qty}x</span>
                <span className="cart-item-name">{item.name}</span>
              </div>
              <span className="cart-item-price">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}