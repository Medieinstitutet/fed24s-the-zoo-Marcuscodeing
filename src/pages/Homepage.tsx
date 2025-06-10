export const Homepage = () => {
  return (
    <>
      <div>
        <video autoPlay muted loop>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="text-center mt-20">
        Välkommen till Nordiska Zoo <br />
        Ett Äventyr för Hela Familjen!
      </h1>
      <p className="text-center m-16">
        Upptäck djurens magiska värld hos oss på Nordiska Zoo! Här möter du allt{" "}
        <br />
        från majestätiska lejon till nyfikna apor, färgglada fåglar och lugna{" "}
        <br />
        sköldpaddor – mitt i en naturskön miljö som är både lärorik och <br />
        spännande.
      </p>
    </>
  );
};
