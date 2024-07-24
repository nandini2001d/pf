import '../Qualifications/Qualifications.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex'}}>
      <CircularProgress variant="determinate" {...props}
       style={{height:"100px",width:"100px",color:"black"}} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" style={{color:"black",fontWeight:"bold",fontSize:"20px"}}>
          {`${props.value}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};


export default function Qualifications() {
    const [progress, setProgress] = React.useState(1);
    const [progress12, setProgress12] = React.useState(1);
    const [progress13, setProgress13] = React.useState(1);
    const [progress14, setProgress14] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 79.40 ? 79.40 : prevProgress + 1));
      setProgress12((prevProgress) => (prevProgress >= 61.08 ? 61.08 : prevProgress + 1));
      setProgress13((prevProgress) => (prevProgress >= 82 ? 82 : prevProgress + 1));
      setProgress14((prevProgress) => (prevProgress >= 90 ? 90 : prevProgress + 1));
    
    },300);
    
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <>
    
         <section style={{backgroundColor:"rgb(248, 245, 245)",paddingBottom:"20px"}}>
         <div className='container mt-5'>
              <div className='row text-center mt-3'>
                <p className='mb-5 mt-3'>QUALIFICATIONS</p>
                <div className='col-sm-6 col-xs-12 mt-4'>
                    <div className='card' style={{backgroundColor:"rgb(248, 245, 245)",border:"none"}}>
                         <div className='card-body'>
                               <div className='p'>
                               <CircularProgressWithLabel  value={progress}/>
                               </div>
                               <div className='data mt-4'>
                                      
                                      <h5>10th - Adyal Vidyalaya Adyal</h5>
                                      <span><p style={{fontSize:"14px",color:"gray"}}>Completed my 10th Boards with an <br/>
                                      aggregate of 79.40% in the year 2017.</p></span>
                               </div>
                         </div>
                    </div>
                </div>
                <div className='col-sm-6 col-xs-12 mt-4'>
                <div className='card' style={{backgroundColor:"rgb(248, 245, 245)",border:"none"}}>
                         <div className='card-body'>
                               <div className='p'>
                               <CircularProgressWithLabel  value={progress12}/>
                               </div>
                               <div className='data mt-4'>
                                      
                                      <h5>12th - Prakash Junior Collage Adyal</h5>
                                      <span>
                                      <p style={{fontSize:"14px",color:"gray"}}>In 2019 I Cleared my 12th with an<br/>
                                      aggregate Percentage 61.08%.</p>
                                      </span>
                                     
                               </div>
                         </div>
                    </div>
                </div>
                <div className='col-sm-6 col-xs-12 mt-4'>
                <div className='card' style={{backgroundColor:"rgb(248, 245, 245)",border:"none"}}>
                         <div className='card-body'>
                               <div className='p'>
                               <CircularProgressWithLabel  value={progress13}/>
                               </div>
                               <div className='data mt-4'>
                                      
                                      <h5>BE - Jhulelal Istitute Of Technology</h5>
                                      <span>
                                      <p style={{fontSize:"14px",color:"gray"}}>In 2023 I Cleared my Engineering degree<br/>
                                       with an 7.94 CGPA aggregate.</p>
                                      </span>
                                     
                               </div>
                         </div>
                    </div>
                </div>
                <div className='col-sm-6 col-xs-12 mt-4'>
                <div className='card' style={{backgroundColor:"rgb(248, 245, 245)",border:"none"}}>
                         <div className='card-body'>
                               <div className='p'>
                               <CircularProgressWithLabel  value={progress14}/>
                               </div>
                               <div className='data mt-4'>
                                      
                                      <h5>Java Fullstack Intership</h5>
                                      <span><p style={{fontSize:"14px",color:"gray"}}>I Completed java Fullstack Intership in the <br/>
                                      ARC Technology Nagpur And Duration Was 6 months</p></span>
                                      
                               </div>
                         </div>
                    </div>
                </div>
              </div>
         </div>
         </section>

    </>
  )
}
