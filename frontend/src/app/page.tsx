"use client";

import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="gradient-text">Initializing Biological Intelligence...</h1>
      </div>
    );
  }

  return (
    <main>
      <header>
        <div className="logo">AETERNA<span style={{ color: 'var(--primary)' }}>.</span></div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span className="badge badge-success">Biological Integrity: 98.4%</span>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--secondary)' }}></div>
        </div>
      </header>

      <div className="dashboard-grid">
        {/* Main Score Card */}
        <div className="glass-card" style={{ gridColumn: 'span 4' }}>
          <p className="stat-label">Biological Age</p>
          <div className="stat-value">32.4 <span style={{ fontSize: '1rem', color: '#64748b' }}>years</span></div>
          <p style={{ marginTop: '0.5rem', color: 'var(--success)' }}>-5.6 years vs. Chronological</p>
          <div style={{ marginTop: '2rem', height: 4, background: '#1e293b', borderRadius: 2 }}>
            <div style={{ width: '84%', height: '100%', background: 'var(--primary)', borderRadius: 2 }}></div>
          </div>
        </div>

        <div className="glass-card" style={{ gridColumn: 'span 4' }}>
          <p className="stat-label">Longevity Optimization Score</p>
          <div className="stat-value">84<span style={{ fontSize: '1rem', color: '#64748b' }}>/100</span></div>
          <p style={{ marginTop: '0.5rem', color: 'var(--primary)' }}>Top 2% in peer group</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <span className="badge badge-primary">Metabolic Elite</span>
          </div>
        </div>

        <div className="glass-card" style={{ gridColumn: 'span 4' }}>
          <p className="stat-label">Next Intervention</p>
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Zone 2 Training</h3>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>45 min session scheduled to optimize mitochondrial efficiency.</p>
            <button style={{ 
              marginTop: '1.5rem', 
              width: '100%', 
              padding: '0.75rem', 
              borderRadius: '12px', 
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              border: 'none',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Start Session</button>
          </div>
        </div>

        {/* Biomarker Trends */}
        <div className="glass-card" style={{ gridColumn: 'span 8' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h3 className="stat-label">Biomarker Intelligence Graph</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>● HRV</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--secondary)' }}>● Glucose</span>
            </div>
          </div>
          <div style={{ height: 250, borderLeft: '1px solid #1e293b', borderBottom: '1px solid #1e293b', position: 'relative' }}>
            {/* Visual placeholder for complex SVG chart */}
            <svg width="100%" height="100%" viewBox="0 0 800 250">
              <path d="M0,200 Q200,50 400,150 T800,80" fill="none" stroke="var(--primary)" strokeWidth="3" />
              <path d="M0,150 Q150,180 300,100 T800,120" fill="none" stroke="var(--secondary)" strokeWidth="3" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* AI Health Coach Sidebar */}
        <div className="glass-card" style={{ gridColumn: 'span 4' }}>
          <h3 className="stat-label">AI Health Advisor</h3>
          <div style={{ marginTop: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '16px', fontSize: '0.9rem' }}>
            &quot;Your hs-CRP dropped by 12% following the implementation of the Mediterranean protocol. This indicates a significant reduction in systemic inflammation.&quot;
          </div>
          <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', fontSize: '0.9rem', color: '#94a3b8' }}>
            How does my sleep affect my glucose?
          </div>
          <input type="text" placeholder="Ask Aeterna..." style={{
            marginTop: '1.5rem',
            width: '100%',
            background: 'var(--glass)',
            border: '1px solid var(--glass-border)',
            padding: '1rem',
            borderRadius: '12px',
            color: 'white'
          }} />
        </div>

        {/* Key Metrics Grid */}
        <div className="glass-card" style={{ gridColumn: 'span 3' }}>
          <p className="stat-label">VO2 MAX</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.5rem' }}>54.2 <span style={{ fontSize: '0.8rem', color: 'var(--success)' }}>Superior</span></div>
        </div>
        <div className="glass-card" style={{ gridColumn: 'span 3' }}>
          <p className="stat-label">HRV (Last 24h)</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.5rem' }}>72 ms <span style={{ fontSize: '0.8rem', color: 'var(--success)' }}>↑ 8%</span></div>
        </div>
        <div className="glass-card" style={{ gridColumn: 'span 3' }}>
          <p className="stat-label">Recovery Capacity</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.5rem' }}>92% <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Optimal</span></div>
        </div>
        <div className="glass-card" style={{ gridColumn: 'span 3' }}>
          <p className="stat-label">Cognitive Load</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.5rem' }}>Low <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Balanced</span></div>
        </div>
      </div>
    </main>
  );
}
