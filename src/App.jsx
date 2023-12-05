import React, { useState } from 'react';
import BlogForm from './components/BlogForm.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Il mio Blog</h1>
      <BlogForm />
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#333',
  color: '#fff',
  margin: 0,
  padding: 0,
  height: '100vh',
};

const titleStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const cardStyle = {
  backgroundColor: '#444',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  width: '400px',
  marginTop: '20px',
};

const buttonStyle = {
  background: '#4CAF50',
  color: 'white',
  padding: '10px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px',
};

const codeStyle = {
  background: '#eee',
  padding: '2px 4px',
  borderRadius: '4px',
  fontFamily: 'monospace',
};

const readDocsStyle = {
  marginTop: '20px',
  fontSize: '18px',
};

export default App;
