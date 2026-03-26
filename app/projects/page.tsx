// app/projects/page.tsx
// ── CHANGES FROM YOUR ORIGINAL ──────────────────────────────────────────────
// 1. Added "use client" + useState (required for the filter tabs)
// 2. Added filter tab buttons above the grid (All / AI & LLM / Analytics / ML)
//    → needs 2 new CSS classes added to globals.css (see filter-tabs.css)
// 3. Added 3 new project cards at the TOP of the grid:
//      - 🧠 AI SQL Analyst        (chip-glow badge + GitHub link)
//      - 📄 RAG Document Assistant (chip-glow badge + GitHub link)
//      - 💳 Real-Time Fraud Detection (chip-glow badge + GitHub link)
//    Greenwave is still there, now also gets the chip-glow "AI" badge
// 4. All existing cards are UNCHANGED — same text, same structure, same classes
// ────────────────────────────────────────────────────────────────────────────
 
"use client";
 
import { useState } from "react";
 
type Tag = "All" | "AI / LLM" | "Analytics" | "ML";
const TABS: Tag[] = ["All", "AI / LLM", "Analytics", "ML"];
 
export default function ProjectsPage() {
  const [active, setActive] = useState<Tag>("All");
 
  // tag sets for filtering — parallel to the JSX cards below
  const tags: Record<string, Tag[]> = {
    "AI SQL Analyst":             ["AI / LLM", "Analytics"],
    "RAG Document Assistant":     ["AI / LLM"],
    "Real-Time Fraud Detection":  ["AI / LLM", "ML"],
    "Greenwave":                  ["AI / LLM"],
    "U-Haul":                     ["Analytics"],
    "Google Places":              ["Analytics"],
    "Portfolio":                  ["ML"],
    "Bitcoin":                    ["ML"],
    "Airbnb":                     ["ML"],
  };
 
  const hidden = (key: string) =>
    active !== "All" && !tags[key]?.includes(active)
      ? { display: "none" as const }
      : {};
 
  return (
    <section className="inner-page">
      <div className="inner-content starry">
        <div className="section-header">
          <h2>Projects</h2>
          <p>
            A mix of analytics, optimization, and applied AI — built to solve real
            problems for operations, investors, and city planners.
          </p>
        </div>
 
        {/* ── CHANGE 2: filter tabs ── */}
        <div className="project-filter-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`project-filter-btn${active === tab ? " active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
 
        <div className="project-grid">
 
          {/* ── CHANGE 3a: NEW — AI SQL Analyst ── */}
          <article className="project-card" data-reveal="true" style={hidden("AI SQL Analyst")}>
            <div className="card-title-row">
              <h3>🧠 AI SQL Analyst</h3>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexShrink: 0 }}>
                <span className="chip chip-glow">✦ AI</span>
                <a
                  href="https://github.com/chahatbalani18/ai-sql-analyst-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip chip-soft"
                  style={{ textDecoration: "none" }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <p className="project-role">
              <strong>Role:</strong> Applied AI / LLM Engineering&nbsp; |&nbsp;
              <strong>Stack:</strong> Python · OpenAI · SQLAlchemy · SQLite · Pandas
            </p>
            <p>
              An AI-powered system that translates natural language questions into
              SQL queries, executes them, and explains results in plain English — no
              SQL knowledge required for business users.
            </p>
            <ul>
              <li>
                Converts business questions into executable SQL using an{" "}
                <strong>OpenAI LLM</strong> with schema-aware prompting.
              </li>
              <li>
                Returns results alongside <strong>plain-language explanations</strong>,
                closing the loop between question and insight.
              </li>
            </ul>
          </article>
 
          {/* ── CHANGE 3b: NEW — RAG Document Assistant ── */}
          <article className="project-card" data-reveal="true" style={hidden("RAG Document Assistant")}>
            <div className="card-title-row">
              <h3>📄 RAG Document Assistant</h3>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexShrink: 0 }}>
                <span className="chip chip-glow">✦ AI</span>
                <a
                  href="https://github.com/chahatbalani18/RAG-doc-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip chip-soft"
                  style={{ textDecoration: "none" }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <p className="project-role">
              <strong>Role:</strong> Applied AI / RAG Engineering&nbsp; |&nbsp;
              <strong>Stack:</strong> Python · OpenAI Embeddings · FAISS · Streamlit · tiktoken
            </p>
            <p>
              Upload PDFs, TXT, CSV, or Markdown files and ask grounded questions —
              answers sourced strictly from your documents, with citations for every
              response.
            </p>
            <ul>
              <li>
                FAISS vector index + chunked embeddings enable fast{" "}
                <strong>multi-section retrieval</strong> across large documents.
              </li>
              <li>
                Enforces <strong>strict grounding rules</strong>: no hallucinations,
                no outside knowledge, no invented examples.
              </li>
            </ul>
          </article>
 
          {/* ── CHANGE 3c: NEW — Real-Time Fraud Detection ── */}
          <article className="project-card" data-reveal="true" style={hidden("Real-Time Fraud Detection")}>
            <div className="card-title-row">
              <h3>💳 Real-Time Fraud &amp; Anomaly Detection</h3>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexShrink: 0 }}>
                <span className="chip chip-glow">✦ AI</span>
                <a
                  href="https://github.com/chahatbalani18/realtime-fraud-anomaly-detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip chip-soft"
                  style={{ textDecoration: "none" }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <p className="project-role">
              <strong>Role:</strong> ML Engineer / Data Engineer&nbsp; |&nbsp;
              <strong>Stack:</strong> Python · Scikit-learn · Isolation Forest · Pandas · Streamlit
            </p>
            <p>
              Streaming fraud detection pipeline that simulates live financial
              transactions and applies anomaly scoring to flag suspicious behavior
              in real time.
            </p>
            <ul>
              <li>
                <strong>Anomaly-first detection</strong> with Isolation Forest handles
                class imbalance and unseen fraud patterns better than supervised-only
                models.
              </li>
              <li>
                Live <strong>Streamlit dashboard</strong> monitors drift, precision,
                recall, and alert history.
              </li>
            </ul>
          </article>
 
          {/* ── Greenwave — CHANGE: added AI badge, otherwise unchanged ── */}
          <article className="project-card" data-reveal="true" style={hidden("Greenwave")}>
            <div className="card-title-row">
              <h3>🚦 Greenwave — AI Traffic Optimization</h3>
              <span className="chip chip-glow">✦ AI</span>
            </div>
            <p className="project-role">
              <strong>Role:</strong> Applied AI / Optimization&nbsp; |&nbsp;
              <strong>Stack:</strong> Python · OpenAI · Geo APIs · Optimization
            </p>
            <p>
              Building an AI-optimized signal-timing system using simulated and real
              traffic patterns to reduce idle time and congestion at busy
              intersections.
            </p>
            <ul>
              <li>
                Early experiments show up to{" "}
                <strong>18–25% reduction in simulated idle time</strong> during peak
                hours.
              </li>
              <li>
                Designed for future integration with live traffic feeds and a
                monitoring dashboard for city planners.
              </li>
            </ul>
          </article>
 
          {/* ── All cards below are UNCHANGED from your original ── */}
 
          <article className="project-card" data-reveal="true" style={hidden("U-Haul")}>
            <h3>🏬 U-Haul Affiliate Analytics Suite</h3>
            <p className="project-role">
              <strong>Role:</strong> Business Analyst&nbsp; |&nbsp;
              <strong>Stack:</strong> SQL Server · Databricks · Power BI · DAX
            </p>
            <p>
              Dashboards and data pipelines used by U-Haul to monitor facility health
              across thousands of self-storage affiliates — utilization, autopay,
              pricing, payments, and online move-ins.
            </p>
            <ul>
              <li>
                Analyzed <strong>200K+ transactions</strong> to uncover pricing, fee,
                and autopay optimization opportunities that contributed to a{" "}
                <strong>projected 6% annual revenue lift</strong>.
              </li>
              <li>
                Automated recurring SQL/Databricks → Power BI workflows, saving{" "}
                <strong>40+ manual hours per month</strong>.
              </li>
            </ul>
          </article>
 
          <article className="project-card" data-reveal="true" style={hidden("Google Places")}>
            <h3>🗺️ Google Places Facility Verification Engine</h3>
            <p className="project-role">
              <strong>Role:</strong> Data Analyst / API Engineer&nbsp; |&nbsp;
              <strong>Stack:</strong> Python · Google Places API
            </p>
            <p>
              Automated workflow to verify whether locations are actually
              self-storage facilities by combining Places API data, category rules,
              and fuzzy address similarity.
            </p>
            <ul>
              <li>
                Improved facility classification accuracy by tightening matching
                logic and handling edge cases.
              </li>
              <li>
                Flags suspicious or missing facilities for targeted review instead of
                full manual audits.
              </li>
            </ul>
          </article>
 
          <article className="project-card" data-reveal="true" style={hidden("Portfolio")}>
            <h3>📊 Portfolio Allocation &amp; Backtesting</h3>
            <p className="project-role">
              <strong>Role:</strong> Data Science / Quant Analysis&nbsp; |&nbsp;
              <strong>Stack:</strong> Python · NumPy · Pandas · Matplotlib
            </p>
            <p>
              Implemented Modern Portfolio Theory and momentum-based allocation
              strategies to compare risk/return tradeoffs against market benchmarks.
            </p>
            <ul>
              <li>
                Ran 24-month backtests that showed a{" "}
                <strong>12% improvement over baseline portfolio returns</strong> while
                maintaining similar volatility.
              </li>
              <li>
                Evaluated portfolios using Sharpe ratio and drawdown analysis to keep
                strategies realistic for investors.
              </li>
            </ul>
          </article>
 
          <article className="project-card" data-reveal="true" style={hidden("Bitcoin")}>
            <h3>₿ Bitcoin Price Prediction — Time Series ML</h3>
            <p className="project-role">
              <strong>Role:</strong> ML Engineer&nbsp; |&nbsp;
              <strong>Stack:</strong> Python · XGBoost · Time-Series Features
            </p>
            <p>
              Built and tuned ML models to forecast Bitcoin price movements using
              engineered time-series features and historical data.
            </p>
            <ul>
              <li>
                Achieved an <strong>F1-score of 0.87</strong>, outperforming baseline
                models by <strong>21%</strong>.
              </li>
              <li>
                Identified volatility patterns that improved short-term prediction
                reliability by <strong>15%</strong>.
              </li>
            </ul>
          </article>
 
          <article className="project-card" data-reveal="true" style={hidden("Airbnb")}>
            <h3>🏡 Airbnb Price Optimization Model</h3>
            <p className="project-role">
              <strong>Role:</strong> Predictive Modeler&nbsp; |&nbsp;
              <strong>Stack:</strong> JMP Pro · Regression · Neural Nets
            </p>
            <p>
              Built a pricing model using real Airbnb data to understand how
              property, location, and review features influence daily rates.
            </p>
            <ul>
              <li>
                Processed <strong>10K+ property records</strong>, handling missing
                data and engineering key features.
              </li>
              <li>
                Achieved <strong>89% accuracy</strong> using stacked models (Logistic
                Regression, Neural Nets, Naïve Bayes) and visualized results with
                interactive dashboards.
              </li>
            </ul>
          </article>
 
        </div>
      </div>
    </section>
  );
}
