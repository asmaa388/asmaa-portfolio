import { profile, experience, education, skills, projects } from "./data";
import Projects from "./Projects";
import Today from "./Today";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <a href="#top" className="logo">AE<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">Let’s talk</a>
        </div>
      </nav>

      <header id="top" className="hero wrap">
        <div className="hero-photo panel">
          <div className="photo-glow" />
          <img src="/asmaa.png" alt={profile.name} />
        </div>

        <div className="hero-side">
          <div className="hero-bar panel">
            <span className="pill"><span className="dot" /> Available for freelance work</span>
            <span className="pill pill-wide"><ClockIcon /> <Today /></span>
            <a href="#contact" className="pill pill-link">Contact Me <span>↗</span></a>
          </div>

          <div className="hero-cards">
            <div className="hero-intro panel">
              <p className="kicker">A Front-End Developer</p>
              <h1>{profile.name} <span className="wave">👋</span></h1>
              <p className="lead">
                {profile.sub} with 2+ years of experience. I turn Figma designs into pixel-perfect,
                responsive, SEO-ready websites and WooCommerce stores for brands across Egypt and the Gulf.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">View my work</a>
                <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-ghost">WhatsApp</a>
              </div>
            </div>

            <div className="hero-loc panel">
              <div className="loc-chips">
                <span className="pill">Mansoura</span>
                <span className="pill"><PinIcon /> Egypt</span>
              </div>
              <div className="orb"><span /></div>
            </div>
          </div>
        </div>
      </header>

      <section id="work" className="wrap section">
        <div className="section-head">
          <span className="num">01</span>
          <h2>Selected work</h2>
          <p>Live websites built for agencies, brands and stores across Egypt and the Gulf. Hover a card to scroll through the site.</p>
        </div>
        <Projects projects={projects} />
      </section>

      <section className="wrap section about">
        <div className="section-head">
          <span className="num">02</span>
          <h2>About</h2>
        </div>
        <p className="about-text">{profile.about}</p>
      </section>

      <section id="experience" className="wrap section">
        <div className="section-head">
          <span className="num">03</span>
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <article key={e.company} className="job">
              <div className="job-meta">
                <span className="period">{e.period}</span>
                <span className="tag">{e.type}</span>
              </div>
              <div>
                <h3>{e.company}</h3>
                <p className="job-role">{e.role}</p>
                {e.points.length > 0 && (
                  <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="wrap section">
        <div className="section-head">
          <span className="num">04</span>
          <h2>Skills &amp; tools</h2>
        </div>
        <div className="skills">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className="skill-group panel">
              <h3>{group}</h3>
              <div className="chips">
                {list.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <span className="num">05</span>
          <h2>Education</h2>
        </div>
        <div className="edu">
          {education.map((e) => (
            <div key={e.title} className="edu-item">
              <span className="period">{e.period}</span>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="wrap contact">
        <div className="contact-inner panel">
          <div className="orb orb-contact"><span /></div>
          <p className="kicker">Have a project in mind?</p>
          <a href={`mailto:${profile.email}`} className="contact-big">Let’s build it together <span>↗</span></a>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="pill">{profile.email}</a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="pill">WhatsApp</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="pill">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="pill">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ico">
      <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ico">
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
