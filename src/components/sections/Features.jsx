function Features() {
  return (
    <section className="features-section">
      <div className="feature-box">

        {/* LEFT */}
        <div className="feature-left">
          <h2>
            Big problems need <br />
            <span>bold approaches</span>
          </h2>

          <div className="feature-buttons">
            <button className="active">Public Health</button>
            <button>Public Finance</button>
            <button>Local Governance</button>
            <button>Water & Sanitation</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="feature-right">

          <div className="feature-card blue">
            <h3>210+</h3>
            <p>cities LIVE with ICU systems</p>
            <button>Read More</button>
          </div>

          <div className="feature-card dark-blue">
            <h3>2 Bn</h3>
            <p>vaccination certificates issued</p>
            <button>Read More</button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;