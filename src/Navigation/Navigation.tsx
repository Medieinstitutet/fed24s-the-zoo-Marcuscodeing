import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/Animalpage"}>Animals</NavLink>
        </li>
      </ul>
    </nav>
  );
};
