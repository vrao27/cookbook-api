import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About.js";
import { Recipes } from "./Recipes";
import { Contact } from "./Contact";
import { NotFound } from "./NotFound";
import "./nav.css";

export const Nav = ({ data }) => {
  // console.log(" nav", data);

  return (
    <div id="navTop">
      <nav className="nav-container">
        <h2>
          <NavLink className="nav-link" to="/">
            Group4Kitchen
          </NavLink>
        </h2>
        <ul className="link-container">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li>
            <div className="dropdown">
              <button className="dropbtn">Detail</button>
              <div className="dropdown-content">
                {data.map((item, index) => (
                  <Link key={index} to={`/recipes/${index}`}>
                    {item.title["en-US"]}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home data={data} />} />

        <Route path="/about" element={<About />} />
        <Route path="/recipes/:id" element={<Recipes data={data} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
