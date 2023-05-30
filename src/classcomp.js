import React from 'react'

const Classcomp = (props) =>{
    return (
      <div className='App'>
        <h1>Employee FeedBack Data</h1>
        <div className='data-container'>
        {props.value.map((item,index)=>{
          return(
            <h3 key={index}>{`Name: ${item.name} | Department:${item.department} | Rating: ${item.rating}`}</h3>
          )
        })}
        </div>
        <div>
        <button onClick={props.tf}>Go Back</button>
        </div>
      </div>
    )
  }
  export default Classcomp

