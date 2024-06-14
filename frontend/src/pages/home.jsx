

import React from "react";
import image from "../images/studying.png";
import {Link} from 'react-router-dom'
import "./home.css";

const Home = () => {
    return (
        <div className="border-line">
            <div className="home-page bg-dark text-white container-fluid">
                <div className="row container-fluid flex-nowrap">
                    <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{ height: "91.5vh" }}>
                        <h1 style={{ fontSize: "90px" }}>BOOK STORE </h1>
                        <h3 style={{ fontSize: "50px" }}> FOR YOU</h3>
                        <p style= {{color:"silver"}}>Checkout The Book From Here.</p>
                        <Link to="/books">  
  <button className="viewbooks my-10">View Books</button>
</Link>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column" style={{ height: "91.5vh" }}>
                        <img src={image} alt="Book Image" height={700} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;