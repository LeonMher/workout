import React from "react";
import { useEffect } from "react";
import {gsap} from "gsap"

function MainPage(){

    useEffect(()=>{
        gsap.fromTo(".head", {x:-100, duration: .3}, {x:0})
        gsap.fromTo(".headBtn", {y:-100, duration: .3}, {y:0})

    },[])

    return(
        <div className="mainPage">

            <h1 className="head">Where Fitness Becomes Your Lifestyle</h1>
            <button className="headBtn">Book Now</button>

        
        </div>
    )
}

export default MainPage;