'use client';

export default function CategoryFilter({ value, onChange }) {
  const categories = ['All', 'Electronics', 'Furniture', 'Apparel'];
  return (
    <div className="filter">
      <label className="filter-label">Category:</label>
      <select className="filter-select" value={value} onChange={e => onChange(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}