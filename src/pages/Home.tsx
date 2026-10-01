import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function Home() {
  return (
    <main className="home">
      <div className="shell home-content">
        <section className="intro">
          <h1>{siteContent.name}</h1>

          <p className="intro-label">{siteContent.education}</p>

          <div className="intro-copy">
            {siteContent.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="home-projects-link">
          <Link to="/projects">
            Projects <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
