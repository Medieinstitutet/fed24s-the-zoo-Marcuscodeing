import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Animal } from "../models/Animal";

type AnimalsContextType = {
  animals: Animal[];
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
};

const AnimalsContext = createContext<AnimalsContextType | undefined>(undefined);

export const AnimalsProvider = ({ children }: { children: ReactNode }) => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await fetch(
        "https://animals.azurewebsites.net/api/animals"
      );
      const data = await response.json();
      setAnimals(data);
    };
    fetchAnimals();
  }, []);

  return (
    <AnimalsContext.Provider value={{ animals, setAnimals }}>
      {children}
    </AnimalsContext.Provider>
  );
};

export const useAnimals = () => {
  const context = useContext(AnimalsContext);
  if (!context) {
    throw new Error("useAnimals must be used within an AnimalsProvider");
  }
  return context;
};
