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
        <video
          autoPlay
          muted
          loop
          className="w-full h-auto max-h-[90vh] object-cover"
        >
          <source src="/Zoo.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="text-center mt-20">
        Välkommen till Zootopia. <br />
        Ett Äventyr för Hela Familjen!
      </h1>
      <p className="text-center m-16">
        Upptäck djurens magiska värld hos oss på Zootopia! Här möter du allt
        <br />
        från majestätiska lejon till nyfikna apor, färgglada fåglar och lugna
        <br />
        sköldpaddor – mitt i en naturskön miljö som är både lärorik och <br />
        spännande.
      </p>

      <div
        className="w-full py-8 text-white text-center "
        style={{ backgroundColor: "#2C5F34" }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto px-4 py-8">
          <div className="text-center max-w-xs">
            <img
              className="rounded-lg w-180 h-90 mb-4 "
              src="/lion.jpg"
              alt="Lion"
            />
            <h2>Skapa magiska möten</h2>
            <p>Kom nära exotiska djur från världens alla hörn</p>
          </div>
          <div className="text-center max-w-xs">
            <img
              className="rounded-lg w-180 h-90 mb-4"
              src="/squirrel-monkey.jpg"
              alt="Meerkat"
            />
            <h2>Utforska deras vardag</h2>
            <p>Se hur djuren lever, leker och tar hand om varandra</p>
          </div>
          <div className="text-center max-w-xs">
            <img
              className="rounded-lg w-180 h-90 mb-4 "
              src="giraffe.jpg"
              alt="Giraffe"
            />
            <h2>Följ med på äventyr</h2>
            <p>Lär dig mer om naturens fascinerande mångfald</p>
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
          <p>Zootopia, SE-618 92 Zootopia </p>
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
