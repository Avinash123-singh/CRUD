import React, { useState } from "react";
import "./addbooks.css"
import axios from "axios";
const AddBooks=()=>{
  
    const [Data,setData]=useState({
      bookname:"",
      author:"",
      description:"",
      image:"",
      price:""})
      const change= (e)=>{
    const {name,value}=e.target
    setData({...Data,[name]:value})
  }
  const submit=async(e)=>{
    e.preventDefault()
await axios.post("http://localhost:8000/api/v1/add",Data).then((resp)=>alert(resp.data.message))
setData( {bookname:"",
  author:"",
  description:"",
  image:"",
  price:""})
  }
 
    return(
        <div className="AddBooks-container bg-dark "><br /><br />
        <div className="mb-3 container p-3">
  <label for="exampleFormControlInput1" className="form-label">
    
    Book Name
    
    </label><br />
  <input type="text" 
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Enter Book Name" 
  name= "bookname"
  onChange={change}
  value={Data.bookname}
  />
  </div>
  <br></br>
  <br />
  

  <div className="mb-3 container">
  <label for="exampleFormControlInput1" className="form-label">
    Description
    
     </label><br />

  <input type="text"
   className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Enter Description" 
  name= "description"
  onChange={change}
  value={Data.description}
  />
</div>


<br />


  <div className="mb-3 container">
  <label for="exampleFormControlInput1" className="form-label">
    
    Author 
    </label><br />
  <input type="text" 
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Enter Auther Name" 
  name= "author"
  onChange={change}
  value={Data.author}
  />
</div>

<br />

  <div className="mb-3 container">
  <label for="exampleFormControlInput1" className="form-label">
    Image
     </label><br />
  <input type="text" 
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Show Image" 
  name= "image"
  onChange={change}
  value={Data.image}
  />
</div>

<br />

  

  <div className="mb-3 container">
  <label for="exampleFormControlInput1" className="form-label">
    Price 
    
    </label><br />
  <input type="number" 
  className="form-control" 
  id="exampleFormControlInput1" 
  placeholder="Enter Price" 
  name= "price"
  onChange={change}
  value={Data.price}
  />
</div>

<button className="btn btn-success" onClick={submit}>Submit</button>

</div>
        

    )
}
export default(AddBooks)