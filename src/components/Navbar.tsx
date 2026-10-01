import { Link } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function Navbar() {
  const { links } = siteContent;

  return (
    <header className="site-header">
      <nav className="nav shell">
        <Link className="brand" to="/">
          {siteContent.navName}
        </Link>

        <div className="nav-links">
          <a href={links.cv} target="_blank" rel="noreferrer">
            CV
          </a>

          <a href={`mailto:${links.email}`}>Email</a>

          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
