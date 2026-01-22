import React, { useState } from 'react';
import WriteupCard from './components/WriteupCard';
import { writeups, teamInfo } from './data/writeups';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  const [filter, setFilter] = useState('All');

  const filteredWriteups = filter === 'All'
    ? writeups
    : writeups.filter(w => w.category === filter);

  return (
    <div className="app-container">
      <div className="background-glow"></div>

      <header className="header">
        <div className="header-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="brand"
          >
            <h1 className="team-name">{teamInfo.name}</h1>
            <div className="event-badge">{teamInfo.event}</div>
          </motion.div>
        </div>
      </header>

      <main className="main-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="controls"
        >
          <button
            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
            onClick={() => setFilter('All')}
          >
            All Categories
          </button>
          <button
            className={`filter-btn ${filter === 'Web' ? 'active' : ''}`}
            onClick={() => setFilter('Web')}
          >
            Web Exploitation
          </button>
        </motion.div>

        <div className="writeups-grid">
          <AnimatePresence mode="wait">
            {filteredWriteups.map((w) => (
              <WriteupCard key={w.id} writeup={w} />
            ))}
          </AnimatePresence>
          {filteredWriteups.length === 0 && (
            <div className="empty-state">No writeups found in this category.</div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="socials">
          {teamInfo.socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
              {social.name}
            </a>
          ))}
        </div>
        <p className="copyright">Writeup by Swarnim • KnightCTF 2026</p>
      </footer>
    </div>
  );
}

export default App;
