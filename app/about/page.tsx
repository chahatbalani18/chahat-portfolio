// app/about/page.tsx
// ── CHANGES FROM YOUR ORIGINAL ──────────────────────────────────────────────
// 1. Fixed typo: "focusing oncd .." → "focusing on"
// 2. Added new "Applied AI Work" article card (inserted after "How I Got Here")
//    Uses your existing classes: tl-item, tl-dot, tl-body, tl-title, tl-text
//    Includes GitHub links styled with your existing #a5b4fc link colour
// 3. Added "AI & ML tools" meta-block in the right sticky card
// Everything else is byte-for-byte identical to your original.
// ────────────────────────────────────────────────────────────────────────────
 
export default function AboutPage() {
  return (
    <section className="inner-page">
      <div className="inner-content starry">
        <header className="about-page-header" data-reveal>
          <p className="hero-kicker">About</p>
          <h1>Chahat Balani in one scroll</h1>
          <p>
            Business Analyst and Applied AI builder who loves turning vague, messy
            problems into dashboards, models, and tools that teams actually use.
          </p>
        </header>
 
        <div className="about-grid">
          {/* LEFT COLUMN */}
          <div className="about-column">
 
            {/* ── What I Do — UNCHANGED ── */}
            <article className="about-text-card" data-reveal>
              <div className="card-title-row">
                <h3>What I Do</h3>
                <span className="chip">Now</span>
              </div>
              <p>
                I&apos;m <strong>Chahat Balani</strong>, a Business Analyst at U-Haul in
                Phoenix, working across SQL, Databricks, Power BI, and APIs to keep
                thousands of self-storage affiliates running smoothly.
              </p>
              <p>
                My work lives at the intersection of{" "}
                <strong>business, analytics, and applied AI</strong>. I&apos;m just as
                comfortable debugging a SQL pipeline as I am shaping a dashboard for
                operations or prototyping an AI-powered workflow.
              </p>
              <div className="about-highlight">
                <div className="about-highlight-title">Signature move</div>
                <div className="about-highlight-text">
                  Take messy data → ask the right questions → build a clean model +
                  dashboard/AI tool → ship it so teams stop fighting their data.
                </div>
              </div>
              <p style={{ marginTop: "0.9rem" }}>
                I love problems where the data is messy, the process is clunky, and
                someone says, &ldquo;We don&apos;t really have visibility on this yet.&rdquo;
              </p>
            </article>
 
            {/* ── How I Got Here — CHANGE 1: fixed typo only ── */}
            <article className="about-text-card" data-reveal>
              <div className="card-title-row">
                <h3>How I Got Here</h3>
                <span className="chip chip-soft">Story</span>
              </div>
              <p>
                I studied Information Technology and later completed my{" "}
                <strong>MS in Business Analytics &amp; Project Management at UConn</strong>.
                {/* CHANGE 1 ↓ was: "focusing oncd .. forecasting" */}
                There I worked on projects with companies like PepsiCo, focusing on
                forecasting, optimization, and building useful analytics tools.
              </p>
              <div className="about-timeline">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-title">Build foundations</div>
                    <div className="tl-text">SQL + modeling + analytics storytelling</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-title">Scale to production</div>
                    <div className="tl-text">Dashboards, pipelines, automation, APIs</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-title">Add Applied AI</div>
                    <div className="tl-text">LLM workflows + decision support tools</div>
                  </div>
                </div>
              </div>
              <p style={{ marginTop: "0.9rem" }}>
                Along the way, I built portfolio optimization models, crypto prediction
                experiments, traffic optimization ideas like Greenwave, and plenty of
                dashboards for real stakeholders.
              </p>
              <p>
                Now I&apos;m focused on roles where I can bridge{" "}
                <strong>Business/Data Analyst</strong> work with{" "}
                <strong>AI Product / Applied AI</strong> — owning the journey from
                messy Excel files to production-ready insights and tools.
              </p>
            </article>
 
            {/* ── CHANGE 2: NEW card — Applied AI Work ── */}
            <article className="about-text-card" data-reveal>
              <div className="card-title-row">
                <h3>Applied AI Work</h3>
                <span className="chip chip-glow">AI</span>
              </div>
              <p>
                Beyond analytics, I actively build AI-powered tools. Here&apos;s what
                I&apos;ve shipped:
              </p>
              <div className="about-timeline">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-title">🧠 AI SQL Analyst</div>
                    <div className="tl-text">
                      Natural language → SQL → plain-English results. Bridges the gap
                      between business questions and database analysis.{" "}
                      <a
                        href="https://github.com/chahatbalani18/ai-sql-analyst-"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#a5b4fc" }}
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-title">📄 RAG Document Assistant</div>
                    <div className="tl-text">
                      Upload docs, ask grounded questions. FAISS vector search +
                      OpenAI embeddings with strict no-hallucination rules.{" "}
                      <a
                        href="https://github.com/chahatbalani18/RAG-doc-assistant"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#a5b4fc" }}
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-title">💳 Real-Time Fraud Detection</div>
                    <div className="tl-text">
                      Streaming anomaly detection pipeline with Isolation Forest and
                      a live Streamlit dashboard for monitoring.{" "}
                      <a
                        href="https://github.com/chahatbalani18/realtime-fraud-anomaly-detection"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#a5b4fc" }}
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div className="tl-body">
                    <div className="tl-title">🚦 Greenwave (Ongoing)</div>
                    <div className="tl-text">
                      AI-optimized traffic signal timing. Early simulations show
                      18–25% reduction in peak-hour idle time.
                    </div>
                  </div>
                </div>
              </div>
            </article>
 
            {/* ── Outside Work — UNCHANGED ── */}
            <article className="about-text-card" data-reveal>
              <div className="card-title-row">
                <h3>Outside Work</h3>
                <span className="chip chip-soft">Fun</span>
              </div>
              <ul className="about-list">
                <li>National-level basketball background — I love team dynamics.</li>
                <li>
                  Obsessed with sunsets, solo trips, and finding dark spots for
                  stargazing.
                </li>
                <li>
                  Powered by very strong coffee, playlists, and the urge to automate
                  anything repetitive.
                </li>
              </ul>
            </article>
          </div>
 
          {/* RIGHT COLUMN — sticky quick stats card */}
          <div className="about-side" data-reveal>
            <div className="about-card about-card-fun about-sticky">
              <h4>Quick Stats &amp; Modes</h4>
 
              <div className="pill-row">
                <span className="pill pill-primary">📍 Phoenix, AZ</span>
                <span className="pill">🎓 MS BAPM — UConn</span>
              </div>
 
              {/* UNCHANGED */}
              <div className="about-meta-block">
                <p className="about-meta-label">Tech stack I actually use</p>
                <p className="about-meta-text">
                  SQL · Python · Databricks · Power BI · DAX · LLMs · REST APIs
                </p>
              </div>
 
              {/* ── CHANGE 3: NEW meta block ── */}
              <div className="about-meta-block">
                <p className="about-meta-label">AI &amp; ML tools</p>
                <p className="about-meta-text">
                  OpenAI API · FAISS · XGBoost · Scikit-learn · Streamlit ·
                  Prompt Engineering
                </p>
              </div>
 
              {/* UNCHANGED */}
              <div className="about-meta-block">
                <p className="about-meta-label">Favorite work mode</p>
                <p className="about-meta-text">
                  Take a messy spreadsheet or data dump, ask annoying questions,
                  build a clean data model and dashboard/AI tool, then watch
                  everyone stop fighting with their data.
                </p>
              </div>
 
              <div className="about-meta-block">
                <p className="about-meta-label">Target roles</p>
                <p className="about-meta-text">
                  🎯 Business/Data Analyst &nbsp;·&nbsp; 🎯 AI Product / Applied AI
                  — anywhere I can be the bridge between operations, data, and
                  intelligent systems.
                </p>
              </div>
 
              <div className="about-divider" />
 
              <div className="about-meta-block">
                <p className="about-meta-label">
                  What you get if we work together
                </p>
                <p className="about-meta-text">
                  Someone who enjoys digging into details, but always brings it back
                  to &ldquo;What decision does this change?&rdquo; — with dashboards,
                  experiments, and clear communication to back it up.
                </p>
              </div>
            </div>
          </div>
        </div>
 
        {/* Bottom CTA — UNCHANGED */}
        <div className="about-bottom-cta" data-reveal>
          <h2>Want the short version?</h2>
          <p>Let&apos;s turn your messy data into decisions.</p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="/contact">Contact</a>
            <a className="btn btn-outline" href="/projects">Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}
