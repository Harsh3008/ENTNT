import React from 'react';

function Dashboard() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dashboard</h2>
      <div className="dashboard-cards" style={styles.cardsContainer}>
        <div className="dashboard-card" style={styles.card}>
          <h3 style={styles.cardHeading}>Total number of products</h3>
          <p style={styles.cardContent}>100</p>
        </div>
        <div className="dashboard-card" style={styles.card}>
          <h3 style={styles.cardHeading}>Total number of orders</h3>
          <p style={styles.cardContent}>50</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    width: '45%',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardHeading: {
    marginBottom: '10px',
    color: '#333',
  },
  cardContent: {
    fontSize: '18px',
    color: '#007bff',
  },
};

export default Dashboard;
