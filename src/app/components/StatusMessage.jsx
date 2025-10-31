'use client';

export default function StatusMessage({ type }) {
  const messages = {
    loading: 'Loading products...',
    error: 'Failed to load products. Please try again.',
    empty: 'No products match your filters.',
  };

  return (
    <div className="text-center text-gray-500 p-10">
      <p>{messages[type]}</p>
    </div>
  );
}