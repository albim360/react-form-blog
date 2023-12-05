import React, { useState } from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticles([...articles, { id: Date.now(), title }]);
    setTitle('');
  };

  const handleDelete = (id) => {
    const updatedArticles = articles.filter(article => article.id !== id);
    setArticles(updatedArticles);
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Titolo:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={submitButtonStyle}>Aggiungi</button>
      </form>

      <ul style={listStyle}>
        {articles.map((article) => (
          <li key={article.id} style={listItemStyle}>
            {article.title}
            <span
              style={deleteIconStyle}
              onClick={() => handleDelete(article.id)}
            >
              ❌
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const formContainerStyle = {
  maxWidth: '900px',
  backgroundColor: '#333',
  color: '#fff',
  padding: '35px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
};

const formStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  fontSize: '16px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  backgroundColor: '#555',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
};

const submitButtonStyle = {
  background: '#4CAF50',
  color: 'white',
  padding: '10px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
    marginBottom: '10px',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  

const deleteIconStyle = {
  marginLeft: '10px',
  cursor: 'pointer',
  fontSize: '18px',
  color: 'red',
};

export default BlogForm;
