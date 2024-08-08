import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";
import "../Projects/P.css";
import Footer from "../Footer/Footer";
import { IoCall, IoMailOpenOutline } from "react-icons/io5";
import app from "../../firebase/firebase";
import { getDatabase, push, ref, set } from "firebase/database";
import { toast } from "react-toastify";
import { TbPhoneOutgoing, TbPhotoPentagon } from "react-icons/tb";
import { BsMailbox, BsMailbox2Flag } from "react-icons/bs";
import { BiCertification, BiHome, BiMailSend } from "react-icons/bi";
import { CiHome, CiMail } from "react-icons/ci";

export default function Projects() {
  const [state, setState] = useState("F");
  const [email, setEmail] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const getEmail = async (e) => {
    e.preventDefault();

    const db = getDatabase(app);
    const newRef = push(ref(db, "pf/email"));
    set(newRef, {
      email: email,
    })
      .then(() => {
        toast.success("I will contact you shortly, Thank You !!!");
        setEmail("");
      })
      .catch((errer) => {
        toast.error("errer");
      });
  };

  return (
    <>
      {/* navigation starts */}
      <Navigation />
      {/* navigation ends */}

      <div
        className="container-fluid p-4"
        style={{
          position: "fixed",
          zIndex: "500",
          backgroundColor: "var(--main-section-color)",
          marginBottom: "100px",
        }}
      >
        <div className="row mt-4 text-center">
          <span className="mt-2">Projects by Nandini Deshpande</span>
          <h6 className="mb-1">Project Portfolio</h6>
          <div className="col-sm-4 p-2">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={() => {
                setState("F");
                window.scroll(0, 0);
              }}
              style={
                state === "F"
                  ? { backgroundColor: "rgb(70, 70, 219)" }
                  : { backgroundColor: "rgb(97, 97, 193)" }
              }
            >
              Frontend Project
            </button>
          </div>
          <div className="col-sm-4 p-2">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={() => {
                setState("B");
                window.scroll(0, 0);
              }}
              style={
                state === "B"
                  ? { backgroundColor: "rgb(70, 70, 219)" }
                  : { backgroundColor: "rgb(97, 97, 193)" }
              }
            >
              Backend Project
            </button>
          </div>
          <div className="col-sm-4 p-2">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={() => {
                setState("m");
                window.scroll(0, 0);
              }}
              style={
                state === "m"
                  ? { backgroundColor: "rgb(70, 70, 219)" }
                  : { backgroundColor: "rgb(97, 97, 193)" }
              }
            >
              Frontend+Backend{" "}
            </button>
          </div>
        </div>
      </div>

      {state === "F" && (
        <div className="container mt-5 main-container">
          <div className="row main-row c">
            <div className="col-lg-6 main-col mt-4">
              <div className="card main-card p-2 pro">
                <div className="card-header text-center">
                  <span>
                    <h5>HOTEL WEBSITE</h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img src="img/hotelp.png" alt="hotel" />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> HTML ,
                    CSS , JavaScript , Bootstrap{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    This website is totally responcive and it includes the
                    frontend technologies.
                  </p>

                  <video
                     autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                    height="350"
                    width="100%"
                    style={{ objectFit: "cover" }}
                    className="mb-3"
                    
                  >
                    <source src="ved/hotelr.mp4" type="video/mp4"></source>
                    <p>You can see this project video here </p>
                  </video>

                  <div className="text-center">
                    <AnimatedOnScroll animationIn="bounceInLeft">
                      <Link
                        to="https://with-nandini-hotel.netlify.app/"
                        className="a"
                      >
                        https://with-nandini-hotel.netlify.app/{" "}
                        <FaExternalLinkAlt />
                      </Link>
                    </AnimatedOnScroll>
                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 main-col  mt-4">
              <div className="card main-card p-2 pro p-2 p-2">
                <div className="card-header text-center">
                  <span>
                    <h5>CALCULATOR</h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img
                    src="img/cal.png"
                    style={{ height: "35px" }}
                    alt="calculator"
                  />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> ReactJS
                    , TypeScript{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    In this project I create the calcultor which is exact copy
                    of the orignal calculator and also all mathematical
                    oprations are done in the same manner.{" "}
                  </p>

                  <video
                     autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                    height="328"
                    width="100%"
                    style={{ objectFit: "cover" }}
                    className="mb-3"
                    
                  >
                    <source
                      src="ved/calculatorr.mp4"
                      type="video/mp4"
                    ></source>
                    <p>You can see this project video here </p>
                  </video>
                  <div className="text-center">
                    <AnimatedOnScroll animationIn="bounceInLeft">
                      <Link
                        to="https://with-nandini-calculator.netlify.app/"
                        className="a"
                      >
                        https://with-nandini-calculator.netlify.app/{" "}
                        <FaExternalLinkAlt />
                      </Link>
                    </AnimatedOnScroll>
                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 main-col  mt-4">
              <div className="card main-card p-2 pro p-2 p-2">
                <div className="card-header text-center">
                  <span>
                    <h5>FOOD WEBSITE</h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img src="img/foodgrill.png" alt="food-grill" />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> HTML ,
                    CSS , JavaScript , Bootstrap{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    In this project I create the food website which is totally
                    responcive.{" "}
                  </p>

                  <video
                     autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                    height="336"
                    width="100%"
                    style={{ objectFit: "cover" }}
                    className="mb-3"
                    
                  >
                    <source src="ved/foodgrillr.mp4" type="video/mp4"></source>
                    <p>You can see this project video here </p>
                  </video>
                  <div className="text-center">
                    <AnimatedOnScroll animationIn="bounceInLeft">
                      <Link
                        to="https://with-nandini-food.netlify.app/"
                        className="a"
                      >
                        https://with-nandini-food.netlify.app/{" "}
                        <FaExternalLinkAlt />
                      </Link>
                    </AnimatedOnScroll>
                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 main-col  mt-4">
              <div className="card main-card p-2 pro p-2 p-2">
                <div className="card-header text-center">
                  <span>
                    <h5>COFFEE WEBSITE</h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img src="img/coffee.png" alt="coffee" />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> HTML ,
                    CSS , JavaScript{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    In this project I create the food website which is totally
                    responcive.{" "}
                  </p>

                  <video
                     autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                    height="328"
                    width="100%"
                    style={{ objectFit: "cover" }}
                    className="mb-3"
                    
                  >
                    <source src="ved/coffeer.mp4" type="video/mp4"></source>
                    <p>You can see this project video here </p>
                  </video>
                  <div className="text-center">
                    <AnimatedOnScroll animationIn="bounceInLeft">
                      <Link
                        to="https://with-nandini-coffee.netlify.app/"
                        className="a"
                      >
                        https://with-nandini-coffee.netlify.app/{" "}
                        <FaExternalLinkAlt />
                      </Link>
                    </AnimatedOnScroll>

                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {state === "B" && (
        <div className="container mt-5 main-container">
          <div className="row main-row c">
            <div className="col-lg-6 main-col  mt-4">
              <div className="card main-card p-2 pro p-2 p-2">
                <div className="card-header text-center">
                  <span>
                    <h5>JOB PORTAL</h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img src="img/jobportal.png" alt="jobportal" />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> Spring
                    , JSP , Bootstrap , sql{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    In this website two module are present which is customer
                    module and admin module <br />
                    where customer firstly ragister and after registration
                    customer can be login and view jobs which is added by the
                    admin and after customer can also filter the jobs accourding
                    to the location
                    <br />
                    In admin module admin can be first login after login it can
                    be added jobs and only active jobs can be seen by the
                    customer and also admin can be update jobs{" "}
                  </p>

                  <video
                     autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                    height="328"
                    width="100%"
                    style={{ objectFit: "cover" }}
                    className="mb-3"
                    
                  >
                    <source src="ved/jobportalr.mp4" type="video/mp4"></source>
                    <p>You can see this project video here </p>
                  </video>
                  <div className="text-center">
                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 main-col  mt-4">
              <div className="card main-card p-2 pro p-2 p-2">
                <div className="card-header text-center">
                  <span>
                    <h5>PHONE-BOOKE-AAP</h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img src="/img/phonebbook.png" alt="phonebook" />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> Servlet
                    , JDBC , JSP , Bootstrap , sql{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    In this website one module is present which is customer
                    module where customer firstly ragister and after
                    registration customer can be login and add new contact and
                    also update contact and its login details also can be
                    update.{" "}
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <video
                     autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                    
                    height="330"
                    width="100%"
                    style={{ objectFit: "cover" }}
                    className="mb-3 m"
                  >
                    <source src="ved/addc.mp4" type="video/mp4"></source>
                    <p>You can see this project video here </p>
                  </video>
                  <div className="text-center">
                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 main-col mt-4">
              <div className="card main-card p-2 pro p-2 p-2">
                <div className="card-header text-center">
                  <span>
                    <h5>E-Notes</h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img src="img/enotesp.png" alt="enotes" />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> Spring
                    , Spring MVC , Spring JDBC , JSP , Bootstrap , sql
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    In this website one module is present which is customer
                    module where customer firstly ragister and after
                    registration customer can be login and add notes and also
                    update notes and its login details also can be update.
                  </p>
                  <div className="text-center">
                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>

                  {/* <video
                         autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                        height="350"
                        width="100%"
                        style={{ objectFit: "cover" }}
                        className="mb-3"
                      >
                        <source src="ved/hotelr.mp4" type="video/mp4"></source>
                        <p>You can see this project video here </p>
                      </video> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {state === "m" && (
        <div className="container mt-5 main-container">
          <div className="row main-row c">
            <div className="col-lg-6 main-col  mt-4">
              <div className="card main-card p-2 pro p-2 p-2">
                <div className="card-header text-center">
                  <span>
                    <h5 style={{ textTransform: "uppercase" }}>TODO-LIST</h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img src="img/todo-list.png" alt="todo-list" />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "20px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> ReactJS
                    , Bootstrap5 , Firebase , Firebase-Realtime-Database{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    In this project I used firebase authentication and also I
                    used realtime firebase database to stored the data. In that
                    only one module is present which is user module . Firstly
                    user can sign in after sign in user sign up and after that
                    they can add the todo-list and also update and delete
                    todo-list as well as the can select that list as fevorite as
                    well as complete.{" "}
                  </p>

                  <video
                     autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                    height="338"
                    width="100%"
                    style={{ objectFit: "cover", marginTop: "45px" }}
                    className="mb-3"
                  >
                    <source src="ved/todo-list.mp4" type="video/mp4"></source>
                    <p>You can see this project video here </p>
                  </video>
                  <div className="text-center">
                    <AnimatedOnScroll animationIn="bounceInLeft">
                      <Link
                        to="https://firbaseloginrect.vercel.app/"
                        className="a"
                      >
                        https://firbaseloginrect.vercel.app/{" "}
                        <FaExternalLinkAlt />
                      </Link>
                    </AnimatedOnScroll>

                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 main-col  mt-4">
              <div className="card main-card p-2 pro p-2 p-2">
                <div className="card-header text-center">
                  <span>
                    <h5 style={{ textTransform: "uppercase" }}>
                      Multi Restaurant food ordering system
                    </h5>
                  </span>
                  <br />
                </div>
                <div className="card-body main-card-body">
                  <img src="img/foodgrill1.png" alt="food-grill" />
                  <br />
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>TOOLS : </span> for
                    frontend = ReactJS , for background = Spring Boot , Database
                    = MYSQL{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>MODULES : </span> 1)
                    Restaurant 2) Delivery Boy 3) Admin 4) Customer{" "}
                  </p>
                  <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                    Using these project restaurants can add their food and
                    customers can buy that food and then restaurant assigned
                    their delivery boy for that food and then deliver Boy can
                    updated the delivery status as they delivered the food to
                    the customer and then customer can add the review to that
                    food.{" "}
                  </p>

                  <video
                     autoPlay="true" controls loading="lazy" preload="metadata" loop="1000"
                    height="382"
                    width="100%"
                    style={{ objectFit: "cover" }}
                    className="mb-3"
                    
                  >
                    <source src="ved/resurentr.mp4" type="video/mp4"></source>
                    <p>You can see this project video here </p>
                  </video>
                  <div className="text-center">
                    <p style={{ fontSize: "14px" }}>
                      If you want source code or more information about this
                      project <br />
                      <Link to={"/contact"} style={{ color: "blue" }}>
                        {" "}
                        Contact Me
                      </Link>{" "}
                      | <IoCall /> 91-8010649831
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="container mt-3 text-center"
        style={{ marginBottom: "90px" }}
      >
        <div className="row mt-5">
          <div className="col-sm-12">
            <AnimatedOnScroll animationIn="bounceInLeft">
              <p style={{ color: "blue" }}>Would love to work together</p>
            </AnimatedOnScroll>
            <h6 className="mb-5">
              Are you willing to contact with me? Let's build great things.{" "}
            </h6>
            <form onSubmit={getEmail}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="Enter your Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  style={{
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    paddingLeft: "14px",
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="button-addon2"
                >
                  START A PROJECT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="p-3">
        <div className="row">
          <div className="col-12 text-center">
            <span>
              <TbPhoneOutgoing /> 91- 8010 649 831
            </span>
            <br />
            <span>
              <Link to={"mailto:deshpanden2001@gmail.com"} className="n">
                <CiMail /> deshpanden2001@gmail.com
              </Link>
            </span>
            <br />
            <span>
              <Link className="n" to="https://pf-puce.vercel.app/">
                <FaLink /> https://pf-puce.vercel.app/
              </Link>
            </span>
            <br />
            <br />

            <Link className="n" to={"/"}>
              <BiHome /> Home
            </Link>
            <Link className="n mx-3" to={"/certificates"}>
              <BiCertification /> Certifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <Link className="a" to="https://pf-puce.vercel.app/"><FaLink /> https://pf-puce.vercel.app/</Link> */
}
