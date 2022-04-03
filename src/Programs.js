import React from "react";
import workoutPlan from "./WorkoutPlan";
import { useEffect, useState } from "react";
import {gsap} from "gsap"
function Programs(){


    const[name, setName] = useState('')
    const [day, setDay] = useState('')
    const[age, setAge] = useState()

    useEffect(()=>{
        gsap.fromTo(".head", {x:-100, duration: .3}, {x:0})
        // gsap.fromTo(".headBtn", {y:-100, duration: .3}, {y:0})

    },[])



    function setTodoFunc(){
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('day', day)
    }
  

    function getLs(){
        
        const dataName = localStorage.getItem('name')
        const dataAge = localStorage.getItem('age')
        const dataDay = localStorage.getItem('day')
        setName(dataName)
        setAge(dataAge)
        setDay(dataDay)
        }

       
    
    return(
        <div className="programs">
            <div className="firstSection">
                <h1 className="head">Programs</h1>
            </div>

            <div className="secondSection">
                <h3>Let's see what you got</h3>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                   
                }}>
                    <input type='text' name="theName" placeholder="Name" onChange={((e)=>{
                        setName(e.target.value)
                    })}/>

                    <input type='text' name="theDay" placeholder="Day of week" onChange={((e)=>{
                        setDay(e.target.value)
                    })}/>
                    <input type='number' name="theAge" placeholder="Age" onChange={((e)=>{
                        setAge(e.target.value)
                    })}/>
                    <button onClick={setTodoFunc}>Save</button>
                    
                </form>
                <button onClick={getLs}>Load</button>

            

                {age >= 21 && day === "Monday" ? 
                <>
                     <h1>Individual workout plan for {name}</h1>
                        <div className="individualPlan">
                        <p>1. Do some {workoutPlan[0].firstExercise[0].nameOfExercise}, {workoutPlan[0].firstExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>2. Then do {workoutPlan[0].secondExercise[0].nameOfExercise}, {workoutPlan[0].secondExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>3. Do some {workoutPlan[0].thirdExercise[0].nameOfExercise}, {workoutPlan[0].thirdExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>4. Do some {workoutPlan[0].forthExercise[0].nameOfExercise}, {workoutPlan[0].forthExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>5. Do some {workoutPlan[0].fifthExercise[0].nameOfExercise}, {workoutPlan[0].fifthExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        </div>
                </>
              
                
                
                
                : <p>Your personal workout plan will be displayed here.</p>}
            </div>
            
        </div>
        
    )
}

export default Programs;