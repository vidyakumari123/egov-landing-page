function Features() {
  return (
    <section className="features-section section container">

      <h2 className="text-center mb-5">
        Big problems need <span className="text-primary">bold approaches</span>
      </h2>

      <div className="row">

        <div className="col-md-4">
          <ul className="feature-list">
            <li>Public Health</li>
            <li>Public Finance</li>
            <li>Local Governance</li>
            <li>Water & Sanitation</li>
          </ul>
        </div>

        <div className="col-md-8">
          <div className="row">
            
            <div className="col-md-6">
              <div className="feature-card">
                <h3>210+</h3>
                <p>ICUs supported</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="feature-card">
                <h3>2Bn</h3>
                <p>Transactions</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;