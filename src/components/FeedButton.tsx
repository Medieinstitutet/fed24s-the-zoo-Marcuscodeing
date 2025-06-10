import { useState } from "react";

export const FeedButton = () => {
  const [lastFed, setLastFed] = useState<number>(Date.now());

  const hoursSinceFed = (Date.now() - lastFed) / (1000 * 60 * 60);
  const feed = hoursSinceFed >= 4;
  const hungry = hoursSinceFed > 3 && hoursSinceFed < 4;

  const handleFeed = () => {
    if (feed) {
      setLastFed(Date.now());
    }
  };

  return (
    <>
      <div>
        {hungry && <p className="text-red-500">The animal is hungry!</p>}

        <button
          onClick={handleFeed}
          disabled={!feed}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {feed ? "Feed the animal" : "Animal is not hungry"}
        </button>
      </div>
    </>
  );
};
