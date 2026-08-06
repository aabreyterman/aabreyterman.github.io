"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    index: "01",
    name: "PnL App",
    role: "Chief Marketing Officer",
    period: "2025 — present",
    tag: "Fintech · Dubai",
    description:
      "Leading brand positioning, go-to-market strategy, creative direction, partnerships and retention for a trading psychology platform built around better habits — not hype.",
    metrics: ["30K+ installs", "1.3K+ community", "6× major press quotes"],
    link: "https://pnlapp.co/",
    linkLabel: "Explore PnL",
  },
  {
    index: "02",
    name: "Kintz",
    role: "Co-founder · Marketing & Product",
    period: "2022 — present",
    tag: "Consumer tech · Amsterdam",
    description:
      "Co-founded and repositioned HeartLoop into Kintz, a healing and community product for life after a breakup. Built the brand story, launch strategy and early market presence.",
    metrics: ["PHIA semi-finalist", "ACE Incubator cohort", "0→1 brand rebuild"],
    link: "https://kintzapp.com/",
    linkLabel: "Visit Kintz",
  },
  {
    index: "03",
    name: "Unika Agency",
    role: "Partner · Head of International Strategy",
    period: "Current",
    tag: "Growth agency · Tashkent",
    description:
      "Leading international expansion for a boutique digital agency spanning strategy, paid acquisition, creative production, automation and funnel optimisation.",
    metrics: ["Global expansion", "Full-funnel strategy", "Creative × performance"],
    link: "https://unika-agency.com/",
    linkLabel: "Visit Unika",
  },
  {
    index: "04",
    name: "Searix",
    role: "Event Tech Business Manager",
    period: "2025 — 2026",
    tag: "Event technology · Singapore",
    description:
      "Managed technology-led event projects across Dubai and Singapore — from client acquisition and proposals to vendors, project plans and on-site delivery.",
    metrics: ["2 regional markets", "B2B sales", "End-to-end delivery"],
    link: "https://searix.net/",
    linkLabel: "Visit Searix",
  },
];

const experience = [
  ["2025 — now", "PnL App", "Chief Marketing Officer", "Dubai"],
  ["2022 — now", "Kintz / HeartLoop", "Co-founder, Marketing & Product", "Amsterdam"],
  ["Current", "Unika Agency", "Partner, Head of International Strategy", "Tashkent"],
  ["2025 — 2026", "Searix", "Event Tech Business Manager", "Singapore"],
  ["2022 — 2023", "x-onevision", "Business Developer", "United Kingdom"],
  ["2022 — 2023", "Forward Incubator", "Student Business Consultant", "Amsterdam"],
  ["2021 — 2022", "O2 Consulting", "Marketing, SMM & Events Specialist", "Russia"],
  ["2020 — 2021", "Soul Book", "Co-founder", "Russia"],
];

