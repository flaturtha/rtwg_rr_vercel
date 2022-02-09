import { NavLink } from "remix";

export default function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "font-bold",
  };
  let activeClassName = "font-bold";
  return (
    <div className="space-x-12">
      <NavLink
        to="#home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="#about"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        About
      </NavLink>
      <NavLink
        to="#how-i-work"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        How I Work
      </NavLink>
      <NavLink
        to="#blog"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Blog
      </NavLink>
    </div>
  );
}
