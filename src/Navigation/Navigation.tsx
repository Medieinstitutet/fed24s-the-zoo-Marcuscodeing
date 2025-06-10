import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/animalpage"}>Animals</NavLink>
        </li>
      </ul>
    </nav>
  );
};
