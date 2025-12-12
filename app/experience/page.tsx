// app/experience/page.tsx

export default function ExperiencePage() {
  return (
    <section className="inner-page">
      <div className="inner-content starry">
        <div className="section-header">
          <h2>Experience</h2>
          <p>
            A blend of business analysis, BI engineering, and applied AI work across
            U-Haul, PepsiCo, and analytics-focused roles.
          </p>
        </div>

        <div className="experience-list">
          {/* U-Haul */}
          <article className="experience-card" data-reveal>
            <h3>Business Analyst — U-Haul International</h3>
            <p className="experience-meta">Phoenix, AZ · Jul 2025 – Present</p>
            <ul>
              <li>
                Analyze <strong>200K+ affiliate transactions</strong> to identify
                pricing, fee, and autopay opportunities, contributing to a{" "}
                <strong>projected 6% annual revenue lift</strong>.
              </li>
              <li>
                Design and maintain SQL/Databricks → Power BI pipelines that power
                dashboards for <strong>3,000+ affiliates</strong> across utilization,
                payments, online move-ins, and more.
              </li>
              <li>
                Automate recurring reporting, saving{" "}
                <strong>40+ manual hours per month</strong> and improving dashboard
                refresh reliability to <strong>53.2%</strong>.
              </li>
              <li>
                Troubleshoot APIs, DNS/SPF email authentication, and payment-gateway
                behavior to improve online move-in system uptime by{" "}
                <strong>35.5%</strong>.
              </li>
            </ul>
          </article>

          {/* PepsiCo */}
          <article className="experience-card"  data-reveal>
            <h3>Graduate Data Analyst (Consultant) — PepsiCo</h3>
            <p className="experience-meta">Remote · Aug 2024 – Dec 2024</p>
            <ul>
              <li>
                Supported supply chain and planning teams with analytics that reduced
                operational delays by <strong>15%</strong>.
              </li>
              <li>
                Built predictive models with XGBoost achieving{" "}
                <strong>R² = 0.9423</strong>, optimizing manufacturing parameters and
                improving forecast quality.
              </li>
              <li>
                Analyzed <strong>50K+ records</strong> to improve demand forecasting
                accuracy by <strong>18%</strong> and reduce planning errors by{" "}
                <strong>12%</strong>.
              </li>
              <li>
                Designed Power BI/Tableau dashboards monitoring{" "}
                <strong>50+ KPIs</strong>, giving leadership clearer visibility into
                performance.
              </li>
            </ul>
          </article>

          {/* Data Glacier */}
          <article className="experience-card" data-reveal>
            <h3>Data Analyst — Data Glacier</h3>
            <p className="experience-meta">Aug 2023 – Jun 2024</p>
            <ul>
              <li>
                Automated procurement and operations reporting processes, reducing
                workload by <strong>120 hours per month</strong> (~30%).
              </li>
              <li>
                Delivered <strong>25+ SQL/Python reports per month</strong>, speeding
                analytics delivery for multiple departments by{" "}
                <strong>40%</strong>.
              </li>
              <li>
                Deployed predictive models on Azure/AWS that improved forecasting
                accuracy by <strong>12%</strong>.
              </li>
              <li>
                Built Power BI dashboards that reduced overstock by{" "}
                <strong>10%</strong> and improved executive visibility into trends.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
