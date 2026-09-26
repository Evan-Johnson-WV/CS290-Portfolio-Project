import { useState } from "react"

function EnterExerciseData(exercise=undefined){
    
    if (exercise){
        const [name, setName] = useState(exercise.name)
        const [reps, setReps] = useState(exercise.reps)
        const [weight, setWeight] = useState(exercise.weight)
    }
}