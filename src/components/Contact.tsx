import { contacts, site } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-copy">
          <span className="label contact-label">● AVAILABLE NOW</span>
          <h2 className="contact-title">
            Let&apos;s build something <em>great</em> together.
          </h2>
          <p>
            Whether it&apos;s an AI product, a full-stack web app, or a collaboration — I&apos;m open and excited to
            work on your next project.
          </p>
          <div className="btn-row">
            <a
              href={`mailto:${site.email}`}
              className="btn btn--accent press"
              style={{ boxShadow: "var(--d) var(--d) 0 var(--paper)" }}
            >
              Send email ↗
            </a>
            <a
              href={site.resumeUrl}
              className="btn press"
              style={{ background: "var(--paper)", boxShadow: "var(--d) var(--d) 0 var(--pink)" }}
            >
              Download resume
            </a>
          </div>
        </div>

        <div className="contact-grid">
          {contacts.map((c) => {
            const style = { boxShadow: `var(--d) var(--d) 0 ${c.color}` };
            const body = (
              <>
                <span className="fact-k">{c.k}</span>
                <span>{c.v}</span>
              </>
            );
            return c.href ? (
              <a
                key={c.k}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="contact-card contact-card--link"
                style={style}
              >
                {body}
              </a>
            ) : (
              <div key={c.k} className="contact-card" style={style}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <strong>© 2026 {site.name}</strong>
          <span>Built with Next.js &amp; a lot of hard shadows</span>
        </div>
        <div className="footer-links">
          <a href={site.githubUrl} target="_blank" rel="noreferrer" className="btn btn--sm press">
            GitHub
          </a>
          <a href={site.linkedinUrl} target="_blank" rel="noreferrer" className="btn btn--sm press">
            LinkedIn
          </a>
          <a href={site.resumeUrl} className="btn btn--sm press">
            Resume
          </a>
          <a href="#top" className="btn btn--sm btn--dark press">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
