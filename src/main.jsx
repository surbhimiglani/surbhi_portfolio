import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './resume.css'
const skills = ['JavaScript', 'Node.js', 'React', 'React Native', 'TypeScript', 'C#', 'SQL', 'Snowflake', 'DynamoDB', 'AWS', 'Azure', 'CI/CD', 'REST APIs', 'Microservices', 'Distributed systems', 'Queues', 'Security', 'System Design', 'Websites']

const experience = [
  ['01', 'Technical leadership', 'Architecture · Delivery · Mentorship', 'Lead product teams, design scalable architectures, guide code reviews, and establish strong development practices across complex technical initiatives.'],
  ['02', 'Backend & distributed systems', 'APIs · Microservices · Queues', 'Build resilient backend services using modern frameworks, distributed queues, and real-time communication — engineered to handle high-volume workloads reliably at scale.'],
  ['03', 'Cloud & data engineering', 'Cloud Infrastructure · ETL · Analytics', 'Design secure, scalable cloud infrastructure and identity management, and build data pipelines that transform raw data into fast, reliable reporting and analytics.'],
  ['04', 'Product & application development', 'Websites · Web · Mobile', 'Design and deliver full-stack websites, web applications, mobile apps, responsive dashboards, workflow tools, and internal utilities with a focus on performance and reliability.'],
]

function Portrait() {
  const [hasPhoto, setHasPhoto] = useState(true)

  return hasPhoto ? (
    <img
      className="portrait"
      src="./surbhi_pic.jpeg"
      alt="Portrait of Surbhi Miglani"
      onError={() => setHasPhoto(false)}
    />
  ) : (
    <div className="portrait portrait-fallback" aria-label="Surbhi Miglani initials">
      SM
    </div>
  )
}

function App() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top">SM<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer / 7 years experience</p>
          <h1>Systems built<br /><em>to scale.</em></h1>
          <p className="intro">I’m Surbhi Miglani, a software engineer and technical lead building backend platforms, data systems, and products used by real people and businesses.</p>
          <a className="circle-link" href="#about" aria-label="Scroll to about section">↓</a>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame"><Portrait /></div>
          <p className="portrait-note">Software engineer<br />Technical lead</p>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="section-label"><span>01</span> About me</div>
        <div className="about-content">
          <h2>Reliable systems,<br /><span>thoughtfully built.</span></h2>
          <div>
            <p className="lead">I lead and build across backend services, websites, mobile apps, cloud infrastructure, data pipelines, and financial applications. My work combines architecture, hands-on development, and a strong focus on delivery.</p>
            <div className="skill-list">
              {skills.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="section-label"><span>02</span> Experience overview</div>
        {experience.map(([number, company, role, description]) => <div className="experience-row" key={company}>
          <div><span className="project-number">{number}</span><h3>{company}</h3><small>{role}</small></div>
          <p>{description}</p>
        </div>)}
      </section>

      <section className="details shell">
        <div className="section-label"><span>03</span> Education & recognition</div>
        <div className="details-grid">
          <div><span className="project-number">Education</span><h3>Georgia Institute of Technology</h3><p>MS in Computer Science · Online · 2024–2026 · Present</p><h3>BVCOE, GGSIPU</h3><p>B.Tech (Information Technology) · 82%</p></div>
          <div><span className="project-number">Awards</span><h3>Star Performer</h3><p>2023</p><h3>Upcoming Shining Star</h3><p>2020</p></div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="eyebrow">Open to meaningful challenges</p>
        <h2>Let’s build<br /><em>what’s next.</em></h2>
        <a className="contact-link" href="mailto:surbhimiglani2811@gmail.com">tech.queries.surbhi@gmail.com <span>↗</span></a>
      </section>

      <footer className="footer shell"><span>© 2026 Surbhi Miglani</span></footer>
    </main>
  )
}

createRoot(document.getElementById('app')).render(<StrictMode><App /></StrictMode>)