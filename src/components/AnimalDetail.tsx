import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AnimalContext } from "../context/animalContext";
import { AnimalActionType } from "../reducers/animalReducer"; // <-- rätt import

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals, dispatch } = useContext(AnimalContext);

  const animal = animals.find((a) => a.id === Number(id));
  if (!animal) return <p>Djuret hittades inte.</p>;

  const lastFed = new Date(animal.lastFed ?? 0);
  const now = new Date();
  const hoursSinceFed = (now.getTime() - lastFed.getTime()) / (1000 * 60 * 60);

  const canFeed = hoursSinceFed >= 4;

  const handleFeed = () => {
    if (canFeed) {
      dispatch({
        type: AnimalActionType.FED,
        payload: String(animal.id),
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="rounded-lg p-6 max-w-md w-full text-center space-y-6 animal transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <h2>{animal.name}</h2>
        <img
          className="w-full h-auto max-h-64 object-contain mx-auto"
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => (e.currentTarget.src = "/fallback.png")}
        />
        <p>{animal.longDescription}</p>
        <p className="">Senast matad: {lastFed.toLocaleString()}</p>
        <button
          onClick={handleFeed}
          disabled={!canFeed}
          className={`px-4 py-2 rounded-md text-white font-semibold transition 
    ${
      canFeed
        ? "bg-green-600 hover:bg-green-700"
        : "bg-gray-400 cursor-not-allowed"
    }`}
        >
          {canFeed ? "Mata djuret" : animal.name + " Har precis blivit matad"}
        </button>
        {hoursSinceFed >= 3 && hoursSinceFed < 4 && (
          <p style={{ color: "orange" }}>Djuret behöver snart matas!</p>
        )}
        {hoursSinceFed >= 4 && (
          <p style={{ color: "red" }}>Djuret är hungrigt!</p>
        )}
      </div>
    </div>
  );
};
