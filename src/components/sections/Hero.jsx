function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6 hero-content">
            <h1>
              20 years of digital transformation in public service delivery
              <br />
              <span className="highlight">It's possible.</span>
            </h1>

            <p>
              Catalysing ecosystems where citizens, governments and markets work together.
            </p>

            <div className="mt-3">
              <button className="btn btn-primary me-2">Our Approach</button>
              <button className="btn btn-outline-primary">Our Impact</button>
            </div>
          </div>

          {/* RIGHT IMAGE (EMPTY because using background) */}
          <div className="col-md-6"></div>

        </div>
      </div>
    </section>
  );
}

export default Hero;