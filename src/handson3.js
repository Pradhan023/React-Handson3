import React, { useState } from "react";
import './App.css';
import Classcomp from './classcomp'

const Handsonform2 = () => {

    const [name , setName] = useState("")
    const [department,setDepartment] = useState("")
    const [rating,setRating] = useState("")
    const [data,setData] = useState([])
    const [click,setClick] = useState(true)
   
      const change=(event)=>{
        const {name,value} = event.target
        if(name==='name')
        {
          setName(value)
        }
        else if(name==='department')
        {
          setDepartment(value)
        }
        else if(name==='rating')
        {
          setRating(value)
        }
  
      }
  
      const togglefunction = () =>{
        setClick(!click)
      }
  
      const display=()=>{
          const obj = {
              name : name,
              department : department,
              rating : rating
          }
          setData([...data,obj])
  
          setClick(false)
          setName('')
          setDepartment('')
          setRating('')
      }
  
      return (
      <>
      {click ?
      <div className="App">
          <div>
            <h1>Employee Feedback Form</h1>
          </div>
  
          <div>
          <label for= "name">Name </label>
          <input type="text" id="name" name='name' onChange={change} placeholder="Enter Your Name" value={name}>
          </input>
          </div>
    
          <div>
          <label for= "dep">Department </label>
          <input type="text" name='department' 
          placeholder='Enter Your Department Name' 
          onChange={change} id="dep" 
          value={department}/>
          </div>
    
          <div>
          <label for= "rate">Rating </label>
          <input type="number" name='rating' 
          placeholder='Rating' 
          onChange={change} id="rate" min="0" max="10" 
          value={rating}/>
          </div>
    
          <div>
          <button onClick={display}>Submit</button>
          </div>
         
      </div>
      :
      <Classcomp value={data} tf={togglefunction}/>
      }
      </>
      )
    }
export default Handsonform2