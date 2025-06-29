import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.body.className = saved;
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.body.className = next;
    localStorage.setItem('theme', next);
  };

  return (
    <>
      <div className="container" style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <button onClick={toggleTheme} style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          background: 'var(--primary)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
