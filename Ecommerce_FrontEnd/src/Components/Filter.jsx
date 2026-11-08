import React, { useEffect, useState } from 'react'

const Filter = () => {
  let [Input,setInput] = useState("");
  let [Category,setCategory] = useState()
  useEffect(()=>{
       fetch()
  },[])
  return (
    <div id="Filter">
      <div id="FilterHeading">
        <p>Filter</p>
    <button id="ResetButton"> Reset </button>
    </div>
   
    <div id="Category_Container">
     <p>Category</p>
  <input value={Input}
      placeholder='Search Categories...'
       onChange={(e)=>{
            setInput(e.target.value);
       }} ></input>
       <div id="Category_Box">
        
       </div>
      

    </div>
     
       <div id = "Categories_Holder"></div>

   
         
     
    </div>
  )
}

export default Filter