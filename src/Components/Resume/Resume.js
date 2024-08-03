import React from 'react'
import Navigation from '../Navigation/Navigation'
import { BsEye } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa'
import Footer from '../Footer/Footer'

export default function Resume() {
  return (
   <>
    {/* navigation starts */}
     <Navigation/>
     {/* navigation ends */}
     
       <section className='' style={{marginTop:"190px",paddingBottom:"105px"}}>
         <div className='container text-center'>
        <div className='row'>
           <div className='col-12'>
           <a href='resume.pdf' className='a'>VIEW CV <BsEye/></a>
           <a href='resume.pdf' download={"Nandini-Deshpande-CV"} className='a mx-sm-5 mx-3'>DOWNLOAD CV <FaDownload/></a>
           </div>
        </div>
         </div>
      </section>

      <Footer/>
   </>
  )
}
