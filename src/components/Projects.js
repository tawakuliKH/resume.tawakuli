import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <p className="section-sub">A selection of work that blends AI, web development, and design.</p>
        </div>
        <div className="projects-grid">

          {/* ─── Project 1: Afghanistan Online Cargo ─── */}
          <div className="project-card reveal reveal-delay-1">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--accent)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Full-Stack</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>Production</span>
              </div>
              <h3>Afghanistan Online Cargo</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                A KYC-verified, cross-border package coordination platform connecting Afghan senders and travelers.
                Features bilingual UI (English/Dari with full RTL), five-step delivery workflow, admin dashboard,
                JWT auth, Cloudflare R2 storage with signed URLs, and Dockerized deployment.
                <br /><br />
                <strong>Stack:</strong> React 19, TypeScript, Vite, Tailwind CSS, Node.js, Express, Prisma, PostgreSQL, Docker
              </p>
              <div className="project-links">
                <a href="https://afghancargo.online" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Live Site</a>
                <a href="https://github.com/tawakuliKH/afghanistan_online_cargo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
              </div>
            </div>
          </div>

          {/* ─── Project 2: Talk2Forms ─── */}
          <div className="project-card reveal reveal-delay-2">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--accent-secondary)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Full-Stack</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>AI / Voice</span>
              </div>
              <h3>Talk2Forms</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Voice-first form-filling platform and Chrome extension. Scans any web form and fills it via
                AI-driven voice interviews in 99+ languages. Uses an injected DOM overlay for persistent multi-turn
                conversations. BYOK (Bring Your Own Key) architecture for privacy.
                <br /><br />
                <strong>Stack:</strong> React, TypeScript, Node.js, Express, Prisma, PostgreSQL, Gemini API, Groq Whisper, Chrome Manifest V3
              </p>
              <div className="project-links">
                <a href="https://talk2forms.site" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Live Site</a>
                <a href="https://chrome.google.com/webstore/detail/eenambafobbedhkadcpagdgkobnaicjo" target="_blank" rel="noopener noreferrer"><i className="fab fa-chrome"></i> Extension</a>
              </div>
            </div>
          </div>

          {/* ─── Project 3: CallAI ─── */}
          <div className="project-card reveal reveal-delay-3">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: '#805ad5', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Telephony</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>Python / AI</span>
              </div>
              <h3>CallAI</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Fully local, offline voice-based AI phone agent for the Afghan market. Callers on 2G/3G feature phones
                dial a number and have real spoken conversations with an AI. Includes DTMF controls (* start / # stop),
                multi-turn conversational memory, and synchronous audio pipeline.
                <br /><br />
                <strong>Stack:</strong> Python, Asterisk PBX, PJSIP, Groq Whisper, Gemini API, edge-tts, FFmpeg
              </p>
              <div className="project-links">
                <a href="https://github.com/tawakuliKH/CallAI" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
              </div>
            </div>
          </div>

          {/* ─── Project 4: AIKidLy ─── */}
          <div className="project-card reveal reveal-delay-4">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: '#dd6b20', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Web App</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>Child-Safe AI</span>
              </div>
              <h3>AIKidLy</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                A friendly owl chatbot (Kai) that answers kids' curious questions in simple, safe, age-appropriate language.
                Features animated SVG mascot, voice input/output, Google sign-in & guest mode, bilingual landing page
                (English/Persian RTL), and multi-session chat history stored locally.
                <br /><br />
                <strong>Stack:</strong> React 18, Vite, Gemini API, Google Identity Services, Web Speech API, i18n
              </p>
              <div className="project-links">
                <a href="https://aikidley.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Live Demo</a>
                <a href="https://github.com/tawakuliKH/AIKidLy" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
              </div>
            </div>
          </div>

          {/* ─── Project 5: Neon Dodge ─── */}
          <div className="project-card reveal reveal-delay-1">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: '#e53e3e', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Game</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>Computer Vision</span>
              </div>
              <h3>Neon Dodge — Finger Tracker Edition</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Browser-based arcade game controlled entirely by real-time index-finger tracking via webcam.
                No installation required — MediaPipe loads from CDN. Features neon glow rendering on HTML5 Canvas,
                progressive difficulty scaling, gesture-based restart (open-palm detection), and persistent high scores.
                <br /><br />
                <strong>Stack:</strong> HTML5 Canvas, MediaPipe Hands, Vanilla JavaScript, Web Audio API
              </p>
              <div className="project-links">
                <a href="https://github.com/tawakuliKH/neon-dodge-fingertracker" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
              </div>
            </div>
          </div>

          {/* ─── Project 6: Master's Thesis ─── */}
          <div className="project-card reveal reveal-delay-2">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--accent)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Thesis</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>AI / Computer Vision</span>
              </div>
              <h3>Diabetic Retinopathy Detection &amp; Staging</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                <strong>Master's Thesis · Yazd University (2026)</strong>
                <br /><br />
                Developed a deep learning approach using a modern ConvNeXt-based model to detect
                diabetic retinopathy and determine its stage from a single retinal (fundus) image.
                Introduced <strong>channel randomization</strong> technique to help the model focus
                on key structural signs like hemorrhages and microaneurysms.
                <br /><br />
                <strong>Achieved:</strong> 99.18% accuracy in detection · 92.00% accuracy in staging
              </p>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> View Thesis</a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Code</a>
              </div>
            </div>
          </div>

          {/* ─── Project 7: Zwan Hospital ─── */}
          <div className="project-card reveal reveal-delay-3">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--accent-secondary)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Full-Stack</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>Laravel / MySQL</span>
              </div>
              <h3>Zwan Curative Hospital — Complete Management System</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                <strong>Full-featured hospital management system</strong> that manages the entire hospital operations including:
                <br /><br />
                • <strong>Patient Management:</strong> Registration, appointments, medical records, and treatment history
                <br />
                • <strong>Financial Management:</strong> Patient incomes, expenses tracking, billing, and insurance claims
                <br />
                • <strong>Pharmacy Management:</strong> Inventory control, medication dispensing, and prescription tracking
                <br />
                • <strong>Inventory &amp; Supply Chain:</strong> Barcode reader integration for inventory management
                <br />
                • <strong>Staff Management:</strong> Doctor schedules, nurse assignments, and department coordination
                <br />
                • <strong>Reporting &amp; Analytics:</strong> Comprehensive reports for hospital administration
                <br /><br />
                Built with <strong>Laravel</strong> (PHP) and <strong>MySQL</strong> with a responsive front-end interface.
              </p>
              <div className="project-links">
                <a href="https://www.zwanmedicalcomplex.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Visit Site</a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub (Private)</a>
              </div>
            </div>
          </div>

          {/* ─── Project 8: Diabetes Prediction ─── */}
          <div className="project-card reveal reveal-delay-4">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--accent-secondary)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Web App</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>Machine Learning</span>
              </div>
              <h3>Diabetes Prediction System</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Web application using Machine Learning (Pima Indian dataset) to predict diabetes onset.
                Built with Django and scikit-learn. Features a user-friendly interface for real-time predictions.
              </p>
              <div className="project-links">
                <a href="https://github.com/tawakuliKH/Diabetes-Prediction-Django-Web-App" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
              </div>
            </div>
          </div>

          {/* ─── Project 9: Kabul University ─── */}
          <div className="project-card reveal reveal-delay-1">
            <div className="project-body" style={{ padding: '28px 28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ background: 'var(--accent-secondary)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#fff' }}>Website</span>
                <span style={{ background: 'rgba(108, 140, 255, 0.15)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '500', color: 'var(--accent)' }}>Front-End</span>
              </div>
              <h3>Kabul University — CS Faculty</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Informational website for the Faculty of Computer Science, showcasing departments,
                faculty members, research, and student resources. Built with HTML, CSS, and JavaScript.
              </p>
              <div className="project-links">
                <a href="https://tawakulikh.github.io/Computer-Science-Faculty-Kabul-University/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Live Demo</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;