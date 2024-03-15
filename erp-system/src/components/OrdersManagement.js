import React, { useState } from 'react';

function OrdersManagement() {
  // Mock data for orders
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Harsh Tripathi', date: '2024-03-08', status: 'Pending' },
    { id: 2, customer: 'Virat Kohli', date: '2024-03-07', status: 'Shipped' },
  ]);

  // Function to handle viewing order details
  const handleViewOrderDetails = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    console.log('View order details:', order);
  };

  // Function to handle updating order status
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
    console.log('Update order status:', orderId, newStatus);
  };

  // Function to handle deleting an order
  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    console.log('Delete order:', orderId);
  };

  const styles = {
    title: {
      fontSize: '24px',
      marginBottom: '20px',
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
    button: {
      marginRight: '5px',
      padding: '5px 10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <h2 style={styles.title}>Orders Management</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Customer</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={styles.td}>{order.id}</td>
              <td style={styles.td}>{order.customer}</td>
              <td style={styles.td}>{order.date}</td>
              <td style={styles.td}>{order.status}</td>
              <td>
                <button style={styles.button} onClick={() => handleViewOrderDetails(order.id)}>View Details</button>
                <button style={styles.button} onClick={() => handleUpdateOrderStatus(order.id, 'Shipped')}>Update Status</button>
                <button style={styles.button} onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersManagement;