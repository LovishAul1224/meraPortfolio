import Image from "next/image";
import { facts, site, stats, traits } from "@/data/portfolio";
import portrait from "../../public/lovish.jpg";

export function About() {
  return (
    <section id="about" className="container about">
      <div className="card about-main">
        <span className="label">01 — ABOUT ME</span>
        <h2 className="about-title">Hi, I&apos;m Lovish — AI Engineer &amp; Builder.</h2>
        <p>
          I&apos;m a Computer Science undergrad at Maharishi Markandeshwar University, graduating in 2026. My passion
          sits at the crossroads of artificial intelligence and full-stack web development — building products that are
          both smart and beautifully engineered.
        </p>
        <p>
          I&apos;ve earned certifications in Supervised Machine Learning from Stanford/DeepLearning.AI and Generative AI
          from IIT Roorkee&apos;s Cognizance &apos;25. I&apos;m actively seeking freelance projects and open-source
          collaborations.
        </p>
        <div className="chip-row">
          {traits.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>

      <aside className="card about-side">
        <div className="profile">
          <Image src={portrait} alt="" className="avatar" width={64} height={64} />
          <div className="fact">
            <span className="profile-name">{site.name}</span>
            <span className="profile-role">AI Engineer · CS @ MMU</span>
          </div>
        </div>
        {facts.map((f) => (
          <div key={f.k} className="fact">
            <span className="fact-k">{f.k}</span>
            <span className="fact-v">{f.v}</span>
          </div>
        ))}
      </aside>
    </section>
  );
}

export function Stats() {
  return (
    <section aria-label="Quick stats" className="container stats">
      {stats.map((s) => (
        <div key={s.label} className="card stat" style={{ background: s.color }}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  );
}
