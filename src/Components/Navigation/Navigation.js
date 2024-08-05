import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Navigation/Navigation.css";
import { FaGithub } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { MdDarkMode, MdOutlineContactPhone } from "react-icons/md";
import { SiCountingworkspro } from "react-icons/si";
import { TbInfoHexagon } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { RxDropdownMenu } from "react-icons/rx";

export default function Navigation() {
  const [on,setOn]=useState(false||true);
  const [state,setState]=useState('light-theme');


      useEffect(()=>{
       const savethem=localStorage.getItem('theme');
       if(savethem){
        setState(savethem);
        document.body.className=savethem;
       }
      },[])

      const toogleTheme=()=>{
              const newTheme=state==='light-theme'?'dark-theme':'light-theme';
              setState(newTheme);
              document.body.className=newTheme;
              localStorage.setItem('theme',newTheme);
      }

 console.log(on);
  
  const Links = [
    { name: "Home", to: "/", logo: <IoHomeOutline /> },
    { name: "About", to: "/about", logo: <TbInfoHexagon /> },
    { name: "Projects", to: "/projects", logo: <SiCountingworkspro /> },
    {
      name: "Contact",
      to: "/contact",
      logo: <MdOutlineContactPhone style={{ fontSize: "20px" }} />,
    },
    {
      name: "Resume",
      to: "/resume",
      logo: <TbFileCv style={{ fontSize: "21px" }} />,
    },
  ];

  return (
    <>
      {/* naviagtion starts */}

      <nav
        className="navbar navbar-expand-lg pb-3"
        style={{
          boxShadow: "var(--border-navbar-shadow)",
          top: "0",
          right: "0",
          position: "fixed",
          width: "100%",
          zIndex: "1000",
          height: "95px",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src="/img/logo3.jpeg"
              style={{ height: "54px", marginRight: "0" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            style={{backgroundColor:"var(--main-back-color)"}}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <RxDropdownMenu style={{color:"var(--main-color)"}}/>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Links.map((value, id) => (
                <li className="nav-item" key={id}>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={value.to}
                  >
                    {value.logo} {value.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <form className="d-flex" onSubmit={(e)=>{e.preventDefault()}}>
            <Link
              to="https://github.com/nandini2001d/ "
              className="mx-2 n"
              style={{ fontSize: "18px" }}
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/feed/?nis=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSr2pNgI8RoObqA%2BVRadxPA%3D%3D"
              className="mx-2 n"
              style={{ fontSize: "18px" }}
            >
              <FaLinkedin />
            </Link>
            <Link
              to="mailto:deshpanden2001@gmail.com"
              className="mx-2 n"
              style={{ fontSize: "18px",borderRight:"2.5px solid var(--main-color)",paddingRight:"10px"}}
            >
              <IoMailOpen />
            </Link>
            {/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" 
  onClick={togglebtn} id="flexSwitchCheckDefault"/>
  <ToggleButton htmlFor="flexSwitchCheckDefault"/>
</div> */}
                      {
                        localStorage.getItem('theme')==='light-theme'
                        ?<CiLight className="n"
                        style={{ fontSize: "25px" ,marginTop:"3px",fontWeight:"bold"}} onClick={toogleTheme} />
                        :<MdDarkMode className=" n"
                        style={{ fontSize: "25px" ,marginTop:"3px",fontWeight:"bold"}} onClick={toogleTheme}/>
                      }
                      
          </form>
        </div>
      </nav>

      {/* navigation ends */}
    </>
  );
}
