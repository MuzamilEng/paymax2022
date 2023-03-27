import PortfolioFinance from "../component/portfoliofinance";

function Projects() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Accounting Features Designed for Business Owners and Accountants
            </h6>
            <h2 className="title">
              Everything you need to confidently run your business.
            </h2>
          </div>

          <PortfolioFinance />
        </div>
      </section>
    </>
  );
}

export default Projects;
