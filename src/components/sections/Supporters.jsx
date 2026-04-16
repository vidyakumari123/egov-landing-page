import coDevelopLogo from "../../assets/images/co.png";
import gatesLogo from "../../assets/images/BMGFoundation_logo_banner.jpg";
import tataLogo from "../../assets/images/tata_trusts-1.png";
import globalLogo from "../../assets/images/global.png";
import nilekaniLogo from "../../assets/images/nilekani.jpg";

const supporters = [
  {
    href: "https://www.codevelop.fund/",
    src: coDevelopLogo,
    alt: "Co-Develop logo",
  },
  {
    href: "https://concordeurope.org/2016/12/05/partnership-bill-melinda-gates-foundation/",
    src: gatesLogo,
    alt: "Bill and Melinda Gates Foundation logo",
  },
  {
    href: "https://clix.tiss.edu/portfolio-item/tata-trusts-mumbai/",
    src: tataLogo,
    alt: "Tata Trusts logo",
  },
  {
    href: "https://en.wikipedia.org/wiki/The_Global_Fund_to_Fight_AIDS,_Tuberculosis_and_Malaria",
    src: globalLogo,
    alt: "The Global Fund logo",
  },
  {
    href: "https://www.aastrika.org/our-donors/",
    src: nilekaniLogo,
    alt: "Nandan Nilekani logo",
  },
];

function Supporters() {
  return (
    <section className="supporters-section text-center">
      <h2>
        Our <span className="text-primary">Supporters</span>
      </h2>

      <div className="supporters-logos d-flex justify-content-center align-items-center gap-5 mt-5 flex-wrap">
        {supporters.map((supporter) => (
          <a
            key={supporter.alt}
            href={supporter.href}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={supporter.src}
              alt={supporter.alt}
              width="120"
              className="img-fluid"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Supporters;
