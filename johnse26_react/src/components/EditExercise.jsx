import { TiPencil } from "react-icons/ti";

function EditExercise({exercise, goToEdit}){

    return(
        <TiPencil onClick={ () => goToEdit(exercise)}/>
    )
}

export default EditExercise