import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const Homepage = () => {
  return (
    <>
      <div>
        <video autoPlay muted loop>
          <source src="/Zoo.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="text-center mt-20">
        Välkommen till Zootopia <br />
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

      <div
        className="w-full py-8 text-white text-center "
        style={{ backgroundColor: "#2C5F34" }}
      >
        <div className="flex justify-center items-center gap-8 max-w-5xl mx-auto px-8">
          <div>
            <img
              className="rounded-lg w-180 h-90 mb-4 "
              src="/lion.jpg"
              alt="Lion"
            />
            <h2>Skapa upplevelser</h2>
            <p>Mata djuren</p>
          </div>
          <div>
            <img
              className="rounded-lg w-180 h-90 mb-4"
              src="/meerkat.jpg"
              alt="Meerkat"
            />
            <h2>Utforska deras värld</h2>
            <p>Här kan du träffa djuren</p>
          </div>
          <div>
            <img
              className="rounded-lg w-180 h-90 mb-4 "
              src="giraffe.jpg"
              alt="Giraffe"
            />
            <h2>Följ med på äventyr</h2>
            <p>Lär dig mer om naturens värld</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="flex justify-center items-center gap-8 mt-8">
          <h2>Hitta hit</h2>
          <h2>Frågor och svar</h2>
          <h2>Kontakta oss</h2>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <p>Kolmården, SE-618 92 Kolmården </p>
          <p>Följ oss i sociala medier</p>
        </div>

        <div className="flex justify-center items-center gap-4 m-8">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </footer>
    </>
  );
};
