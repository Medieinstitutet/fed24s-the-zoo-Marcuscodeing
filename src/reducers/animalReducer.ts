import type { Animal } from "../models/Animal";

export enum AnimalActionType {
  LOADED,
  FED,
}

export type AnimalAction =
  | { type: AnimalActionType.LOADED; payload: Animal[] }
  | { type: AnimalActionType.FED; payload: string };

export const animalReducer = (
  animals: Animal[],
  action: AnimalAction
): Animal[] => {
  switch (action.type) {
    case AnimalActionType.LOADED:
      return action.payload;
    case AnimalActionType.FED:
      return animals.map((animal) =>
        animal.id === +action.payload
          ? { ...animal, lastFed: new Date().toISOString() }
          : animal
      );
    default:
      return animals;
  }
};
