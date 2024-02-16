
import image from "../data/caroulsel.json"
import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

export const Corosel =()=>{

    const [datas,setDatas]=useState([]);
    const fetchData = async()=>{
        const res =await axios.get(image)
        setDatas(res.config.url.image)
    }
            useEffect(()=>{
                fetchData()
                
            },[])

     return(

         <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel " style={{paddingTop:"200px", backgroundColor:"#EED9F5",}}>
        <div className="carousel-inner">
            {datas.map ((item , idx)=>{
                return(
                    <div key = {idx}>
                                <div className={idx == 0 ?"carousel-item active " : "carousel-item "} data-bs-interval="3000" >
                                <img src={item.src} className="d-block w-100 container"  style={{height:"300px" , width:"100%", borderRadius:"45px",}} alt="..."/>
                                </div>
                    </div>
                )
            })}
        </div>

        <div className="hidenbutton">
        <button className= "carousel-control-prev "style={{top:"200px" }}  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next "style={{top:"200px"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        </div>
      </div>
          
     )   
}

export default Corosel