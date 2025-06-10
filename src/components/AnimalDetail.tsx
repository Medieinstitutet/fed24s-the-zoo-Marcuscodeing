import { useParams } from "react-router-dom";
import { useAnimals } from "../contexts/AnimalContext";
import { useState } from "react";

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals } = useAnimals();

  const animalIndex = animals.findIndex((animal) => animal.id === Number(id));
  const [index, setIndex] = useState(animalIndex !== -1 ? animalIndex : 0);

  const prevAnimal = () =>
    setIndex((i) => (i > 0 ? i - 1 : animals.length - 1));

  const nextAnimal = () =>
    setIndex((i) => (i < animals.length - 1 ? i + 1 : 0));

  const animal = animals[index];

  if (!animalIndex) {
    return <h1>Animal not found</h1>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-6">
        <img
          className="w-48 h-48 object-cover rounded mb-4"
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
        />
        <h2 className="text-2xl font-bold mb-4">{animal.name}</h2>

        <p>Birth: {animal.yearOfBirth}</p>
        <p>Description: {animal.shortDescription}</p>
        <p>Medicine: {animal.medicine}</p>
        <p>Last Fed: {animal.lastFed ? "Yes" : "No"}</p>
        <p>Is Fed: {animal.isFed ? "Yes" : "No"}</p>

        <button
          onClick={prevAnimal}
          className="bg-blue-500 text-white p-2 rounded mt-4 mr-2"
        >
          Previous
        </button>

        <button
          onClick={nextAnimal}
          className="bg-blue-500 text-white p-2 rounded mt-4 ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};
