import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import Qualifications from "./Qualifications/Qualifications";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Technology from "./Technology/Technology";
import Projects from "./Projects/Projects";
import Footer from "../Footer/Footer";

export default function Home() {
  useEffect(()=>{
          window.scroll(0,0)
  },[])
  return (
    <>
      {/* navigation starts */}
      <Navigation />
      {/* navigation ends */}

      <section style={{backgroundColor:"rgb(248, 245, 245)",paddingBottom:"130px"}}>
      <div className="custom" style={{ marginTop: "100px" }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="container" style={{ marginTop: "150px"}}>
        <div className="row text-center">
          <div className="col-md-12 text-center">
            {/* <h1 style={{fontWeight:"bold",fontSize:"60px"}}>hello !</h1> */}
         <AnimatedOnScroll animationIn="fadeInDownBig">
         <div className="content">
              <h2>hello !</h2>
              <h2>hello !</h2>
            </div>
         </AnimatedOnScroll>
            <div className="t">
              <h4>
                <span> Welcome </span> <span> to </span> <span> my </span> <span> world </span> <span> !!!! </span>
              </h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
      </section>

      <div className="container">
        <div className="row">
          <p className="text-center mt-5">ABOUT ME</p>

          <div className="col-lg-6 col-sm-12 text-center">
            <div className="img">
              <div>
                <div className="card-body">
                  <img
                    src="/img/nandini-image.jpeg"
                    style={{
                      maxHeighth: "100%",
                      maxWidth: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="data mt-5">
              <h1>I AM</h1>
              <h1>NANDINI RAJU DESHPANDE</h1>
              <p className="mt-5 text-left">
                I am java full stack developer and i am good in Fronted as well
                as the Backend technologies and also i have knowledge about the
                MySQL database as well as i have others skills like GitHub ,
                Docker file , project deployment etc.
              </p>
              <Link className="text-white" to={"/about"}>
                <button
                  type="submit"
                  style={{ width: "100px" }}
                  className="btn btn-dark mt-5"
                >
                  More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section>
           <div className="row">
           <div className="col-lg-6 col-sm-12 text-center mt-5" style={{maxWidth:"100%",padding:"0",margin:"0",objectFit:"contain"}}>

<AnimatedOnScroll
      animationIn="bounceInLeft"
  >  
      <img
        src="img/clg1.jpeg"
        style={{ maxHeight: "100%", maxWidth: "100%" ,objectFit:"cover"}}
      />
    
     
  </AnimatedOnScroll>

</div>

<div className="col-lg-6 col-sm-12 text-center mt-lg-5 mt-3" style={{maxWidth:"100%",padding:"0",margin:"0",objectFit:"contain"}}>

<AnimatedOnScroll
      animationIn="bounceInLeft"
  >  
      <img
        src="img/clg2.jpeg"
        style={{ maxHeight: "100%", maxWidth: "100%" ,objectFit:"cover"}}
      />
    
     
  </AnimatedOnScroll>

</div>
           </div>
      </section>
       
       <Qualifications/>

       <Technology/>

       <Projects/>

       <Footer/>

    </>
  );
}
