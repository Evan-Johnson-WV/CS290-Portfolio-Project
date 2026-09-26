import TableRow from "./TableRow"

function ExerciseTable({exercises, deleteItem, goToEdit}){
    return(
        <table>
            <caption><h2>Workout Tracker</h2></caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map( (exercise) => <TableRow exercise={exercise} 
                deleteItem={deleteItem} goToEdit={goToEdit}
                key={exercise._id} />)}
            </tbody>
        </table>
    )
}

export default ExerciseTable