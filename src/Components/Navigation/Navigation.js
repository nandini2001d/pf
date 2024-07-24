import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Navigation/Navigation.css'
import { FaGithub} from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";
import { SiCountingworkspro } from "react-icons/si";
import { TbInfoHexagon } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";



export default function Navigation() {

    const Links=[
        {name:"Home",to:"/",logo:<IoHomeOutline/>},
        {name:"About",to:"/about",logo:<TbInfoHexagon/>},
        {name:"Projects",to:"/projects",logo:<SiCountingworkspro/>},
        {name:"Contact",to:"/contact",logo:<MdOutlineContactPhone style={{fontSize:"20px"}}/>},
        {name:"Resume",to:"/resume",logo:<TbFileCv style={{fontSize:"21px"}}/>}
    ]

  return (
    <>
        {/* naviagtion starts */}

  <nav className="navbar navbar-expand-lg navbar-light pb-3" style={{backgroundColor:"white",boxShadow:"2px 2px 3px rgba(201, 197, 197, 0.881)",top:"0",position:"fixed",width:"100%",zIndex:"1000",height:"120px"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#" style={{fontSize:"35px"}}><img src="/img/logo3.jpeg" style={{height:"63px", marginRight:"40px"}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        {
            Links.map((value,id)=>
            
        <li className="nav-item" key={id}>
          <NavLink className="nav-link" aria-current="page" to={value.to}>{value.logo} {value.name}</NavLink>
        </li>
            
        )
        }

      </ul>

      <form className="d-flex">
        <Link  to="https://github.com/nandini2001d/ " className='mx-3 n' style={{fontSize:"22px"}}><FaGithub /></Link>
        <Link  to="https://www.linkedin.com/feed/?nis=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSr2pNgI8RoObqA%2BVRadxPA%3D%3D" className='mx-3 n' style={{fontSize:"22px"}}><FaLinkedin /></Link>
        <Link  to="mailto:deshpanden2001@gmail.com" className='mx-3 n' style={{fontSize:"22px"}}><IoMailOpen /></Link>
      </form>
    </div>
  </div>
</nav>

        {/* navigation ends */}
    </>
  )
}
