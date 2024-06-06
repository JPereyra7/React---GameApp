// import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { gamesArray } from "../models/GamesArray";
import { IGames } from "../models/IGames";

const MacOS = () => {
  // const [activeLink, setActiveLink] = useState('');

  // const handleLinkClick = (link: string) => {
  //     setActiveLink(link);
  // };

  return (
    <>
      <section className="macContainer">
        <div className="upperNavbar">
          <div className="upperRow">
            <div className="redButton"></div>
            <div className="yellowButton"></div>
            <div className="greenButton"></div>

            <div className="navbarMenuLinks">
              <a href="#">Games</a>
              <a href="#">Videos</a>
              <a href="#">My List</a>
              <a href="#">Purchases</a>

              <input
                className="upperTopSearchbar"
                type="text"
                placeholder="Search..."
              />

              <div className="upperNavbarRight">
                <p>
                  <FontAwesomeIcon
                    icon={faBell}
                    className="bellIcon"
                    size="lg"
                  />
                </p>
                <FontAwesomeIcon
                  icon={faCloudArrowDown}
                  className="cloudIcon"
                  size="lg"
                />
                <img
                  className="backgroundimageIcon"
                  src="/src/assets/1696249826241.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="heroBanner"
          src="https://cdn.webhallen.com/images/725453-MonthlyGamingDealsSiteDesktopTileBanner?w=1128"
          alt=""
        />

        <h2 className="bestSellerHeader">Best Sellers</h2>

        <div className="gameContainer">
          {gamesArray.map((game: IGames) => (
            <div key={game.title}>
              {/* <p>{game.title}</p>
              <p>{game.price}</p> */}
              <img className="gameImages" src={game.imageUrl} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MacOS;
