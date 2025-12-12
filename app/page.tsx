// app/page.tsx

export default function Home() {
  return (
    <section className="hero-fullpage">
      <div className="hero-inner">
        <p className="hero-kicker">
          Business Analyst · Data & AI Builder · Phoenix, AZ
        </p>

        <h1 className="hero-title hero-title-center">
          I turn chaotic data into confident decisions
          <br />
          and build AI that actually does real work.
        </h1>

        <p className="hero-subtitle hero-subtitle-center">
          Hi, I&apos;m <span className="highlight">Chahat Balani</span> — Business Analyst,
          AI tinkerer, dashboard architect, and the person who can&apos;t leave a clunky
          process alone until it&apos;s clean, automated, and insightful.
        </p>

        <div className="hero-buttons hero-buttons-center">
          <a href="/projects" className="btn btn-primary">
            View My Projects
          </a>
          <a href="/experience" className="btn btn-outline">
            Experience
          </a>
          <a href="/contact" className="btn btn-ghost">
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
