"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    index: "01",
    name: "PnL App",
    role: "Chief Marketing Officer",
    period: "Apr 2025 — present",
    tag: "Fintech · Dubai",
    description:
      "Led positioning, launch planning, product education and growth for a consumer fintech app. Worked in the feedback loop between users, product and marketing as the app reached 40K+ installs in four months.",
    metrics: ["40K+ installs", "4 months to 40K+", "Product-led growth"],
    link: "https://pnlapp.co/",
    linkLabel: "Explore PnL",
  },
  {
    index: "02",
    name: "Kintz",
    role: "Co-founder · Marketing & Product",
    period: "Dec 2022 — present",
    tag: "Consumer tech · Amsterdam",
    description:
      "Co-built a software venture from 0 to 1: defining the proposition, shaping early product direction, coordinating launch work and translating a complex behavioural concept into something users could understand.",
    metrics: ["0→1 product build", "PHIA semi-finalist", "ACE Incubator cohort"],
    link: "https://kintzapp.com/",
    linkLabel: "Visit Kintz",
  },
  {
    index: "03",
    name: "Unika Agency",
    role: "Partner · Head of International Strategy",
    period: "Sep 2025 — Feb 2026",
    tag: "Growth agency · Tashkent",
    description:
      "Led international strategy for a digital agency, connecting positioning, paid acquisition, creative production, automation and funnel optimisation to clear commercial outcomes.",
    metrics: ["Growth strategy", "Automation", "Creative × performance"],
    link: "https://unika-agency.com/",
    linkLabel: "Visit Unika",
  },
  {
    index: "04",
    name: "Searix",
    role: "Event Tech Business Manager",
    period: "Sep 2025 — May 2026",
    tag: "Event technology · Singapore",
    description:
      "Delivered technology-led experiences across Dubai and Singapore, moving projects from client brief and proposal through planning, vendor coordination and on-site delivery. Work often combined interactive software, AI-enabled experiences and physical event technology.",
    metrics: ["Cross-border delivery", "Technical projects", "Client & vendor leadership"],
    link: "https://searix.net/",
    linkLabel: "Visit Searix",
  },
];

