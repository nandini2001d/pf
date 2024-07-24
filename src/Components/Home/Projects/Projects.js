import React from "react";
import { IoCall, IoMailOpen } from "react-icons/io5";
import { Link } from "react-router-dom";
import '../Projects/Project.css'
import { FaArrowCircleUp, FaLink } from "react-icons/fa";

export default function Projects() {
  return (
    <>
     <section style={{backgroundColor:"rgb(248, 245, 245)",paddingBottom:"80px"}}>
     <div className="container main-container">
        <div className="row text-center main-row">
          <p className="mb-5 mt-5 text-center">MY PROJECTS</p>

          <div className="col-lg-3 col-sm-6 main-col pb-3">
            <div className="card main-card">
              <div className="card-body main-body p-3">
                <h5 style={{fontWeight:"bold", marginBottom:"20px"}}>Hotel Website</h5>
                <img src="img/hotelp.png" />
                <br />
                <br />
                <Link to="https://with-nandini-hotel.netlify.app/ "className="a" >
                  Go to website <FaLink/>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 main-col pb-3">
            <div className="card main-card">
              <div className="card-body main-body p-3">
                <h5 style={{fontWeight:"bold",marginBottom:"20px"}}>Calculator</h5>
                <img src="img/cal.png" style={{ height: "35px" }} />
                <br />
                <br />
                <Link to="https://with-nandini-calculator.netlify.app/ " className="a">
                  Go to website <FaLink/>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 main-col pb-3">
            <div className="card main-card">
              <div className="card-body main-body p-3">
                <h5 style={{fontWeight:"bold",marginBottom:"20px"}}>Food Website</h5>
                <img src="img/foodgrill.png" />
                <br />
                <br />
                <Link to="https://with-nandini-food.netlify.app/ " className="a">
                  Go to website <FaLink/>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 main-col pb-3">
            <div className="card main-card">
              <div className="card-body main-body p-3">
                <h5 style={{fontWeight:"bold",marginBottom:"20px"}}>Coffee website</h5>
                <img src="img/coffee.png" />
                <br />
                <br />
                <Link to="https://with-nandini-coffee.netlify.app/" className="a">
                  Go to website <FaLink/>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to={"/projects"}>
              <button type="submit" className="btn btn-dark">
                Know More
              </button>
            </Link>
          </div>
          <div className="info text-center mt-5">
            <p>
              For source code or any information about projects!!!<br />
              <a
                className="text-dark"
                style={{ textDecoration: "none" }}
                href="mailto:deshpanden2001@gmail.com"
              >
                <IoMailOpen />
                --me
              </a>
              | <IoCall />
              <span style={{ fontWeight: "bold" }}>91-8010649831</span>
            </p>
          </div>
        </div>
      </div>
     </section>
    </>
  );
}
