import { useEffect, useState } from "react";
import ExerciseTable from "../components/ExerciseTable";
import { useNavigate } from "react-router-dom";

function HomePage({ setExercise }){
    
    const [exercises, setExercises] = useState([])
    
    const navigate = useNavigate()
    
    const loadData = async () => {
        const response = await fetch('/exercises');
        const exercise_data = await response.json();
        setExercises(exercise_data);
    }

    const deleteItem = async (id) => {
        const response = await fetch(`/exercises/${id}`, {method: 'DELETE'})
        if (response.status === 204){
            alert('Successfully deleted the wourkout!')
            setExercises(exercises.filter( ex => ex._id !== id ))
        } else {
            alert(`Couldn't delete your workout, status code = ${response.status}`)
        }
    }

    const goToEdit = async (exercise) => {
        setExercise(exercise)
        navigate('/edit_exercise')
    }

    useEffect( () => {
        loadData();
    }, []);
    
    return(
        <ExerciseTable exercises={exercises} deleteItem={deleteItem} goToEdit={goToEdit}/>
    );
}

export default HomePage