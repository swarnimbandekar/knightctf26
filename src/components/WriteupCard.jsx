import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Flag, ChevronDown, ChevronUp } from 'lucide-react';

const WriteupCard = ({ writeup }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="card"
        >
            <div
                className="card-header"
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ cursor: 'pointer' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h2 className="card-title">{writeup.title}</h2>
                    <span className="badge">{writeup.category}</span>
                </div>
                {isExpanded ? <ChevronUp size={24} color="var(--text-secondary)" /> : <ChevronDown size={24} color="var(--text-secondary)" />}
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="card-description">
                            {writeup.description.split('\n').map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>

                        <div className="solution-section">
                            <h3 className="section-title">Solution</h3>
                            {writeup.solution.map((step, index) => {
                                if (step.type === 'text') {
                                    return <p key={index} className="step-text">{step.content}</p>;
                                }
                                if (step.type === 'image') {
                                    return (
                                        <div key={index} className="step-image-container">
                                            <img src={step.src} alt={step.alt} loading="lazy" />
                                        </div>
                                    );
                                }
                                if (step.type === 'code') {
                                    return (
                                        <div key={index} className="step-code">
                                            <div className="code-header">
                                                <Terminal size={14} />
                                                <span>{step.lang}</span>
                                            </div>
                                            <pre>
                                                <code>{step.content}</code>
                                            </pre>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        <div className="flag-section">
                            <div className="flag-container">
                                <Flag size={18} className="flag-icon" />
                                <span className="flag-label">Flag:</span>
                                <code className="flag-text">{writeup.flag}</code>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default WriteupCard;
