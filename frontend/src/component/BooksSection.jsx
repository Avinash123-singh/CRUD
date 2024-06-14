
import React from 'react'

const BooksSection = ({data}) => {

 
  return (
    
    <div  className='d-flex justify-content-around align-items-center flex-wrap my-4'>
        {data && 
        data.map((item,index)=>(
            <div className="m-3" style={{width:"300px",height:"450px",border:"1px solid white"}}>
                <div> <img src={item.image} alt=" /" style={{width:"300px",height:"250px" }} className="img-fluid"  /> </div>
            <h4 style={{fontSize:"23px"}}
            className="text-white my-3">{item.bookname.slice(0,21)}....
            </h4>
            
         <b style={{fontSize:"30px", color:'red'}}> Rs. {item.price}</b>

        <div className='d-flex justify-content-around align-item center my-2'> 
            <button className="btn btn-primary btn-lg mr-5">UPDATE</button>
        <button className="btn btn-danger btn-lg" style={{text:"20px"}}>DELETE</button>
        </div>
             </div>))}
      
    </div>
  )
}



export default BooksSection
