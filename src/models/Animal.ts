export interface Animal {
  id: number;
  name: string;
  yearOfBirth: number;
  imageUrl: string;
  shortDescription: string;
  medicine: string;
  lastFed: string | null;
  isFed: boolean;
}
