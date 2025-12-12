// app/projects/page.tsx

export default function ProjectsPage() {
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

        <div className="project-grid">
          {/* Greenwave – ongoing */}
          <article className="project-card"  data-reveal="true">
            <h3>🚦 Greenwave — AI Traffic Optimization (Ongoing)</h3>
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

          {/* U-Haul analytics */}
          <article className="project-card" data-reveal="true">
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

          {/* Google Places */}
          <article className="project-card" data-reveal="true">
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

          {/* Portfolio allocation */}
          <article className="project-card" data-reveal="true">
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

          {/* Bitcoin price prediction */}
          <article className="project-card" data-reveal="true">
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

          {/* Airbnb pricing */}
          <article className="project-card" data-reveal="true">
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
