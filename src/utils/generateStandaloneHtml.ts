import { PERSONAL_INFO } from '../data/portfolioData';

export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="so" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yaasir Portfolio & Digital Services</title>
  <meta name="description" content="Official portfolio and digital services platform for Yaasir — Full-Stack Web Developer & Digital Creative.">
  
  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  
  <style>
    /* CSS RESET & VARIABLES */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    :root {
      --bg-dark: #020e09;
      --card-bg: rgba(4, 25, 17, 0.88);
      --coral-glow: #10b981;
      --amber-glow: #fbbf24;
      --cyan-glow: #10b981;
      --blue-glow: #059669;
      --text-main: #f0fdf4;
      --text-muted: #94a3b8;
      --border-color: rgba(16, 185, 129, 0.2);
      --font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-family);
      line-height: 1.6;
      overflow-x: hidden;
      position: relative;
    }

    /* Ambient Background Glows */
    .ambient-glow-1 {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .ambient-glow-2 {
      position: absolute;
      top: 1400px;
      right: 5%;
      width: 450px;
      height: 450px;
      background: radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 10;
    }

    /* Glassmorphism Containers */
    .glass-card {
      background: var(--card-bg);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .glass-card:hover {
      border-color: rgba(0, 242, 254, 0.4);
      box-shadow: 0 12px 30px -10px rgba(0, 210, 255, 0.2);
      transform: translateY(-3px);
    }

    /* NAVIGATION */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(13, 17, 23, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 16px 0;
    }

    .nav-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: #fff;
    }

    .logo-badge {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--cyan-glow), #0066ff);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0d1117;
      font-weight: 800;
      font-size: 20px;
      box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);
    }

    .brand-title {
      font-weight: 700;
      font-size: 18px;
    }

    .brand-sub {
      font-size: 11px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .nav-links {
      display: flex;
      gap: 8px;
      list-style: none;
      background: rgba(22, 27, 34, 0.7);
      padding: 4px 12px;
      border-radius: 30px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .nav-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      padding: 6px 14px;
      border-radius: 20px;
      transition: all 0.2s ease;
    }

    .nav-links a:hover {
      color: var(--cyan-glow);
      background: rgba(255, 255, 255, 0.05);
    }

    .nav-actions {
      display: flex;
      gap: 12px;
    }

    /* BUTTONS */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      border: none;
      transition: all 0.25s ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, #ff6b35 0%, #f59e0b 100%);
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(255, 107, 53, 0.35);
    }

    .btn-primary:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 107, 53, 0.5);
    }

    .btn-secondary {
      background: #161b22;
      color: var(--text-main);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .btn-secondary:hover {
      border-color: var(--cyan-glow);
      color: var(--cyan-glow);
      transform: translateY(-2px);
    }

    /* HERO SECTION */
    .hero-section {
      padding-top: 150px;
      padding-bottom: 80px;
    }

    .hero-grid {
      max-width: 840px;
      margin: 0 auto;
    }

    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 20px;
      background: rgba(0, 210, 255, 0.08);
      border: 1px solid rgba(0, 210, 255, 0.3);
      color: var(--cyan-glow);
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .hero-title {
      font-size: 52px;
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 12px;
    }

    .hero-subtitle {
      font-size: 24px;
      font-weight: 700;
      background: linear-gradient(135deg, #00d2ff, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
    }

    .hero-tagline {
      background: rgba(22, 27, 34, 0.6);
      border-left: 4px solid var(--cyan-glow);
      padding: 14px 18px;
      border-radius: 8px;
      font-style: italic;
      color: #e6edf3;
      margin-bottom: 20px;
      font-size: 16px;
    }

    .hero-desc {
      color: var(--text-muted);
      font-size: 15px;
      line-height: 1.7;
      margin-bottom: 28px;
    }

    .hero-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 30px;
    }

    .social-row {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
      color: var(--text-muted);
    }

    .social-btn {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: #161b22;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-main);
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .social-btn:hover {
      border-color: var(--cyan-glow);
      color: var(--cyan-glow);
      transform: translateY(-2px);
    }

    /* TERMINAL CARD */
    .terminal-card {
      padding: 24px;
    }

    .terminal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      margin-bottom: 16px;
    }

    .dots {
      display: flex;
      gap: 6px;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .dot-red { background: #ff5f56; }
    .dot-yellow { background: #ffbd2e; }
    .dot-green { background: #27c93f; }

    .terminal-content {
      font-family: monospace;
      font-size: 12px;
      line-height: 1.8;
      color: #8b949e;
    }

    .terminal-content .highlight {
      color: var(--cyan-glow);
      font-weight: bold;
    }

    .terminal-content .val-str {
      color: #a5d6ff;
    }

    .terminal-content .val-num {
      color: #7ee787;
    }

    /* SECTION TITLES */
    .section {
      padding: 80px 0;
    }

    .section-header {
      text-align: center;
      max-width: 650px;
      margin: 0 auto 50px auto;
    }

    .section-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--cyan-glow);
      background: rgba(0, 210, 255, 0.1);
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 10px;
    }

    .section-title {
      font-size: 34px;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .gradient-text {
      background: linear-gradient(135deg, #00d2ff, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .section-desc {
      color: var(--text-muted);
      font-size: 15px;
    }

    /* SKILLS GRID */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }

    .skill-card {
      padding: 24px;
    }

    .skill-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .skill-name {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }

    .skill-exp {
      font-size: 11px;
      color: var(--cyan-glow);
      background: rgba(0, 210, 255, 0.1);
      padding: 2px 8px;
      border-radius: 12px;
      font-family: monospace;
    }

    .skill-desc {
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 16px;
      line-height: 1.5;
    }

    .skill-bar {
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 3px;
      overflow: hidden;
    }

    .skill-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #00d2ff, #00a8ff);
      border-radius: 3px;
    }

    /* PROJECTS GRID */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 30px;
    }

    .project-card {
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .project-category {
      font-size: 11px;
      font-family: monospace;
      color: var(--cyan-glow);
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 8px;
      display: block;
    }

    .project-title {
      font-size: 22px;
      font-weight: 800;
      margin-bottom: 12px;
      color: #fff;
    }

    .project-desc {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }

    .tech-tag {
      font-size: 11px;
      background: #0d1117;
      border: 1px solid rgba(0, 210, 255, 0.2);
      color: #a5d6ff;
      padding: 4px 10px;
      border-radius: 6px;
    }

    /* SERVICES GRID */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }

    .service-card {
      padding: 28px;
    }

    .service-title {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 10px;
    }

    .service-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* CONTACT SECTION */
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 40px;
    }

    .contact-info-block {
      margin-bottom: 24px;
    }

    .contact-label {
      font-size: 12px;
      color: var(--text-muted);
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .contact-val {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      text-decoration: none;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 6px;
      color: #c9d1d9;
    }

    .form-control {
      width: 100%;
      background: #0d1117;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      padding: 12px 14px;
      color: #fff;
      font-family: inherit;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s ease;
    }

    .form-control:focus {
      border-color: var(--cyan-glow);
    }

    /* FLOATING WHATSAPP BUTTON */
    .floating-whatsapp {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #25d366, #128c7e);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
      color: #fff;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .floating-whatsapp:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 30px rgba(37, 211, 102, 0.6);
    }

    /* FOOTER */
    footer {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 40px 0;
      text-align: center;
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 80px;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .hero-grid, .contact-grid {
        grid-template-columns: 1fr;
      }
      .nav-links {
        display: none;
      }
      .hero-title {
        font-size: 38px;
      }
    }
  </style>
</head>
<body>

  <!-- Ambient Glows -->
  <div class="ambient-glow-1"></div>
  <div class="ambient-glow-2"></div>

  <!-- Top Navigation -->
  <header class="navbar">
    <div class="container nav-wrapper">
      <a href="#top" class="brand-logo">
        <div class="logo-badge">Y</div>
        <div>
          <div class="brand-title">${PERSONAL_INFO.name}</div>
          <div class="brand-sub">Portfolio & Digital Services</div>
        </div>
      </a>

      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div class="nav-actions">
        <button onclick="window.print()" class="btn btn-secondary">Print CV</button>
        <a href="${PERSONAL_INFO.whatsAppLink}" target="_blank" class="btn btn-primary">WhatsApp</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="top" class="hero-section">
    <div class="container hero-grid">
      <div>
        <div class="status-badge">● Available for Freelance & Digital Projects</div>
        <h1 class="hero-title">${PERSONAL_INFO.name}</h1>
        <h2 class="hero-subtitle">${PERSONAL_INFO.title}</h2>
        <div class="hero-tagline">&ldquo;${PERSONAL_INFO.tagline}&rdquo;</div>
        <p class="hero-desc">${PERSONAL_INFO.aboutMe}</p>

        <div class="hero-ctas">
          <a href="${PERSONAL_INFO.whatsAppLink}" target="_blank" class="btn btn-primary">
            Chat on WhatsApp (${PERSONAL_INFO.phone})
          </a>
          <button onclick="window.print()" class="btn btn-secondary">
            Download CV
          </button>
        </div>

        <div class="social-row">
          <span>Connect:</span>
          <a href="${PERSONAL_INFO.socials.github}" target="_blank" class="social-btn" title="GitHub">GH</a>
          <a href="${PERSONAL_INFO.socials.linkedin}" target="_blank" class="social-btn" title="LinkedIn">IN</a>
          <a href="${PERSONAL_INFO.socials.twitter}" target="_blank" class="social-btn" title="Twitter">TW</a>
          <span>| ${PERSONAL_INFO.email}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">About Me</span>
        <h2 class="section-title">Turning AI into <span class="gradient-text">Practical Reality</span></h2>
        <p class="section-desc">Engineering digital excellence from front to back.</p>
      </div>

      <div class="glass-card" style="padding: 36px;">
        <p style="font-size: 17px; line-height: 1.8; color: #e6edf3; margin-bottom: 20px;">
          &ldquo;${PERSONAL_INFO.aboutMe}&rdquo;
        </p>
        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">
          Combining prompt engineering, responsive frontend layouts, solid database integrations, and striking visual creative assets to give businesses a decisive edge in the digital era.
        </p>
      </div>
    </div>
  </section>

  <!-- Skills Showcase -->
  <section id="skills" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Proficiencies</span>
        <h2 class="section-title">Skills <span class="gradient-text">Showcase</span></h2>
        <p class="section-desc">12 Core competencies spanning web engineering, creative media, camera operation, and operational management.</p>
      </div>

      <div class="skills-grid">
        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">HTML5</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Semantic markup, accessibility, modern responsive scaffolding.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">CSS3</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Responsive layouts, Flexbox, Grid, custom animations & glassmorphism.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">JavaScript (ES6+)</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Modern asynchronous JS, interactive DOM, API integration.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">PHP</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Server-side web development, dynamic backend scripting, MVC.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">SQL</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Relational database schema modeling, queries, data consistency.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">Firebase</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Realtime Firestore database, Auth, Cloud Storage & hosting.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">Graphic Design</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Brand identity, promotional flyers, UI mockups, AI graphics.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">Video Editing</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Short-form reels, promotional videos, motion graphics, audio sync.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">Camera Operator</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Studio & field videography, cinematic framing, lighting setups, visual composition.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">Digital Marketing</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Targeted audience acquisition, conversion funnels, AI campaigns.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">Data Analysis</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">KPI tracking, business metrics visualization, strategic insights.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>

        <div class="glass-card skill-card">
          <div class="skill-header">
            <span class="skill-name">Office Management</span>
            <span class="skill-exp">100%</span>
          </div>
          <p class="skill-desc">Administrative workflow coordination, document pipelines, ops.</p>
          <div class="skill-bar"><div class="skill-bar-fill" style="width: 100%;"></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section id="projects" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Work Samples ⭐</span>
        <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
        <p class="section-desc">Production platforms and AI marketing campaigns built for high engagement.</p>
      </div>

      <div class="projects-grid">
        <!-- Project 1: Heego News Portal -->
        <div class="glass-card project-card">
          <div>
            <span class="project-category">Full-Stack Web App</span>
            <h3 class="project-title">
              <a href="https://heegonews-4450.ai.studio" target="_blank" style="color: inherit; text-decoration: none;">
                Heego News Portal ↗
              </a>
            </h3>
            <p class="project-desc">
              News portal platform with responsive UI, PHP backend, and Firebase/SQL database integration. Engineered for instant loading and dynamic feed management.
            </p>
            <div class="tech-tags">
              <span class="tech-tag">HTML</span>
              <span class="tech-tag">CSS</span>
              <span class="tech-tag">PHP</span>
              <span class="tech-tag">SQL</span>
              <span class="tech-tag">Firebase</span>
            </div>
          </div>
          <a href="https://heegonews-4450.ai.studio" target="_blank" class="btn btn-primary">
            Direct Demo Link →
          </a>
        </div>

        <!-- Project 2: Madrasada Al-Qasaam -->
        <div class="glass-card project-card">
          <div>
            <span class="project-category" style="color: #10b981;">Educational Web Portal</span>
            <h3 class="project-title">
              <a href="https://madrasada-al-qasaam-367542427068.europe-west2.run.app" target="_blank" style="color: inherit; text-decoration: none;">
                Madrasada Al-Qasaam Portal ↗
              </a>
            </h3>
            <p class="project-desc">
              Full-featured Islamic academy & student management system running on Google Cloud Run. Student enrollment, Quranic curriculum tracking, and live announcements.
            </p>
            <div class="tech-tags">
              <span class="tech-tag">React</span>
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">Tailwind</span>
              <span class="tech-tag">Cloud Run</span>
              <span class="tech-tag">Database</span>
            </div>
          </div>
          <a href="https://madrasada-al-qasaam-367542427068.europe-west2.run.app" target="_blank" class="btn btn-primary" style="background: linear-gradient(135deg, #10b981, #059669);">
            Direct Demo Link →
          </a>
        </div>

        <!-- Project 3: Smart AI Brand Campaign -->
        <div class="glass-card project-card">
          <div>
            <span class="project-category">AI Marketing Campaign</span>
            <h3 class="project-title">Smart AI Brand Campaign</h3>
            <p class="project-desc">
              Digital marketing & AI brand campaign featuring custom AI-generated graphics and landing pages. Boosted customer engagement and conversions.
            </p>
            <div class="tech-tags">
              <span class="tech-tag">Digital Marketing</span>
              <span class="tech-tag">AI Graphics</span>
              <span class="tech-tag">JavaScript</span>
            </div>
          </div>
          <a href="https://branddemo.example.com" target="_blank" class="btn btn-primary">
            Direct Demo Link →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Offered -->
  <section id="services" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Solutions</span>
        <h2 class="section-title">Services <span class="gradient-text">Offered</span></h2>
        <p class="section-desc">Tailored technical and creative services to accelerate your digital growth.</p>
      </div>

      <div class="services-grid">
        <div class="glass-card service-card">
          <h3 class="service-title">Website Development</h3>
          <p class="service-desc">Custom, responsive web applications engineered for speed, mobile compatibility, and high uptime.</p>
        </div>

        <div class="glass-card service-card">
          <h3 class="service-title">Business Website Solutions</h3>
          <p class="service-desc">Corporate web portals, booking engines, and brand platforms that turn casual visitors into loyal clients.</p>
        </div>

        <div class="glass-card service-card">
          <h3 class="service-title">Graphic Design</h3>
          <p class="service-desc">Striking visual identities, logo sets, marketing flyers, and AI-augmented creative illustrations.</p>
        </div>

        <div class="glass-card service-card">
          <h3 class="service-title">Video Editing</h3>
          <p class="service-desc">Commercial promotional cuts, viral social media reels, motion graphics, and audio mastering.</p>
        </div>

        <div class="glass-card service-card">
          <h3 class="service-title">Digital Marketing</h3>
          <p class="service-desc">Strategic campaign design, ad optimization, AI-driven content generation, and audience retargeting.</p>
        </div>

        <div class="glass-card service-card">
          <h3 class="service-title">Firebase Web Apps</h3>
          <p class="service-desc">Real-time cloud database setups, serverless backend functions, authentication, and secure rule policies.</p>
        </div>

        <div class="glass-card service-card">
          <h3 class="service-title">Data & Office Management</h3>
          <p class="service-desc">Actionable business analytics, KPI dashboards, administrative automation, and structured office ops.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Get in Touch</span>
        <h2 class="section-title">Contact <span class="gradient-text">Yaasir</span></h2>
        <p class="section-desc">Reach out directly via email or initiate a direct chat on WhatsApp.</p>
      </div>

      <div class="contact-grid">
        <div>
          <div class="glass-card" style="padding: 28px; margin-bottom: 20px;">
            <div class="contact-info-block">
              <div class="contact-label">Email Address</div>
              <a href="mailto:${PERSONAL_INFO.email}" class="contact-val" style="color: var(--cyan-glow);">${PERSONAL_INFO.email}</a>
            </div>

            <div class="contact-info-block">
              <div class="contact-label">Phone & WhatsApp</div>
              <a href="${PERSONAL_INFO.whatsAppLink}" target="_blank" class="contact-val" style="color: #7ee787;">${PERSONAL_INFO.phone}</a>
            </div>

            <div class="contact-info-block">
              <div class="contact-label">Location</div>
              <div class="contact-val">${PERSONAL_INFO.location}</div>
            </div>
          </div>

          <a href="${PERSONAL_INFO.whatsAppLink}" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 14px;">
            Open WhatsApp Directly (${PERSONAL_INFO.phone})
          </a>
        </div>

        <!-- Contact Form -->
        <div class="glass-card" style="padding: 32px;">
          <form id="standalone-contact-form" onsubmit="handleFormSubmit(event)">
            <div class="form-group">
              <label for="form-name">Your Name</label>
              <input type="text" id="form-name" class="form-control" placeholder="e.g. Mahamed Ali" required>
            </div>

            <div class="form-group">
              <label for="form-email">Your Email</label>
              <input type="email" id="form-email" class="form-control" placeholder="e.g. client@example.com" required>
            </div>

            <div class="form-group">
              <label for="form-service">Select Service</label>
              <select id="form-service" class="form-control">
                <option value="Website Development">Website Development</option>
                <option value="Business Website Solutions">Business Website Solutions</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Firebase Web Apps">Firebase Web Apps</option>
                <option value="Data & Office Management">Data & Office Management</option>
              </select>
            </div>

            <div class="form-group">
              <label for="form-msg">Your Message</label>
              <textarea id="form-msg" class="form-control" rows="4" placeholder="Briefly describe your project..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">
              Send Message (cabdinaasirmahamed88@gmail.com)
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Floating WhatsApp Button -->
  <a href="${PERSONAL_INFO.whatsAppLink}" target="_blank" class="floating-whatsapp" title="Chat on WhatsApp: ${PERSONAL_INFO.phone}">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
    </svg>
  </a>

  <!-- Footer -->
  <footer>
    <div class="container">
      <p>© ${new Date().getFullYear()} ${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}. All Rights Reserved.</p>
      <p style="margin-top: 6px; font-size: 11px;">Email: ${PERSONAL_INFO.email} | WhatsApp: ${PERSONAL_INFO.phone}</p>
    </div>
  </footer>

  <!-- Interactive JavaScript -->
  <script>
    function handleFormSubmit(e) {
      e.preventDefault();
      var name = document.getElementById('form-name').value;
      var email = document.getElementById('form-email').value;
      var service = document.getElementById('form-service').value;
      var msg = document.getElementById('form-msg').value;

      var subject = encodeURIComponent("[Portfolio Contact] " + service + " inquiry from " + name);
      var body = encodeURIComponent("Name: " + name + "\\nEmail: " + email + "\\nService: " + service + "\\n\\nMessage:\\n" + msg);
      
      window.location.href = "mailto:${PERSONAL_INFO.email}?subject=" + subject + "&body=" + body;
    }
  </script>
</body>
</html>`;
}
