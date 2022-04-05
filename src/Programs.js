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
                <h1 className="head">Պարապմունքի պլան</h1>
            </div>

            <div className="secondSection">
                <h3>Տեսնենք ինչի ես ընդունակ</h3>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                   
                }}>
                    <input type='text' name="theName" placeholder="Անուն" onChange={((e)=>{
                        setName(e.target.value)
                    })}/>

                    {/* <input type='text'  name="theDay" placeholder="Day of week" onChange={((e)=>{
                        setDay(e.target.value)
                    })}/> */}
                    <input type='number' name="theAge" placeholder="Տարիք" onChange={((e)=>{
                        setAge(e.target.value)
                    })}/>
                        <br></br>
                        <label className="lbl">Երկուշաբթի</label>
                        <input className="radioBtns" type='radio' name="btn" value='Monday' onChange={((e)=>{
                                    setDay("Monday")

                                })} 
                                
                                style={{height:"25px", width:"35px", verticalAlign: "middle"}}
                                /> 
                      <label className="lbl">Չորեքշաբթի</label>
                    <input className="radioBtns" type='radio' name="btn" value='Wednesday' onChange={((e)=>{
                                     setDay("Wednesday")
                                })}
                                style={{height:"25px", width:"35px", verticalAlign: "middle"}}
                                /> 
                      <label className="lbl">Ուրբաթ</label>
                    <input className="radioBtns" type='radio' name="btn" value='Friday' 
                        // checked={isChecked}
                        onChange={((e)=>{
                                    
                            setDay("Friday")
                                })}
                                style={{height:"25px", width:"35px", verticalAlign: "middle"}}
                                /> 
                    


                    <button onClick={setTodoFunc}>Հիշել</button>
                    
                </form>
                <button onClick={getLs}>Բեռնել</button>

               
                {age >= 21 && day === "Monday" ? 
                <>
                     <h1>{name}-ի ունիկալ պարապմունքի պլան</h1>
                        <div className="individualPlan">
                        <h2 >Երկուշաբթի</h2>
                        <h4>Դոշ/Բիցեպս</h4>
                        <p>1.Սկզբի համար {workoutPlan[0].firstExercise[0].nameOfExercise}, {workoutPlan[0].firstExercise[0].reps} անգամ, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>2. Հետո {workoutPlan[0].secondExercise[0].nameOfExercise}, {workoutPlan[0].secondExercise[0].reps} անգամ, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>3. Եթե կարաս {workoutPlan[0].thirdExercise[0].nameOfExercise}, {workoutPlan[0].thirdExercise[0].reps} անգամ, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>4. Դավայ, մի հատ էլ {workoutPlan[0].forthExercise[0].nameOfExercise}, {workoutPlan[0].forthExercise[0].reps} անգամ, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        <p>5. Վերջում էլ {workoutPlan[0].fifthExercise[0].nameOfExercise}, {workoutPlan[0].fifthExercise[0].reps} անգամ, {workoutPlan[0].firstExercise[0].sets} sets  </p>
                        </div>
                </>
              
                
                
                
                : <p>Անձնական պարապմունքի տվյալները կարտացոլվեն այստեղ</p>}


                    
                    {age >= 21 && day === "Wednesday" ? 
                <>
                     <h1>{name}-ի ունիկալ պարապմունքի պլան</h1>
                        <div className="individualPlan">
                        <h2 >Wednesday</h2>
                        <h4 >Ուս/Տրիցեպս</h4>
                        <p>1. Սկզբի համար {workoutPlan[1].firstExercise[0].nameOfExercise}, {workoutPlan[1].firstExercise[0].reps} անգամ, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        <p>2. Հետո {workoutPlan[1].secondExercise[0].nameOfExercise}, {workoutPlan[1].secondExercise[0].reps} անգամ, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        <p>3. Եթե կարաս {workoutPlan[1].thirdExercise[0].nameOfExercise}, {workoutPlan[1].thirdExercise[0].reps} անգամ, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        <p>4. Դավայ, մի հատ էլ {workoutPlan[1].forthExercise[0].nameOfExercise}, {workoutPlan[1].forthExercise[0].reps} անգամ, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        <p>5. Վերջում էլ {workoutPlan[1].fifthExercise[0].nameOfExercise}, {workoutPlan[1].fifthExercise[0].reps} անգամ, {workoutPlan[1].firstExercise[0].sets} sets  </p>
                        </div>
                </>
              
                
                
                
                : null}

                    {age >= 21 && day === "Friday" ? 
                <>
                     <h1>{name}-ի ունիկալ պարապմունքի պլան</h1>
                        <div className="individualPlan">
                        <h2 >Ուրբաթ</h2>
                        <h4 >Բակավիկ</h4>
                        <p>1. Սկզբի համար {workoutPlan[2].firstExercise[0].nameOfExercise}, {workoutPlan[2].firstExercise[0].reps} անգամ, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        <p>2. Հետո {workoutPlan[2].secondExercise[0].nameOfExercise}, {workoutPlan[2].secondExercise[0].reps} անգամ, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        <p>3. Եթե կարաս {workoutPlan[2].thirdExercise[0].nameOfExercise}, {workoutPlan[2].thirdExercise[0].reps} անգամ, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        <p>4. Դավայ, մի հատ էլ {workoutPlan[2].forthExercise[0].nameOfExercise}, {workoutPlan[2].forthExercise[0].reps} անգամ, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        <p>5. Վերջում էլ {workoutPlan[2].fifthExercise[0].nameOfExercise}, {workoutPlan[2].fifthExercise[0].reps} անգամ, {workoutPlan[2].firstExercise[0].sets} sets  </p>
                        </div>
                </>
              
                
                
                
                : null}
                



                    {age >= 21 && day === "Saturday" ? 
                <>
                     <h1>{name}-ի ունիկալ պարապմունքի պլան</h1>
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