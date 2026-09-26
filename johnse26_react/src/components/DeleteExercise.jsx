import { TiTrash } from "react-icons/ti"

function DeleteExercise({exercise, deleteItem}){

    return(
        <TiTrash onClick={ () => deleteItem(exercise._id)} />
    )
}

export default DeleteExercise