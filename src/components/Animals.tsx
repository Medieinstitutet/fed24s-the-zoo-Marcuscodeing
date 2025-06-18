import { useContext } from "react";
import { AnimalContext } from "../context/animalContext";
import { Link } from "react-router-dom";

export const Animals = () => {
  const { animals } = useContext(AnimalContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {animals.map((animal) => {
        const lastFed = new Date(animal.lastFed);
        const now = new Date();
        const hoursSinceFed =
          (now.getTime() - lastFed.getTime()) / (1000 * 60 * 60);

        let status = "Mätt";
        let color = "green";
        if (hoursSinceFed >= 3 && hoursSinceFed < 5) {
          status = "Snart hungrig";
          color = "orange";
        } else if (hoursSinceFed >= 5) {
          status = "Behöver matas!";
          color = "red";
        }

        return (
          <div
            key={animal.id}
            className="animal transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to={`/Animal/${animal.id}`}>
              <h3>{animal.name}</h3>
              <img
                src={animal.imageUrl}
                alt={animal.name}
                onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <p>{animal.shortDescription}</p>
              <p style={{ color }}>{status}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
