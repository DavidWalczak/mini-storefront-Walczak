export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Bookshelf', price: 200, category: 'Furniture', stock: 6 },
    { id: 'p5', name: 'Headphones', price: 120, category: 'Electronics', stock: 7 },
    { id: 'p6', name: 'Sneakers', price: 95, category: 'Apparel', stock: 8 },
    { id: 'p7', name: 'Jacket', price: 160, category: 'Apparel', stock: 2 },
    { id: 'p8', name: 'Coffee Table', price: 250, category: 'Furniture', stock: 4 },
    { id: 'p9', name: 'Smartwatch', price: 300, category: 'Electronics', stock: 5 },
    { id: 'p10', name: 'T-Shirt', price: 35, category: 'Apparel', stock: 10 },
  ];
  return Response.json(products);
}