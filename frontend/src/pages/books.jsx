import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";


import "./books.css"
import BooksSection from "../component/BooksSection";

const Books=()=>{

   const [Data,setData]=useState()
    useEffect(()=>{
const fetch =async()=>{
    await axios.get("http://localhost:8000/api/v1/getBooks")
    .then((resp)=>setData(resp.data.books))
}
fetch()
})
    return(
        <div className="books-container">

            <div className="d-flex justify-content-center align-items-center py-3">
            <h4 className="text-white">Books Section</h4></div>

            {Data ? <BooksSection data={Data}/> 
            : (<div className="text-white">Loading...</div>)}
            </div>
    )
}
export default(Books)