import PortfolioTransport from "../component/portfoliotransport";

function Projects() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Choose from 100+ providers at every day affordable prices. Book
              online today.
            </h6>
            <h2 className="title">
              Best Transport Service providers at highly Competitive Pricing.
            </h2>
          </div>

          <PortfolioTransport />
        </div>
      </section>
    </>
  );
}

export default Projects;
