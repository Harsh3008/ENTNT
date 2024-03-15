import React, { useState } from 'react';

function ProductsManagement() {
  // Mock data for products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 10, stock: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20, stock: 50 },
  ]);

  // State for tracking form input for adding/editing product
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle adding a new product
  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1, // Assuming IDs are incremental
      ...formData
    };
    // Update products state by adding the new product
    setProducts([...products, newProduct]);
    setFormData({
      id: '',
      name: '',
      category: '',
      price: '',
      stock: ''
    });
  };

  // Function to handle editing an existing product
  const handleEditProduct = () => {
    console.log('Edit product:', formData);
  };

  // Function to handle deleting a product
  const handleDeleteProduct = (productId) => {
    // Filter out the product with the specified ID
    const updatedProducts = products.filter(product => product.id !== productId);
    // Update products state with the filtered products
    setProducts(updatedProducts);
  };

  const styles = {
    container: {
      margin: '20px',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    form: {
      marginBottom: '20px',
    },
    input: {
      marginRight: '10px',
      marginBottom: '10px',
      padding: '5px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '200px',
    },
    button: {
      padding: '5px 10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      textAlign: 'left',
      padding: '8px',
      borderBottom: '1px solid #ddd',
    },
    td: {
      textAlign: 'left',
      padding: '8px',
      borderBottom: '1px solid #ddd',
    },
    editButton: {
      marginRight: '5px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Products Management</h2>
      {/* Form for adding/editing product */}
      <form style={styles.form}>
        <input style={styles.input} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
        <input style={styles.input} type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} />
        <input style={styles.input} type="number" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} />
        <input style={styles.input} type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleInputChange} />
        <button style={styles.button} type="button" onClick={handleAddProduct}>Add Product</button>
        <button style={styles.button} type="button" onClick={handleEditProduct}>Edit Product</button>
      </form>

      {/* Table to display products */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Stock</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={styles.td}>{product.id}</td>
              <td style={styles.td}>{product.name}</td>
              <td style={styles.td}>{product.category}</td>
              <td style={styles.td}>{product.price}</td>
              <td style={styles.td}>{product.stock}</td>
              <td>
                <button style={styles.editButton} onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button style={styles.deleteButton} onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsManagement;
