import { createContext, useEffect, useReducer, type Dispatch } from "react";
import {
  animalReducer,
  AnimalActionType,
  type AnimalAction,
} from "../reducers/animalReducer";
import type { Animal } from "../models/Animal";
import { fetchAnimals } from "../services/animalService";

interface AnimalContextProps {
  animals: Animal[];
  dispatch: Dispatch<AnimalAction>;
}

export const AnimalContext = createContext<AnimalContextProps>({
  animals: [],
  dispatch: () => {},
});

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const localAnimals = localStorage.getItem("animals");
  const [animals, dispatch] = useReducer(
    animalReducer,
    localAnimals ? JSON.parse(localAnimals) : []
  );

  useEffect(() => {
    if (!localAnimals) {
      const loadAnimals = async () => {
        const data = await fetchAnimals();
        dispatch({
          type: AnimalActionType.LOADED,
          payload: data,
        });
      };
      loadAnimals();
    }
  }, []);

  useEffect(() => {
    if (animals.length > 0) {
      localStorage.setItem("animals", JSON.stringify(animals));
    }
  }, [animals]);

  return (
    <AnimalContext.Provider value={{ animals, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};
