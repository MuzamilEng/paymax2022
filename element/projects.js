import Portfolio from "../component/portfolio";

function Projects() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
              Projects
            </h6> */}
            <h2 className="title">Featured Services </h2>
          </div>

          <Portfolio />
        </div>
      </section>
    </>
  );
}

export default Projects;
