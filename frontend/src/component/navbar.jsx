

import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(

       
       <div><nav className="navbar navbar-expand-md bg-dark">
       <div className="container ">
         <a className="navbar-brand text-white" href="#">BookStore</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse " data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
         <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
  <span className="navbar-toggler-icon bg-white"></span>
</button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent ">
         
        
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             <Link className="nav-item nav-link active text-white" to ="/">
              HOME
            </Link>
             <Link className="nav-item nav-link active text-white" to ="/books">BOOKS
             </Link>
             <Link className="nav-item nav-link active text-white" to ="/AddBooks">ADDBOOKS</Link>
            
           </ul>
          
         </div>
       </div>
     </nav></div> 
     
    )
}
export default Navbar 