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
        sessionStorage.setItem('name', name)
        sessionStorage.setItem('age', age)
        sessionStorage.setItem('day', day)
    }
  

    function getLs(){
        
        const dataName = sessionStorage.getItem('name')
        const dataAge = sessionStorage.getItem('age')
        const dataDay = sessionStorage.getItem('day')
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

                    <input type='text'  name="theDay" placeholder="Day of week" onChange={((e)=>{
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
                        <h2 >Monday</h2>
                        <h4>Chest/Biceps</h4>
                        <p>1. Do some {workoutPlan[0].firstExercise[0].nameOfExercise}, {workoutPlan[0].firstExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>2. Then do {workoutPlan[0].secondExercise[0].nameOfExercise}, {workoutPlan[0].secondExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>3. Do some {workoutPlan[0].thirdExercise[0].nameOfExercise}, {workoutPlan[0].thirdExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>4. Do some {workoutPlan[0].forthExercise[0].nameOfExercise}, {workoutPlan[0].forthExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>5. Do some {workoutPlan[0].fifthExercise[0].nameOfExercise}, {workoutPlan[0].fifthExercise[0].reps} times, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        </div>
                </>
              
                
                
                
                : <p>Your personal workout plan will be displayed here.</p>}


                    
                    {age >= 21 && day === "Wednesday" ? 
                <>
                     <h1>Individual workout plan for {name}</h1>
                        <div className="individualPlan">
                        <h2 >Wednesday</h2>
                        <h4 >Shoulders/Triceps</h4>
                        <p>1. Do some {workoutPlan[1].firstExercise[0].nameOfExercise}, {workoutPlan[1].firstExercise[0].reps} times, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        <p>2. Then do {workoutPlan[1].secondExercise[0].nameOfExercise}, {workoutPlan[1].secondExercise[0].reps} times, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        <p>3. Do some {workoutPlan[1].thirdExercise[0].nameOfExercise}, {workoutPlan[1].thirdExercise[0].reps} times, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        <p>4. Do some {workoutPlan[1].forthExercise[0].nameOfExercise}, {workoutPlan[1].forthExercise[0].reps} times, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        <p>5. Do some {workoutPlan[1].fifthExercise[0].nameOfExercise}, {workoutPlan[1].fifthExercise[0].reps} times, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        </div>
                </>
              
                
                
                
                : null}

                    {age >= 21 && day === "Friday" ? 
                <>
                     <h1>Individual workout plan for {name}</h1>
                        <div className="individualPlan">
                        <h2 >Friday</h2>
                        <h4 >Legs only!</h4>
                        <p>1. Do some {workoutPlan[2].firstExercise[0].nameOfExercise}, {workoutPlan[2].firstExercise[0].reps} times, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        <p>2. Then do {workoutPlan[2].secondExercise[0].nameOfExercise}, {workoutPlan[2].secondExercise[0].reps} times, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        <p>3. Do some {workoutPlan[2].thirdExercise[0].nameOfExercise}, {workoutPlan[2].thirdExercise[0].reps} times, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        <p>4. Do some {workoutPlan[2].forthExercise[0].nameOfExercise}, {workoutPlan[2].forthExercise[0].reps} times, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        <p>5. Do some {workoutPlan[2].fifthExercise[0].nameOfExercise}, {workoutPlan[2].fifthExercise[0].reps} times, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        </div>
                </>
              
                
                
                
                : null}
                



                    {age >= 21 && day === "Saturday" ? 
                <>
                     <h1>Individual workout plan for {name}</h1>
                        <div className="individualPlan">
                        <p>1. Do some {workoutPlan[3].firstExercise[0].nameOfExercise}, {workoutPlan[3].firstExercise[0].reps} times, {workoutPlan[3].firstExercise[0].sets} sets  </p>
                        <p>2. Then do {workoutPlan[3].secondExercise[0].nameOfExercise}, {workoutPlan[3].secondExercise[0].reps} times, {workoutPlan[3].secondExercise[0].sets} sets  </p>
                        <p>3. Do some {workoutPlan[3].thirdExercise[0].nameOfExercise}, {workoutPlan[3].thirdExercise[0].reps} times, {workoutPlan[3].thirdExercise[0].sets} sets  </p>
                        <p>4. Do some {workoutPlan[3].forthExercise[0].nameOfExercise}, {workoutPlan[3].forthExercise[0].reps} times, {workoutPlan[3].forthExercise[0].sets} sets  </p>
                     
                        </div>
                </>
              
                
                
                
                : null}
            </div>
            
        </div>
        
    )
}

export default Programs;