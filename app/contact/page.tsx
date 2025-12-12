// app/contact/page.tsx

export default function ContactPage() {
  return (
    <section className="inner-page">
      <div className="inner-content starry">
        <div className="section-header" data-reveal>
          <h2>Let&apos;s Work Together</h2>
          <p>
            If you&apos;re hiring for Business/Data Analytics or Applied AI roles — or want
            to make an internal workflow smarter — I&apos;d love to chat.
          </p>
        </div>
        {/* 🔘 CONTACT CTA */}
<div className="hero-buttons" data-reveal>
  <a
    className="btn btn-primary"
    href="mailto:chahatbalani01@gmail.com"
  >
    Email me
  </a>

  <a
  className="btn btn-outline"
  href="https://www.linkedin.com/in/chahat-balani/"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

</div>

        <div className="contact-layout" data-reveal>
          <div className="about-card about-card-fun">
            <div className="contact-info">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:chahatbalani01@gmail.com">chahatbalani01@gmail.com</a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/chahatbalani"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/chahatbalani
                </a>
              </p>
              <p>Based in Phoenix, Arizona.</p>
              <p className="contact-note">
                Tell me a bit about the problem you&apos;re trying to solve — I&apos;ll bring
                the data, the questions, and the experiments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
