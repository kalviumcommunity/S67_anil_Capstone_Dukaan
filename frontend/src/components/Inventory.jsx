
import React, { useState, useEffect } from 'react';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productId: '',
    name: '',
    costPrice: '',
    customerPrice: '',
    description: '',
    quantity: '',
    category: '',
  });

  const API_URL = 'http://localhost:0000/api/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        alert('Product added successfully!');
        fetchProducts();
        setNewProduct({
          productId: '',
          name: '',
          costPrice: '',
          customerPrice: '',
          description: '',
          quantity: '',
          category: '',
          billImage: ''
        });
      } else {
        alert('Failed to add product.');
      }
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Inventory</h2>
      <div style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
        <h4>Add Product</h4>
        {Object.keys(newProduct).map((field) => (
          <div key={field} style={{ marginBottom: '0.5rem' }}>
            <input
              type={['costPrice', 'customerPrice', 'quantity'].includes(field) ? 'number' : 'text'}
              name={field}
              value={newProduct[field]}
              onChange={handleInputChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              style={{ padding: '0.4rem', width: '100%' }}
            />
          </div>
        ))}
        <button onClick={handleAddProduct} style={{ padding: '0.5rem 1rem', background: '#333', color: '#fff' }}>
          Add Product
        </button>
      </div>

      <h4>Product List</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Product ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Cost Price</th>
            <th style={thStyle}>Customer Price</th>
            <th style={thStyle}>Qty</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td style={tdStyle}>{p.productId}</td>
              <td style={tdStyle}>{p.name}</td>
              <td style={tdStyle}>₹{p.costPrice}</td>
              <td style={tdStyle}>₹{p.customerPrice}</td>
              <td style={tdStyle}>{p.quantity}</td>
              <td style={tdStyle}>{p.category}</td>
              <td style={tdStyle}>{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: '1px solid #ccc',
  padding: '0.5rem',
  background: '#f0f0f0',
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '0.5rem',
};

export default Inventory;
