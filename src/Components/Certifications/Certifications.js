import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { MdContactPage, MdEmail } from "react-icons/md";
import { BsGithub, BsInfo, BsPhoneFill, BsPhoneVibrate } from "react-icons/bs";
import { BiHome, BiInfoSquare } from "react-icons/bi";
import { FaGithubSquare, FaHome, FaMailBulk } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";

export default function Certifications(props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <>
      <Navigation />
      <section className="w-100%" style={{ paddingBottom: "150px" }}>
        <div
          className=""
          style={{
            width: props.width,
            height: props.height,
            margin: props.margin,
            paddingTop: "280px",
          }}
        >
          <Carousel
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showArrows}
            animationConfig={config.gentle}
          />
        </div>
      </section>

      <div className="container-fluid mt-4 mb-3">
        <div className="row">
          <div className="col-12 text-center">
            <Link to={"mailto:deshpande2001@gmail.com"} className="n">
              <FaMailBulk /> Email
            </Link>
            <Link to={"https://github.com/nandini2001d/ "} className="n mx-3">
              <FaGithubSquare /> Github
            </Link>
            <br />
            <p>
              <BsPhoneVibrate /> 91- 8010 649 831
            </p>
            <Link to={"/"} className="n">
              <FaHome /> Home
            </Link>
            <Link to={"/projects"} className="n mx-3">
              <GoProject /> Projects
            </Link>
            <Link to={"/contact"} className="n">
              <MdContactPage /> Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
