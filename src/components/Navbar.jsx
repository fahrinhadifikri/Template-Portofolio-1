import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center p-6 md:px-14">
      <ul className="flex gap-8 font-bold text-dark text-xl">
        <li>
          <NavLink 
            to="/works" 
            className={({ isActive }) => 
              isActive ? "text-primary transition" : "hover:text-primary transition"
            }
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive ? "text-primary transition" : "hover:text-primary transition"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-primary transition" : "hover:text-primary transition"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}