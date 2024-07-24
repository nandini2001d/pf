import React, { useState } from 'react'
import { FaCopyright, FaFacebook, FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { SiInstagram } from 'react-icons/si'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'
import { MdCopyright } from 'react-icons/md'
import { TbCopyright } from 'react-icons/tb'

export default function Footer() {

    const [color,seColour]=useState("");

    const constColor={

        color:"black",
        fontSize:"25px"
    }

  return (
   <>
   
   <div className='container-fluid p-4 text-center' style={{backgroundColor:"black"}}>
      
      <div className='row mt-5 text-center'>
                  
                  <div className='mt-3 mb-4 text-center'>
                             

<span><Link to='mailto:deshpanden2001@gmail.com '
                        className='mx-3' style={{fontSize:"25px"}}><IoMail/></Link>
<Link to='https://www.linkedin.com/feed/?nis=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSr2pNgI8RoObqA%2BVRadxPA%3D%3D'
                        className='mx-3' style={{fontSize:"25px"}}><FaLinkedin/></Link>
                    <Link to='https://github.com/nandini2001d/'
                        className='mx-3' style={{fontSize:"25px"}}><FaGithub/></Link>
                    <Link to='https://www.instagram.com/_its__nandini_?igsh=MWNodzRoa2k3OGx3dw== '
                        className='mx-3' style={{fontSize:"25px"}}><FaInstagramSquare/></Link>
                    <Link to='https://www.facebook.com/nandini.deshpande.330?mibextid=ZbWKwL '
                        className='mx-3' style={{fontSize:"25px"}}><FaFacebook/></Link></span>
                       
                  </div>

                  <div className='copyright mt-5 text-center'>
                      <p style={{color:"darkgrey",marginTop:"30px"}}><TbCopyright style={{fontSize:"18px"}}/> 2024 ALL RIGHTS RESERVED <span className='text-white' style={{fontWeight:"bold",borderBottom:"1px solid white"}}> NANDINI DESHPANDE</span></p>
                  </div>

                  <div className='mt-3 mb-4 text-center'>
                  <span><Link to={"/"} className='mx-3' style={{fontSize:"14px"}}>Home  |  </Link> 
                    <Link to={"/about"} className='mx-3' style={{fontSize:"14px"}}>About  |  </Link> 
                    <Link to={"/projects"} className='mx-3' style={{fontSize:"14px"}} >Projects  |  </Link>
                    <Link to={"/contact"} className='mx-3' style={{fontSize:"14px"}}>Contact  |  </Link>
                    <Link to={"/resume"} className='mx-3' style={{fontSize:"14px"}} >Resume  |  </Link></span>
                  </div>
      </div>

   </div>
   
   </>
  )
}
