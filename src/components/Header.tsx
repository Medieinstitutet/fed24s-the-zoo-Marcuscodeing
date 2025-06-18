import { Navigation } from "../navigation/Navigation";
export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-6 py-4">
        <h1>Zootopia</h1>
        <Navigation />
      </div>
    </header>
  );
};
