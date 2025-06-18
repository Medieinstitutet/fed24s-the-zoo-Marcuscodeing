import { Animals } from "../components/Animals";

export const Animalpage = () => {
  return (
    <>
      <h1 className="text-3xl font-medium mb-4 text-center mt-20">
        Välkommern till våra djurens värld!
      </h1>

      <p className="font-medium text-center m-16">
        Klicka dig vid vidare för att se mer information och mata djuren
      </p>

      <Animals />
    </>
  );
};
