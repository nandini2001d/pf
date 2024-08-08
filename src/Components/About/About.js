import React from "react";
import Navigation from "../Navigation/Navigation";
import {
  FaBook,
  FaChessKing,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  MdContactMail,
  MdContactPage,
  MdContacts,
  MdMail,
} from "react-icons/md";
import "../About/About.css";
import { GoGoal, GoProject } from "react-icons/go";
import { SiAwselasticloadbalancing } from "react-icons/si";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/Footer";
import { BiHomeAlt } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 2 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          style={{ padding: "5px" }}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.dark">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function About() {
  const [progress, setProgress] = React.useState(2);
  const [progress1, setProgress1] = React.useState(3);
  const [progress2, setProgress2] = React.useState(1);
  const [progress3, setProgress3] = React.useState(1);
  const [progress4, setProgress4] = React.useState(1);

  const [progress5, setProgress5] = React.useState(1900);
  const [progress6, setProgress6] = React.useState(1900);
  const [progress7, setProgress7] = React.useState(1900);

  React.useEffect(() => {
    window.scroll(0, 0);

    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 80 ? 80 : prevProgress + 2
      );
      setProgress1((prevProgress) =>
        prevProgress >= 83 ? 83 : prevProgress + 3
      );
      setProgress2((prevProgress) =>
        prevProgress >= 75 ? 75 : prevProgress + 1
      );
      setProgress4((prevProgress) =>
        prevProgress >= 87 ? 87 : prevProgress + 2
      );
      setProgress3((prevProgress) =>
        prevProgress >= 50 ? 50 : prevProgress + 1
      );
      setProgress6((prevProgress) =>
        prevProgress >= 2019 ? 2019 : prevProgress + 2
      );
      setProgress5((prevProgress) =>
        prevProgress >= 2017 ? 2017 : prevProgress + 2
      );
      setProgress7((prevProgress) =>
        prevProgress >= 2023 ? 2023 : prevProgress + 2
      );
    }, 900);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* navigation starts */}
      <Navigation />
      {/* navigation ends */}

      <section>
        <Carousel>
          <Carousel.Item
            interval={1000}
            style={{ width: "100%", height: "100vh" }}
          >
            <img
              src="/img/p1.jpeg"
              className="d-block"
              alt="nandini1"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
          <Carousel.Item
            interval={1000}
            style={{ width: "100%", height: "100vh" }}
          >
            <img
              src="/img/p2.jpeg"
              className="d-block"
              alt="nandini2"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
          <Carousel.Item
            interval={1000}
            style={{ width: "100%", height: "100vh" }}
          >
            <img
              src="/img/p3.jpeg"
              className="d-block"
              alt="nandini3"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
          <Carousel.Item
            interval={1000}
            style={{ width: "100%", height: "100vh" }}
          >
            <img
              src="/img/p4.jpeg"
              className="d-block"
              alt="nandini4"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
        </Carousel>

        {/* 
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-interval="500"
          data-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ width: "100%", height: "100vh" }}
            >
              <img
                src="/img/p1.jpeg"
                className="d-block"
                alt="..."
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              className="carousel-item"
              style={{ width: "100%", height: "100vh" }}
            >
              <img
                src="/img/p2.jpeg"
                className="d-block"
                alt="..."
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="carousel-item"
              style={{ width: "100%", height: "100vh" }}
            >
              <img
                src="/img/p3.jpeg"
                className="d-block"
                alt="..."
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="carousel-item"
              style={{ width: "100%", height: "100vh" }}
            >
              <img
                src="/img/p4.jpeg"
                className="d-block"
                alt="..."
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </section>

      <div
        className="container ab"
        style={{ position: "absolute", top: "240px", left: "0", zIndex: "10" }}
      >
        <div className="row">
          <div className="col-12 col-lg-4 col-md-9 col-sm-10">
            <span style={{ color: "white", fontSize: "bold" }}>
              {" "}
              <h2>
                HI, IT'S ME <br />
                <span style={{ color: "var(--main-color)" }}>NANDINI</span>
              </h2>
            </span>

            <p className="mt-4 text-white">
              Seeking a challenging position with a reputable organization where
              I can acquire new skills and technologies as well as used my
              knowledge for the growth of organization as well as myself.
            </p>

            <div className="mt-5">
              <Link to={"mailto:deshpanden2001@gmail.com"} className="">
                <MdMail style={{ fontSize: "19px" }} />
              </Link>
              <Link
                to={
                  "https://www.linkedin.com/in/nandinideshpande-a33738265?utm_source=share&utm_campaign=share_"
                }
                className="mx-4"
              >
                <FaLinkedin style={{ fontSize: "19px" }} />
              </Link>
              <Link to={"https://github.com/nandini2001d/ "}>
                <FaGithub style={{ fontSize: "19px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container main-container"
        style={{ zIndex: "10", maxWidth: "100%", top: "-80px" }}
      >
        <div className="row main-row">
          <div className="col-lg-3 col-md-6 col-sm-12 main-col  mb-4">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <div className="card text-center main-card">
                <div className="card-body main-body about p-4">
                  <SiAwselasticloadbalancing style={{ fontSize: "35px" }} />
                  <h5 className="mt-2">Creative Person</h5>
                  <p
                    style={{ color: "var(--qualification-color-p)" }}
                    className="mt-4"
                  >
                    I have ability to be orignal, to be innovative, to conceive
                    of concepts, to make concepts concrete, and to be flexible
                    in thinking and working.
                  </p>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 main-col  mb-4">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <div className="card text-center main-card">
                <div className="card-body main-body about p-4">
                  <FaBook style={{ fontSize: "35px" }} />
                  <h5 className="mt-2">Quick Learner</h5>
                  <p
                    style={{ color: "var(--qualification-color-p)" }}
                    className="mt-4"
                  >
                    I am a quick learner, and so I like to learn new things,new
                    technologies, and also I have ability to do work in
                    simultaneously.
                  </p>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 main-col  mb-4">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <div className="card text-center main-card">
                <div className="card-body main-body about p-4">
                  <GoGoal style={{ fontSize: "35px" }} />
                  <h5 className="mt-2">Problem Solver</h5>
                  <p
                    style={{ color: "var(--qualification-color-p)" }}
                    className="mt-4"
                  >
                    I am person how love's to solve different types of problems
                    in different ways and after they solved they brings more
                    confidence in myself.
                  </p>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 main-col  mb-4 ">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <div className="card text-center main-card">
                <div className="card-body main-body about p-4">
                  <FaChessKing style={{ fontSize: "35px" }} />
                  <h5 className="mt-2">Pillar</h5>
                  <p
                    style={{ color: "var(--qualification-color-p)" }}
                    className="mt-4"
                  >
                    I have leadership qualify which makes me group leader in my
                    collage life and, I very well managed my team and, achive
                    success.
                  </p>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>

      {/* <div id="textSlider" className="row text-center p-5">
          <div className="col-12 iamCol">
          <p>WHO I AM ??????</p>
          </div>
          <div className="col-12 slideCol text-center">
            <div className="scroller">
              <div className="inner">
                <h1>DEVELOPER</h1>
                <h1>CODER</h1>

                <h1>INNOVATOR</h1>
                <h1>TRAVELER</h1>

                <h1>DESIGNER</h1>
                <h1>CREATOR</h1>
              </div>
            </div>
            </div>
          </div> */}

      {/* progress bar */}

      <section style={{ marginTop: "-50px" }}>
        <div className="conatiner p-5">
          <div className="row">
            <p
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "40px",
                marginTop: "-10px",
              }}
            >
              Accomplished skills
            </p>
            <div className="col-12">
              <span>
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: "60px",
                    color: "var(--qualification-color-p)",
                  }}
                >
                  I want to improve my knowledge about different technologies,
                  frontend languages, backend languages, libraries, frameworks
                  and also other skills and used these skills for significantly
                  growth as a programmer.
                </p>
              </span>

              <div className="data mb-4">
                <AnimatedOnScroll animationIn="bounceInLeft">
                  <h6>FRONTEND TECHNOLOGIES</h6>
                </AnimatedOnScroll>
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress} />
                </Box>
              </div>
              <div className="data mb-4">
                <AnimatedOnScroll animationIn="bounceInLeft">
                  <h6>BACKEND TECHNOLOGIES</h6>
                </AnimatedOnScroll>
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress1} />
                </Box>
              </div>
              <div className="data mb-4">
                <AnimatedOnScroll animationIn="bounceInLeft">
                  <h6>FREMWORKS & LIBRAREIES</h6>
                </AnimatedOnScroll>
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress2} />
                </Box>
              </div>
              <div className="data mb-4">
                <AnimatedOnScroll animationIn="bounceInLeft">
                  <h6>PROJECT DEVELOPMENT</h6>
                </AnimatedOnScroll>
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress4} />
                </Box>
              </div>
              <div className="data mb-4">
                <AnimatedOnScroll animationIn="bounceInLeft">
                  <h6>OTHER SKILLS</h6>
                </AnimatedOnScroll>
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={progress3} />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* working on projects */}

      <div className="container mt-5">
        <div className="row text-center">
          <p className="mb-5 text-center">PROJECTS -- WORKING ON </p>
          <div className="col-md-6 col-sm-12 mt-4">
            <h5>Multi Restaurant food ordering system</h5>

            <div className="img mt-3 mb-3">
              <img
                src="/img/foodgrill.png"
                style={{
                  maxWidth: "100%",
                  minHeight: "100%",
                  objectFit: "cover",
                }}
                alt="foodgrill"
              />
            </div>

            <p style={{ fontSize: "14px" }}>Working Start in --- 2024</p>
            <p>
              Deployment is{" "}
              <AnimatedOnScroll animationIn="fadeInDownBig">
                <p style={{ color: "var(--qualification-color-p)" }}>
                  On Progress
                </p>
              </AnimatedOnScroll>
            </p>
          </div>

          <div className="col-md-6 col-sm-12 mt-4">
            <h5>Hotel Booking Site</h5>

            <div className="img mt-3 mb-3">
              <img
                src="/img/hotelp.png"
                style={{
                  maxWidth: "100%",
                  minHeight: "100%",
                  objectFit: "cover",
                }}
                alt="hotelp"
              />
            </div>

            <AnimatedOnScroll animationIn="fadeInDownBig">
              <p style={{ fontSize: "14px" }}>On Progress</p>
            </AnimatedOnScroll>
          </div>

          <div className="mt-5 mb-3">
            <Link to={"/projects"}>
              <button
                type="submit"
                className="btn btn-dark"
                style={{ width: "130px" }}
              >
                More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* education */}

      <section style={{ paddingBottom: "20px" }}>
        <div className="container mt-5 main-container mb-5">
          <div className="row mt-5 main-row">
            <p className="mb-5 text-center">PASS OUT YEARS</p>
            <div className="col-lg-4 col-12 mt-3 main-col">
              <AnimatedOnScroll animationIn="fadeInDownBig">
                <div className="card main-card">
                  <div className="card-body main-body">
                    <div style={{ display: "flex" }}>
                      <div>
                        <h4 style={{ marginTop: "15px" }}>{progress6}</h4>
                      </div>
                      <div
                        className="mx-3"
                        style={{
                          borderLeft: "1px solid gray",
                          paddingLeft: "25px",
                        }}
                      >
                        <h6>Adyal Vidhyalaya Adyal School</h6>
                        <p>SSC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedOnScroll>
            </div>
            <div className="col-lg-4 col-12 mt-3 main-col">
              <AnimatedOnScroll animationIn="fadeInDownBig">
                <div className="main-card card">
                  <div className="card-body main-card">
                    <div style={{ display: "flex" }}>
                      <div className="">
                        <h4 style={{ marginTop: "15px" }}>{progress5}</h4>
                      </div>
                      <div
                        className="mx-3"
                        style={{
                          borderLeft: "1px solid gray",
                          paddingLeft: "25px",
                        }}
                      >
                        <h6>Prakash Junior Collage Adyal</h6>
                        <p>HSC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedOnScroll>
            </div>
            <div className="col-lg-4 col-12 mt-3 main-col">
              <AnimatedOnScroll animationIn="fadeInDownBig">
                <div className="card main-card">
                  <div className="card-body main-body">
                    <div style={{ display: "flex" }}>
                      <div>
                        <h4 style={{ marginTop: "15px" }}>{progress7}</h4>
                      </div>
                      <div
                        className="mx-3"
                        style={{
                          borderLeft: "1px solid gray",
                          paddingLeft: "25px",
                        }}
                      >
                        <h6>Jhulelal Institute Of Technology</h6>
                        <p>Graduation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-5">
        <div className="row mt-3">
          <div className="col-12 text-center">
            <h6 className="mb-5 mt-3">PAPER PUBLICATION - (Review Paper) </h6>
            <span>
              <p>
                Design of a water & soil classification model for satellite
                images via the machine learning process.
              </p>
            </span>
            <p style={{ color: "var(--qualification-color-p)" }}>
              Vol. 1 No. 1 (2023) : Proceedings of INSCIRD- 2023{" "}
            </p>
            <p style={{ color: "var(--qualification-color-p)" }}>
              <span style={{ color: "var(--main-color)" }}>Published :</span>{" "}
              2023-07-03
            </p>
            <p style={{ color: "var(--qualification-color-p)" }}>
              <span style={{ color: "var(--main-color)" }}>Page no. :</span>{" "}
              25-28
            </p>
            <AnimatedOnScroll animationIn="bounceInLeft">
              <p>
                {" "}
                <span
                  style={{
                    color: "var(--main-color)",
                    textTransform: "uppercase",
                    borderBottom: "1px solid var(--main-color)",
                  }}
                >
                  {" "}
                  Author : Nandini Deshpande
                </span>{" "}
              </p>
            </AnimatedOnScroll>

            <AnimatedOnScroll animationIn="bounceInLeft">
              <Link to={"https://ssgmjournal.in"} className="m mb-5">
                Go to page <FaExternalLinkAlt />
              </Link>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>

      <section className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-6 p-3">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <span>
                Developers write code but good developers write code with proper
                comments.
              </span>

              <p>- Nandini Deshpande</p>
            </AnimatedOnScroll>
          </div>
          <div className="col-sm-6 p-3">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <Link className="n" to={"/"}>
                <BiHomeAlt /> Home
              </Link>
              <Link className="n mx-3" to={"/certificates"}>
                <TbCertificate /> Certificates
              </Link>
              <Link className="n" to={"/projects"}>
                <GoProject /> Projects
              </Link>
              <br />
              <br />
              <h5>Lets' Connect On : </h5>
              <Link
                to="mailto:deshpanden2001@gmail.com"
                className="mt-2 a"
                style={{
                  fontSize: "23px",
                  borderBottom: "2px solid var(--main-color)",
                }}
              >
                Mail
              </Link>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
