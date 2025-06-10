import { useState, useEffect } from "react";

import type { Animal } from "../models/Animal";

export const Animals = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const FetchAnimal = async () => {
      const response = await fetch(
        "https://animals.azurewebsites.net/api/animals"
      );
      const data = await response.json();
      setAnimals(data);
    };
    FetchAnimal();
  }, []);
  return (
    <div className="flex items-center justify-center">
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            <h2>{animal.name}</h2>
            <img
              className="w-100 h-100 object-cover rounded"
              src={animal.imageUrl}
              alt={animal.name}
            />
            <p>Birth: {animal.yearOfBirth}</p>
            <p>Description: {animal.shortDescription}</p>
            <p>Medicine: {animal.medicine}</p>
            <p>Last Fed: {animal.lastFed ? "Yes" : "No"}</p>
            <p>Is Fed: {animal.isFed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
