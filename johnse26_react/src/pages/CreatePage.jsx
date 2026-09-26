import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function CreatePage(){
    
    const [name, setName] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [unit, setUnit] = useState('lbs')
    const [date, setDate] = useState('')

    const navigate = useNavigate()

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date}
        const response = await fetch('/exercises', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newExercise)
        })
        if (response.status === 201){
            alert('Successfully added your workout!')
        } else {
            alert(`Couldn't add your workout, status code = ${response.status}`)
        }
        navigate('/')
    }
    
    return(
        <div>
            <h2>Enter a new exercise</h2>
            <form>
                <fieldset>
                <label>Exercise Name:</label>
                <input 
                    type='text'
                    value={name}
                    onChange={ e => setName(e.target.value)}
                />
                <br />
                <label>Number of Reps:</label>
                <input 
                    type='number'
                    value={reps}
                    onChange={ e => setReps(e.target.valueAsNumber)}
                />
                <br />
                <label>Weight Lifted:</label>
                <input 
                    type='number'
                    value={weight}
                    onChange={ e => setWeight(e.target.valueAsNumber)}
                />
                <br />
                <label>Unit of Weight:</label>
                <select type='text' value={unit}
                    onChange={ e => setUnit(e.target.value)}>
                        <option>lbs</option>
                        <option>kgs</option>
                </select>
                <br />
                <label>Date:</label>
                <input 
                    type='text'
                    placeholder='MM-DD-YY'
                    value={date}
                    onChange={ e => setDate(e.target.value)}
                />
                <br />
                <button onClick={ () => addExercise() }>Create</button>
                </fieldset>
            </form>
        </div>
    )
}

export default CreatePage