const experience = [
  ["Apr 2025 — now", "PnL App", "Chief Marketing Officer", "Dubai"],
  ["Dec 2022 — now", "Kintz / HeartLoop", "Co-founder, Marketing & Product", "Amsterdam"],
  ["Sep 2025 — May 2026", "Searix", "Event Tech Business Manager", "Singapore"],
  ["Sep 2025 — Feb 2026", "Unika Agency", "Partner, Head of International Strategy", "Tashkent"],
  ["2022 — 2023", "x-one.vision", "Business Developer", "United Kingdom"],
  ["2022 — 2023", "Forward Incubator", "Student Business Consultant", "Amsterdam"],
  ["2021 — 2022", "O2 Consulting", "Marketing, SMM & Events Specialist", "Russia"],
  ["2020 — 2021", "Soul Book", "Co-founder", "Russia"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const contactTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const closeContact = () => {
    setContactOpen(false);
    window.setTimeout(() => contactTriggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!contactOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeContact();
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [contactOpen]);

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
          <a href="#certification" onClick={closeMenu}>PMP®</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <button
            className="nav-cta"
            ref={contactTriggerRef}
            onClick={() => {
              closeMenu();
              setContactOpen(true);
            }}
          >
            Let’s talk <Arrow />
          </button>
        </nav>
      </header>

      {contactOpen && (
        <div
          className="contact-modal-backdrop"
          onMouseDown={(event) => event.target === event.currentTarget && closeContact()}
        >
          <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
            <div className="contact-modal-top">
              <p className="kicker">Start a conversation</p>
              <button ref={closeButtonRef} className="contact-modal-close" onClick={closeContact} aria-label="Close contact options">
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <h2 id="contact-modal-title">How would you like to <em>connect?</em></h2>
            <div className="contact-options">
              <a href="mailto:aabreyterman@gmail.com">
                <span className="contact-option-index">01</span>
                <span><strong>Send an email</strong><small>aabreyterman@gmail.com</small></span>
                <Arrow />
              </a>
              <a href="https://www.linkedin.com/in/anastasiiabreiterman/" target="_blank" rel="noreferrer">
                <span className="contact-option-index">02</span>
                <span><strong>Connect on LinkedIn</strong><small>View professional profile</small></span>
                <Arrow />
              </a>
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0se6dkhYlZIEqnC5nYSaKH25NP8sJgNB_7VYidYc9FMWlo5L4JnTAMJ3yOIXcxO0mO8LTTTjsF" target="_blank" rel="noreferrer">
                <span className="contact-option-index">03</span>
                <span><strong>Book a call</strong><small>Choose a time that works for you</small></span>
                <Arrow />
              </a>
            </div>
          </section>
        </div>
      )}

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <div className="hero-fileline"><span>AB / 2026</span><span>Open to global roles</span></div>
          <p className="eyebrow"><span className="pulse" /> Project / Product Manager · Business Development</p>
          <h1>Complex work,<br /><em>made usable.</em></h1>
          <p className="hero-intro">I’m a PMP®-certified project and product manager with 5+ years of international experience. My work sits where product, delivery, marketing and business development meet: getting the plan clear, the people aligned and the launch out into the world.</p>
          <ul className="hero-competencies" aria-label="Core project management strengths">
            <li>Project & product delivery</li>
            <li>Stakeholder alignment</li>
            <li>Launch & growth execution</li>
          </ul>
          <div className="hero-actions">
            <a className="button primary" href="#work">See selected work <Arrow /></a>
            <a className="button text-button" href={`${basePath}/anastasiia-breiterman-cv.pdf`} target="_blank">Download CV ↓</a>
          </div>
          <a className="hero-pmp" href="https://www.credly.com/badges/bf106bb5-dbd1-460e-82c0-2af6b0ce27b0/public_url" target="_blank" rel="noreferrer" aria-label="Verify Anastasiia Breiterman's PMP certification on Credly">
            <img src={`${basePath}/pmp-badge.png`} alt="Project Management Professional PMP badge" />
            <span><strong>Project Management Professional (PMP)®</strong><small>Verified by PMI × Credly</small></span>
            <Arrow />
          </a>
        </div>
        <div className="portrait-wrap" data-reveal>
          <div className="portrait-label"><span>Built across</span><strong>Europe · Middle East · Asia</strong></div>
          <img src={`${basePath}/anastasiia-portrait-professional-v3.png`} alt="Anastasiia Breiterman" className="portrait" />
          <span className="portrait-number">05+</span>
          <span className="portrait-caption">years moving<br />products & projects</span>
        </div>
        <div className="scroll-note">Scroll to explore <span>↓</span></div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div><strong>40K+</strong><span>Installs in 4 months</span></div>
        <div><strong>02</strong><span>Digital ventures launched</span></div>
        <div className="proof-pmp"><strong>PMP®</strong><span>Certified professional</span></div>
        <div><strong>05+</strong><span>Years in project & product work</span></div>
      </section>

      <section className="section projects" id="work">
        <div className="section-heading" data-reveal>
          <p className="kicker">Selected impact</p>
          <h2>Strategy is only useful when it <em>moves.</em></h2>
          <p>Four examples of turning ambiguity into launches, stronger products and cross-border delivery.</p>
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
        <p className="source-note" data-reveal>Impact figures combine public product data and internal portfolio metrics.</p>
      </section>

      <section className="statement" data-reveal>
        <p>“The best marketing doesn’t decorate the product.</p>
        <p>It clarifies <em>why it matters</em> — then gets it moving.”</p>
      </section>

      <section className="operator-board" id="experience" aria-label="Experience, expertise and education">
        <div className="board-bar">
          <span className="board-mark">AB.</span>
          <span>Operating profile</span>
          <span>Project · Product · Growth</span>
        </div>
        <div className="board-grid">
          <article className="board-panel experience-panel" data-reveal>
            <div className="board-heading"><p>01 / Experience</p><span>↓</span></div>
            <h2>Work that has to <em>ship.</em></h2>
            <div className="experience-cards">
              {experience.map(([period, company, role, place], i) => (
                <div className={i < 2 ? "experience-card featured" : "experience-card"} key={company}>
                  <div><span className="period-pill">{period}</span><span className="place-pill">{place}</span></div>
                  <strong>{company}</strong>
                  <p>{role}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="board-panel expertise-panel" id="about" data-reveal>
            <div className="board-heading"><p>02 / Expertise</p><span>↓</span></div>
            <h2>How I make work <em>move.</em></h2>
            <div className="expertise-list">
              <div><strong>Delivery</strong><p>Agile delivery, sprint planning, roadmaps, launch execution, risk and dependency management.</p></div>
              <div><strong>People</strong><p>Client and vendor alignment, cross-functional work, clear communication and practical decisions.</p></div>
              <div><strong>Growth</strong><p>Positioning, go-to-market, product education, user feedback, partnerships and community insight.</p></div>
            </div>
            <div className="tool-heading"><span>Tools I use every week</span><Arrow /></div>
            <div className="tool-cloud" aria-label="Tools">
              {["ChatGPT", "Claude", "Notion", "Google Workspace", "Make", "Zapier", "Airtable", "Asana", "Slack", "Loom", "Figma", "Miro", "Lucidchart", "Trello", "MS Project", "Discord", "Tilda", "Adobe"].map((tool, i) => (
                <span className={i === 0 || i === 4 || i === 10 ? "is-accent" : ""} key={tool}>{tool}</span>
              ))}
            </div>
          </article>

          <article className="board-panel education-panel" data-reveal>
            <div className="board-heading"><p>03 / Education</p><span>↓</span></div>
            <h2>Academic base,<br /><em>entrepreneurial edge.</em></h2>
            <div className="education-cards">
              <div className="education-card">
                <span>2022 — 2023</span>
                <h3>University of Amsterdam × Vrije Universiteit</h3>
                <p>MSc Entrepreneurship · Amsterdam Merit Scholarship</p>
                <strong>8.83 / 10 · cum laude</strong>
              </div>
              <div className="education-card">
                <span>2018 — 2022</span>
                <h3>Higher School of Economics</h3>
                <p>BSc International Business & Management</p>
                <strong>9.52 / 10 · summa cum laude</strong>
              </div>
              <div className="education-note">
                <span>International learning</span>
                <p>Exchange programmes at Uppsala University and the University of Hertfordshire.</p>
              </div>
            </div>
            <a className="board-cv-link" href={`${basePath}/anastasiia-breiterman-cv.pdf`} target="_blank">View full CV <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="section pmp-feature" id="certification">
        <div className="pmp-badge-panel" data-reveal>
          <p className="kicker">Verified by PMI × Credly</p>
          <div className="pmp-badge-mark">
            <img src={`${basePath}/pmp-badge.png`} alt="Project Management Professional PMP badge" />
            <strong>PMP<sup>®</sup></strong>
            <span>Project Management Professional</span>
          </div>
          <a className="pmp-verify-link" href="https://www.credly.com/badges/bf106bb5-dbd1-460e-82c0-2af6b0ce27b0/public_url" target="_blank" rel="noreferrer">
            Verify on Credly <Arrow />
          </a>
        </div>

        <div className="pmp-feature-copy" data-reveal>
          <p className="kicker">Professional certification</p>
          <h2>Project leadership,<br /><em>verified.</em></h2>
          <p className="pmp-intro">Certified as a Project Management Professional (PMP)® by the Project Management Institute, with Above Target performance across all three exam domains.</p>

          <div className="pmp-scores" aria-label="PMP exam performance by domain">
            <div><span>People</span><strong>AT</strong><small>Above Target</small></div>
            <div><span>Process</span><strong>AT</strong><small>Above Target</small></div>
            <div><span>Business environment</span><strong>AT</strong><small>Above Target</small></div>
          </div>

          <dl className="pmp-details">
            <div><dt>Granted</dt><dd>14 August 2026</dd></div>
            <div><dt>Valid through</dt><dd>14 August 2029</dd></div>
            <div><dt>Certification no.</dt><dd>4500992</dd></div>
          </dl>

          <a className="button primary pmp-certificate-link" href={`${basePath}/anastasiia-breiterman-pmp-certificate.pdf`} target="_blank" rel="noreferrer">
            View certificate <Arrow />
          </a>
        </div>
      </section>

      <section className="recognition-section">
        <div data-reveal>
          <p className="kicker">Selected recognition</p>
          <h2>Good work<br />has a <em>trail.</em></h2>
        </div>
        <div className="recognition-list" data-reveal>
          <div><span>2026</span><strong>Project Management Professional (PMP)®</strong><small>PMI · Above Target across all domains</small></div>
          <div><span>2023–24</span><strong>ACE Incubator selected cohort</strong><small>Kintz / HeartLoop</small></div>
          <div><span>2023</span><strong>Philips Innovation Award semi-finalist</strong><small>Kintz / HeartLoop</small></div>
          <div><span>2021</span><strong>Published research</strong><small>333-participant study of digital work</small></div>
          <div><span>2020</span><strong>HSE Startup Ring winner</strong><small>€1,500 grant</small></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div data-reveal>
          <p className="kicker">Have a project in mind?</p>
          <h2>Let’s make it <em>move.</em></h2>
          <a className="contact-email" href="mailto:aabreyterman@gmail.com">aabreyterman@gmail.com <Arrow /></a>
        </div>
        <div className="contact-links" data-reveal>
          <a href="https://www.linkedin.com/in/anastasiiabreiterman/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href={`${basePath}/anastasiia-breiterman-cv.pdf`} target="_blank">CV / Résumé <Arrow /></a>
        </div>
      </section>

      <footer><span>© {new Date().getFullYear()} Anastasiia Breiterman, PMP®</span><span>Strategy · Structure · Momentum</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
