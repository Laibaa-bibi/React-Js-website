import React from 'react'
import work from './work.jpg'
import Button from '@mui/material/Button';
import ChecklistIcon from '@mui/icons-material/Checklist';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PieChartIcon from '@mui/icons-material/PieChart';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { blue } from '@mui/material/colors';
import goals from './goals.jpg'

const Home = () => {
  return (
    <div className='main'>
      
        <div className='maindiv'>

      <h1 className='mainh'>You deserve the<br></br> Best <br></br>
      <Button variant="contained" color="success"  sx={{ marginLeft:8, height:60, width:150,marginTop:15}}>
        Join Now
      </Button>
      </h1>

      <img src={work} alt="work" className='dp'/> 
      
        </div>

  

        <p className='p1'>We help you to achieve your goals</p>
   
        <div className='body'>
             <div>
         <ChecklistIcon style={{ color: 'grey', fontSize: "50px"}}></ChecklistIcon>
         <br></br>
         <p2>Follow the smart <br></br> methodology</p2>
             </div>

             <div>
         <EditSharpIcon style={{ color: 'red', fontSize: "50px"}}></EditSharpIcon>
         <br></br>
         <p2>Write your <br></br>own schedule</p2>
             </div>


             <div>
         <AccessibilityNewIcon style={{ color: 'rgb(5, 0, 51)', fontSize: "50px"}}></AccessibilityNewIcon>
         <br></br>
         <p2>Keep on track</p2>
             </div>
        </div>

        <div className='body'>
             <div>
         <PieChartIcon style={{ color: 'purple' , fontSize: "50px"}}></PieChartIcon>
         <br></br>
         <p2>Chart your <br></br> progress</p2>
             </div>

             <div>
         <DoneAllIcon style={{ color: 'blue' , fontSize: "50px" }}></DoneAllIcon>
         <br></br>
         <p2>Work <br></br>hard</p2>
             </div>


             <div>
         <Brightness7Icon style={{ color: 'green' , fontSize: "50px"}}></Brightness7Icon>
         <br></br>
         <p2>Dream big</p2>
             </div>
        </div>

        {/* <div>
        <img src={goals} alt="goals" className='pathimg'/> 
        <h1>Why choose Us!</h1>
        <p>We help you to follow the right path</p>
        </div> */}


        <div className='homemain'>

      <div>
      <img src={goals} alt="goals" className='contactpic'/> 
      </div>
      
      <div>
      <h1 className='headingc1'>Why choose Us!</h1>
        <p className='parac1'>1: We help you to follow the right path<br></br> 2: Provide you cost effective solutions</p>
      </div>

      </div>
   
    </div>
  )
}

export default Home
