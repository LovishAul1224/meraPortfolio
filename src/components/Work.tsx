import { certs, jobs, projects, site, skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="container section skills">
      <div className="section-head">
        <span className="label" style={{ background: "var(--mint)" }}>
          02 — TECH STACK
        </span>
        <h2 className="section-title">What I build with</h2>
        <p className="section-sub">Tools and technologies I use to build fast, scalable, and intelligent products.</p>
      </div>
      <div className="skill-grid">
        {skillGroups.map((g) => (
          <div key={g.title} className="card skill-card">
            <div className="skill-head">
              <span aria-hidden="true" className="skill-icon" style={{ background: g.color }}>
                {g.icon}
              </span>
              <h3>{g.title}</h3>
            </div>
            <div className="chip-row">
              {g.items.map((s) => (
                <span key={s} className="skill-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="work" className="container section work">
      <div className="work-head">
        <div className="section-head">
          <span className="label" style={{ background: "var(--pink)" }}>
            03 — SELECTED WORK
          </span>
          <h2 className="section-title">Projects I&apos;ve built</h2>
        </div>
        <a href={site.githubUrl} target="_blank" rel="noreferrer" className="btn btn--sm press">
          All on GitHub ↗
        </a>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.num} className="card project">
            <div className="project-cover" style={{ background: p.color }}>
              <div className="project-meta">
                <span className="project-num">{p.num}</span>
                <span className="project-status">
                  <i aria-hidden="true" style={{ background: p.dot }} />
                  {p.status}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
            </div>
            <div className="project-body">
              <span className="kicker">{p.kicker}</span>
              <p className="project-desc">{p.desc}</p>
              <span className="highlight">★ {p.highlight}</span>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn--sm btn--accent press">
                    Live ↗
                  </a>
                )}
                {p.codeUrl && (
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn btn--sm press${p.liveUrl ? "" : " btn--accent"}`}
                  >
                    Code ↗
                  </a>
                )}
                {p.note && <span className="btn btn--sm btn--dark project-note">{p.note}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="container section experience">
      <div className="section-head">
        <span className="label" style={{ background: "var(--accent)" }}>
          04 — MY JOURNEY
        </span>
        <h2 className="section-title">Experience &amp; timeline</h2>
      </div>
      <div className="jobs">
        {jobs.map((j) => (
          <div key={j.org} className="card job">
            <div className="job-meta">
              <span className="job-type" style={{ background: j.color }}>
                {j.type}
              </span>
              <span className="job-date">{j.date}</span>
            </div>
            <div className="job-body">
              <h3>{j.org}</h3>
              <span className="job-role">{j.role}</span>
              <ul>
                {j.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Credentials() {
  return (
    <section id="credentials" className="container section credentials">
      <div className="section-head">
        <span className="label" style={{ background: "var(--blue)" }}>
          05 — HONORS &amp; CERTS
        </span>
        <h2 className="section-title">Credentials &amp; awards</h2>
      </div>
      <div className="cert-grid">
        {certs.map((c) => (
          <div key={c.title} className="card cert" style={{ background: c.color }}>
            <div className="cert-top">
              <span className="cert-tag">{c.tag}</span>
              <span className="cert-ok">✓ Certified</span>
            </div>
            <h3>{c.title}</h3>
            <span className="cert-by">{c.by}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
