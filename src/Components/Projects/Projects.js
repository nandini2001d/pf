import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  
  const [state,setState]=useState('F');

  return (
    <>
      {/* navigation starts */}
      <Navigation />
      {/* navigation ends */}

      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row mt-5 text-center">
          <div className="col-sm-4 p-2">
            <button type="submit" className="btn btn-secondary" onClick={()=>{setState('F')}}
              style={state==="F"?{backgroundColor:"blue"}:{backgroundColor:"rgb(97, 97, 193)"}}>
              Frontend Project
            </button>
          </div>
          <div className="col-sm-4 p-2">
            <button type="submit" className="btn btn-secondary" onClick={()=>{setState('B')}}
               style={state==="B"?{backgroundColor:"blue"}:{backgroundColor:"rgb(97, 97, 193)"}}>
              Backend Project
            </button>
          </div>
          <div className="col-sm-4 p-2">
            <button type="submit" className="btn btn-secondary" onClick={()=>{setState('F-B')}}
               style={state==="F-B"?{backgroundColor:"blue"}:{backgroundColor:"rgb(97, 97, 193)"}}>
              Frontend+Backend{" "}
            </button>
          </div>
        </div>
      </div>

      {
                
                state==='F'?      
                <div className="container mt-5 main-container">
                <div className="row main-row">
                  <div className="col-lg-6 main-col mt-4">
                    <div className="card main-card">
                      <div className="card-header text-center">
                        <span>
                          <h5>HOTEL WEBSITE</h5>
                        </span>
                        <br />
                      </div>
                      <div className="card-body main-card-body">
                        <img src="img/hotelp.png" />
                        <br />
                        <span style={{ fontSize: "15px ", marginTop: "10px" }}>
                          <span style={{ fontWeight: "bold" }}>TOOLS : </span> HTML ,
                          CSS , JavaScript , Bootstrap{" "}
                        </span>
                        <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                          <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                          This website is totally responcive and it includes the
                          frontend technologies.
                        </p>
        
                        <video
                          controls
                          height="350"
                          width="100%"
                          style={{ objectFit: "cover" }}
                          className="mb-3"
                        >
                          <source src="/ved/hotelr.mp4" type="video/mp4"></source>
                          <p>You can see this project video here </p>
                        </video>
        
                        <AnimatedOnScroll animationIn="bounceInLeft">
                          <Link
                            to="https://with-nandini-hotel.netlify.app/"
                            className="a"
                          >
                            Go to page <FaExternalLinkAlt />
                          </Link>
                        </AnimatedOnScroll>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 main-col  mt-4">
                    <div className="card main-card">
                      <div className="card-header text-center">
                        <span>
                          <h5>CALCULATOR</h5>
                        </span>
                        <br />
                      </div>
                      <div className="card-body main-card-body">
                        <img src="img/cal.png" style={{ height: "35px" }} />
                        <br />
                        <span style={{ fontSize: "15px ", marginTop: "10px" }}>
                          <span style={{ fontWeight: "bold" }}>TOOLS : </span> ReactJS ,
                          TypeScript{" "}
                        </span>
                        <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                          <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span> In
                          this project we create the calcultor which is exact copy of
                          the orignal calculator and also all mathematical oprations are
                          done in the same manner.{" "}
                        </p>
        
                        <video
                          controls
                          height="328"
                          width="100%"
                          style={{ objectFit: "cover" }}
                          className="mb-3"
                        >
                          <source src="/ved/calculatorr.mp4" type="video/mp4"></source>
                          <p>You can see this project video here </p>
                        </video>
        
                        <AnimatedOnScroll animationIn="bounceInLeft">
                          <Link
                            to="https://with-nandini-calculator.netlify.app/"
                            className="a"
                          >
                            Go to page <FaExternalLinkAlt />
                          </Link>
                        </AnimatedOnScroll>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 main-col  mt-4">
                    <div className="card main-card">
                      <div className="card-header text-center">
                        <span>
                          <h5>FOOD WEBSITE</h5>
                        </span>
                        <br />
                      </div>
                      <div className="card-body main-card-body">
                        <img src="img/foodgrill.png" />
                        <br />
                        <span style={{ fontSize: "15px ", marginTop: "10px" }}>
                          <span style={{ fontWeight: "bold" }}>TOOLS : </span> HTML ,
                          CSS , JavaScript , Bootstrap{" "}
                        </span>
                        <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                          <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span> In
                          this project we create the food website which is totally
                          responcive.{" "}
                        </p>
        
                        <video
                          controls
                          height="336"
                          width="100%"
                          style={{ objectFit: "cover" }}
                          className="mb-3"
                        >
                          <source src="/ved/foodgrillr.mp4" type="video/mp4"></source>
                          <p>You can see this project video here </p>
                        </video>
        
                      
                          <Link
                            to="https://with-nandini-food.netlify.app/"
                            className="a">
                            Go to page <FaExternalLinkAlt />
                          </Link>
                     
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 main-col  mt-4">
                    <div className="card main-card">
                      <div className="card-header text-center">
                        <span>
                          <h5>COFFEE WEBSITE</h5>
                        </span>
                        <br />
                      </div>
                      <div className="card-body main-card-body">
                        <img src="img/coffee.png" />
                        <br />
                        <span style={{ fontSize: "15px ", marginTop: "10px" }}>
                          <span style={{ fontWeight: "bold" }}>TOOLS : </span> HTML ,
                          CSS , JavaScript{" "}
                        </span>
                        <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                          <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span> In
                          this project we create the food website which is totally
                          responcive.{" "}
                        </p>
        
                        <video
                          controls
                          height="328"
                          width="100%"
                          style={{ objectFit: "cover" }}
                          className="mb-3"
                        >
                          <source src="/ved/coffeer.mp4" type="video/mp4"></source>
                          <p>You can see this project video here </p>
                        </video>
        
                       
                          <Link
                            to="https://with-nandini-coffee.netlify.app/"
                            className="a"
                          >
                            Go to page <FaExternalLinkAlt />
                          </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              :
              state==='B'?    
               <div className="container mt-5 main-container">
              <div className="row main-row">
                <div className="col-lg-6 main-col mt-4">
                  <div className="card main-card">
                    <div className="card-header text-center">
                      <span>
                        <h5>E-Notes</h5>
                      </span>
                      <br />
                    </div>
                    <div className="card-body main-card-body">
                      <img src="img/enotesp.png" />
                      <br />
                      <span style={{ fontSize: "15px ", marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>TOOLS : </span> Spring , Spring MVC , Spring JDBC , JSP , Bootstrap , sql
                      </span>
                      <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>{" "}
                        In this website one module is present which is customer module where customer firstly ragister and after registration customer can be login and add notes and also update notes and its login details also can be update.
                      </p>
      
                      {/* <video
                        controls
                        height="350"
                        width="100%"
                        style={{ objectFit: "cover" }}
                        className="mb-3"
                      >
                        <source src="/ved/hotelr.mp4" type="video/mp4"></source>
                        <p>You can see this project video here </p>
                      </video> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 main-col  mt-4">
                  <div className="card main-card">
                    <div className="card-header text-center">
                      <span>
                        <h5>JOB PORTAL</h5>
                      </span>
                      <br />
                    </div>
                    <div className="card-body main-card-body">
                      <img src="img/jobportal.png"/>
                      <br />
                      <span style={{ fontSize: "15px ", marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>TOOLS : </span> Spring , JSP , Bootstrap , sql{" "}
                      </span>
                      <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span>  In this website two module are present which is customer module and admin module <br/>
                        where customer firstly ragister and after registration customer can be login and view jobs which is added by the admin and after customer can also filter the jobs accourding to the location<br/>
                        In admin module admin can be first login after login it can be added jobs and only active jobs can be seen by the customer and also admin can be update jobs{" "}
                      </p>
      
                      {/* <video
                        controls
                        height="328"
                        width="100%"
                        style={{ objectFit: "cover" }}
                        className="mb-3"
                      >
                        <source src="/ved/jobportalr.mp4" type="video/mp4"></source>
                        <p>You can see this project video here </p>
                      </video> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 main-col  mt-4">
                  <div className="card main-card">
                    <div className="card-header text-center">
                      <span>
                        <h5>PHONE-BOOKE-AAP</h5>
                      </span>
                      <br />
                    </div>
                    <div className="card-body main-card-body">
                      <img src="img/phonebbook.png"/>
                      <br />
                      <span style={{ fontSize: "15px ", marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>TOOLS : </span>  Servlet , JDBC , JSP , Bootstrap , sql{" "}
                      </span>
                      <p style={{ fontSize: "15px ", marginTop: "10px" }}>
                        <span style={{ fontWeight: "bold" }}>DESCRIPTION : </span> In this website one module is present which is customer module where customer firstly ragister and after registration customer can be login and add new contact and also update contact and its login details also can be update. {" "}
                      </p>
      
                      <video
                        controls
                        height="328"
                        width="100%"
                        style={{ objectFit: "cover" }}
                        className="mb-3"
                      >
                        <source src="/ved/addc.mp4" type="video/mp4"></source>
                        <p>You can see this project video here </p>
                      </video> 
                    </div>
                  </div>
                </div>
               
    
              </div>
            </div>
            :
            ""

      }

      

       {/* backend technologies */}

 

    </>
  );
}
