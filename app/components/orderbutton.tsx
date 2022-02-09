import { NavLink } from "remix";

export default function OrderButton({ content, href }) {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeClassName = "active-link";
  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeClassName : undefined)}
      to={href}
    >
      <button className="text-2xl uppercase font-bold md:text-base py-2 px-3 rounded-md bg-base2 text-base03 hover:bg-base3 hover:font-bold">
        Hire Me!
      </button>
    </NavLink>
  );
}
