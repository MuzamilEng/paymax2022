// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";

function Portfolio() {
  const portfolio = [
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic1.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "branding"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic2.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic3.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic4.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic5.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "branding", "seo"],
      imageSrc: "/images/projects/pic4.jpg",
      img: (
        <Image
          src="/images/projects/pic6.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-1 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={"all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a active={"web_design"} onClick={() => setFilter("web_design")}>
              Finance
            </a>
          </li>
          <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a
              active={"web_development"}
              onClick={() => setFilter("web_development")}
            >
              Energy Management
            </a>
          </li>
          <li className={`btn ${filter === "branding" ? "active" : ""}`}>
            <a active={"branding"} onClick={() => setFilter("branding")}>
              Loan
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a active={"mobile_app"} onClick={() => setFilter("mobile_app")}>
              Online Doctor
            </a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a active={"seo"} onClick={() => setFilter("seo")}>
              Transportation
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
