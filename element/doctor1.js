import PortfolioDoctor from "../component/portfoliodoctor";

function Projects() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Choose from 10,000+ providers at every day affordable prices. Book
              online today.
            </h6>
            <h2 className="title">
              Top-rated online doctors & specialists available now.
            </h2>
          </div>

          <PortfolioDoctor />
        </div>
      </section>
    </>
  );
}

export default Projects;
