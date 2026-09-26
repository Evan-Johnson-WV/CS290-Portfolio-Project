import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function EditPage({ exerciseToEdit }){
    
    const [name, setName] = useState(exerciseToEdit.name)
    const [reps, setReps] = useState(exerciseToEdit.reps)
    const [weight, setWeight] = useState(exerciseToEdit.weight)
    const [unit, setUnit] = useState(exerciseToEdit.unit)
    const [date, setDate] = useState(exerciseToEdit.date)

    const navigate = useNavigate()

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date}
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editedExercise)
        })
        if (response.status === 200){
            alert('Successfully changed your workout!')
        } else {
            alert(`Couldn't change your workout, status code = ${response.status}`)
        }
        navigate('/')
    }
    
    return(
        <div>
            <h2>Edit the exercise</h2>
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
                    <button onClick={ () => editExercise() }>Change</button>
                </fieldset>
            </form>
        </div>
    )
}

export default EditPage