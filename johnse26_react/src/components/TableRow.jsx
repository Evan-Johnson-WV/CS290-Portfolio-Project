import { TiPencil, TiTrash } from "react-icons/ti";
import DeleteExercise from "./DeleteExercise";
import EditExercise from "./EditExercise";

function TableRow({ exercise, deleteItem, goToEdit }){
    return(
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td id='editIcon'><EditExercise exercise={exercise} goToEdit={goToEdit} /></td>
            <td id='deleteIcon'><DeleteExercise exercise={exercise} deleteItem={deleteItem} /></td>
        </tr>
    )
}

export default TableRow