const skills = [
  ["Direction", "Go-to-market strategy", "Brand positioning", "Business development", "Strategic planning"],
  ["Delivery", "Project management", "Agile workflows", "Cross-functional leadership", "Vendor coordination"],
  ["Growth", "Performance marketing", "Community building", "Partnerships", "Content & PR"],
  ["Toolbox", "Notion · Miro · Trello", "Figma · Tilda", "Adobe Creative Suite", "MS Project"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Anastasiia Breiterman, home">AB<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="mailto:aabreyterman@gmail.com" onClick={closeMenu}>Let’s talk <Arrow /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="pulse" /> Project · Marketing · Growth</p>
          <h1>I turn ambitious ideas into <em>traction.</em></h1>
          <p className="hero-intro">I lead products, campaigns and teams from the first sketch to measurable growth — across fintech, consumer tech, agencies and international events.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">See selected work <Arrow /></a>
            <a className="button text-button" href={`${basePath}/anastasiia-breiterman-cv.pdf`} target="_blank">Download CV ↓</a>
          </div>
        </div>
        <div className="portrait-wrap" data-reveal>
          <div className="portrait-label"><span>Based across</span><strong>Europe · Middle East · Asia</strong></div>
          <img src={`${basePath}/anastasiia-portrait.jpeg`} alt="Anastasiia Breiterman" className="portrait" />
          <span className="portrait-number">05+</span>
          <span className="portrait-caption">years building<br />brands & products</span>
        </div>
        <div className="scroll-note">Scroll to explore <span>↓</span></div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div><strong>30K+</strong><span>Product installs</span></div>
        <div><strong>8</strong><span>Platforms managed</span></div>
        <div><strong>4</strong><span>Markets delivered in</span></div>
        <div><strong>C2</strong><span>English proficiency</span></div>
      </section>

      <section className="section projects" id="work">
        <div className="section-heading" data-reveal>
          <p className="kicker">Selected work</p>
          <h2>Strategy is only useful when it <em>moves.</em></h2>
          <p>Four chapters where positioning, people and delivery came together.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name} data-reveal>
              <div className="project-top">
                <span className="project-index">/{project.index}</span>
                <span className="project-tag">{project.tag}</span>
              </div>
              <h3>{project.name}</h3>
              <div className="project-role"><span>{project.role}</span><span>{project.period}</span></div>
              <p>{project.description}</p>
              <div className="metric-row">
                {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a>
            </article>
          ))}
        </div>
        <p className="source-note" data-reveal>Impact figures combine public product data and internal portfolio metrics. Press recognition refers to PnL founder commentary quoted across The Guardian and Business Insider.</p>
      </section>

      <section className="statement" data-reveal>
        <p>“The best marketing doesn’t decorate the product.</p>
        <p>It clarifies <em>why it matters</em> — then gets it moving.”</p>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading compact" data-reveal>
          <p className="kicker">Experience</p>
          <h2>Built across borders.</h2>
        </div>
        <div className="timeline" data-reveal>
          {experience.map(([period, company, role, place]) => (
            <div className="timeline-row" key={company}>
              <span className="time-period">{period}</span>
              <strong>{company}</strong>
              <span>{role}</span>
              <span className="place">{place}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section skills" id="about">
        <div className="section-heading compact" data-reveal>
          <p className="kicker">How I work</p>
          <h2>Commercial thinking,<br /><em>creative execution.</em></h2>
        </div>
        <div className="skills-grid">
          {skills.map(([title, ...items], i) => (
            <article key={title} data-reveal style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials">
        <div className="education" data-reveal>
          <p className="kicker">Education</p>
          <h2>Academic rigour,<br />entrepreneurial instinct.</h2>
          <div className="education-item">
            <span>2022 — 2023</span>
            <h3>University of Amsterdam × Vrije Universiteit</h3>
            <p>MSc Entrepreneurship · Amsterdam Merit Scholarship</p>
            <strong>8.83 / 10 · cum laude</strong>
          </div>
          <div className="education-item">
            <span>2018 — 2022</span>
            <h3>Higher School of Economics</h3>
            <p>BSc International Business & Management</p>
            <strong>9.52 / 10 · summa cum laude</strong>
          </div>
        </div>
        <div className="awards" data-reveal>
          <p className="kicker">Selected recognition</p>
          <ul>
            <li><span>2023</span><strong>Philips Innovation Award semi-finalist</strong><small>HeartLoop</small></li>
            <li><span>2023</span><strong>ACE Incubator cohort</strong><small>HeartLoop</small></li>
            <li><span>2021</span><strong>Startup Ring winner</strong><small>€1,500 grant</small></li>
            <li><span>2020</span><strong>Oliver Wyman Impact semi-finalist</strong><small>Case championship</small></li>
            <li><span>2020</span><strong>Hult Prize semi-finalist</strong><small>London</small></li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contact">
        <div data-reveal>
          <p className="kicker">Have a project in mind?</p>
          <h2>Let’s make it <em>move.</em></h2>
          <a className="contact-email" href="mailto:aabreyterman@gmail.com">aabreyterman@gmail.com <Arrow /></a>
        </div>
        <div className="contact-links" data-reveal>
          <a href="https://www.linkedin.com/in/anastasiia-breiterman-0229851b6/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href={`${basePath}/anastasiia-breiterman-cv.pdf`} target="_blank">CV / Résumé <Arrow /></a>
        </div>
      </section>

      <footer><span>© {new Date().getFullYear()} Anastasiia Breiterman</span><span>Strategy · Structure · Momentum</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
