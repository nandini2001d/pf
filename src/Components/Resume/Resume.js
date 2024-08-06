import React from "react";
import Navigation from "../Navigation/Navigation";
import { BsEye } from "react-icons/bs";
import { FaDownload, FaHome } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { GoProject } from "react-icons/go";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default function Resume() {
  return (
    <>
      {/* navigation starts */}
      <Navigation />
      {/* navigation ends */}

      <section className="" style={{ height: "100vh" }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12" style={{ marginTop: "320px" }}>
              <AnimatedOnScroll animationIn="bounceInLeft">
                <a href="Nandini-Deshpande-CV.jpeg" target="_blank" className="n">
                  <BsEye /> VIEW CV
                </a>
                <a
                  href="Nandini-Deshpande-CV.pdf"
                  download={"Nandini-Deshpande-CV"}
                  className="n mx-sm-5 mx-3"
                >
                  <FaDownload /> DOWNLOAD CV
                </a>
              </AnimatedOnScroll>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            backgroundColor: "var(--main-back-color)",
          }}
        >
          <div className="container-fluid mt-4 mb-3">
            <div className="row">
              <div className="col-12 text-center">
                <Link to={"/"} className="n">
                  <FaHome /> Home
                </Link>
                <Link to={"/"} className="n mx-3">
                  <GoProject /> Projects
                </Link>
                <Link to={"/contact"} className="n">
                  <MdContactPage /> Contact
                </Link>
                <br />
                <Link className="n" to={"mailto:deshpande2001@gmail.com"}>
                  deshpande2001@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
