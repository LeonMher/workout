import React from "react";

import { useEffect } from "react";
import {gsap} from "gsap"
function Programs(){




    useEffect(()=>{
        gsap.fromTo(".head", {x:-100, duration: .3}, {x:0})
        // gsap.fromTo(".headBtn", {y:-100, duration: .3}, {y:0})

    },[])

    return(
        <div className="programs">
            <div className="firstSection">
                <h1 className="head">Programs</h1>
            </div>

            <div className="secondSection">
                <h3>Let's see what you got</h3>
                <form>
                    <input type='text' placeholder="Name"/>
                    <input type='number' placeholder="Age"/>
                    <button>Submit</button>
                </form>

            </div>
            
        </div>
        
    )
}

export default Programs;