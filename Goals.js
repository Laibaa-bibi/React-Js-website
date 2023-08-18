import React from 'react'
import { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Goals = () => {

const[num,setNum]=useState(1);
const[task,setTask]=useState("");
const[data,setData]=useState([]);


const addData=()=>{
  setNum(num+1);
  setData([...data,{task,num}]);         //using spread operator
  setTask("")
 }

 const remove=(index)=>{
  let arr=data;
  arr.splice(index,1);
  setData([...arr]);
 }

  return (

    <div className='Goal1'>

      <div className='enterfields'>

        <h2>Enter task</h2>

        {/* <Stack spacing={2} direction="row" paddingLeft={65} paddingTop={2} className='mystack'> */}
          {/* <Stack className='mystack' spacing={2} direction="row">  */}

          <div className='mystack'>
        <TextField id="outlined-basic" value={task} label="Task" onChange={(event)=>setTask(event.target.value)} variant="outlined" /> 
        <Button variant="contained" color='success' onClick={addData} sx={{height:54 , width:78 }}>Add</Button>
        </div>

        {/* </Stack> */}

      </div>
      

      <div className='data'>
      <h2>#</h2>
      <h2>Task</h2>
      <h2>Remove</h2>
      </div>


      <div>
{
  data.map((element,index)=>
  {
 return(
  <div key={index} className='data_vals'>
    <h3>{element.num}</h3>
  <h3>{element.task}</h3>
  <Button variant="contained" color='error' onClick={()=>remove(index)} sx={{height:45 , marginTop:1}}>Remove</Button>
</div>
 )
  }
  )
}
</div>


    </div>

  )
}

export default Goals
