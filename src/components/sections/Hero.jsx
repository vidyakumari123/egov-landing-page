import heroImg from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">

        <div className="hero-text">
          <h1>
            20 years of digital transformation in <br />
            public service delivery
          </h1>

          <h2 className="highlight">It's possible.</h2>

          <p>
            Catalysing ecosystems where citizens, governments and markets work together.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Our Approach</button>
            <button className="btn btn-outline-primary">Our Impact</button>
          </div>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="hero" />
        </div>

      </div>
    </section>
  );
}

export default Hero;