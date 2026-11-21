import Image from "next/image";
import { marquee, site } from "@/data/portfolio";
import portrait from "../../public/lovish.jpg";

const starColors = ["var(--accent)", "var(--pink)", "var(--blue)"];

export function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <div className="hero-badges">
          <span className="chip badge-live">
            <span aria-hidden="true" className="dot" />
            Available for freelance
          </span>
          <span className="chip">{site.location}</span>
        </div>

        <h1 className="hero-title">
          Hi, I&apos;m <span className="hero-name">{site.name}</span>
          <br />I build intelligent web products.
        </h1>

        <p className="hero-lead">
          <strong>{site.role}.</strong> CS undergrad at MMU (2026) crafting AI-powered web apps, full-stack products, and
          clean developer experiences.
        </p>

        <div className="btn-row">
          <a href="#work" className="btn btn--accent press">
            View my work
          </a>
          <a href="#contact" className="btn press">
            Let&apos;s talk
          </a>
        </div>
      </div>

      <div className="hero-art">
        <div className="portrait">
          <Image
            src={portrait}
            alt="Lovish Aul standing on a balcony with arms crossed"
            className="portrait-img"
            priority
            placeholder="blur"
            sizes="(max-width: 640px) 100vw, 400px"
          />
          <div className="sticker">AI ENGINEER</div>
          <div className="seal">
            <strong>7.81</strong>
            <span>CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  // Rendered twice so the CSS animation can loop seamlessly.
  const group = (hidden: boolean) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {marquee.map((word, i) => (
        <span key={word} style={{ display: "contents" }}>
          <span>{word}</span>
          <span style={{ color: starColors[i % starColors.length] }}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
