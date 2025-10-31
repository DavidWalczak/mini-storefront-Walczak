'use client';

export default function PriceFilter({ value, onChange }) {
  return (
    <div className="filter">
      <label className="filter-label">Max Price:</label>
      <input
        className="filter-input"
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter price"
      />
    </div>
  );
}