import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-4 flex-col sm:flex-row gap-2 sm:gap-4 text-center">
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
