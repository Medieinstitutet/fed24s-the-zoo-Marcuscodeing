import { Link } from "react-router-dom";
import { useAnimals } from "../contexts/AnimalContext";

export const Animals = () => {
  const { animals } = useAnimals();

  return (
    <div className="flex items-center justify-center">
      <ul className="grid grid-cols-2 gap-4  ">
        {animals.map((animal) => (
          <li key={animal.id}>
            <Link to={`/animal/${animal.id}`}>
              <h2>{animal.name}</h2>
              <img
                className="w-100 h-100 object-cover rounded"
                src={animal.imageUrl}
                alt={animal.name}
                onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
              />
              <p>Birth: {animal.yearOfBirth}</p>
              <p>Description: {animal.shortDescription}</p>
              <p>Medicine: {animal.medicine}</p>
              <p>Last Fed: {animal.lastFed ? "Yes" : "No"}</p>
              <p>Is Fed: {animal.isFed ? "Yes" : "No"}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
