export const fetchAnimals = async () => {
  const response = await fetch("https://animals.azurewebsites.net/api/animals");
  if (!response.ok) throw new Error("Kan inte hitta sidan");
  return await response.json();
};
