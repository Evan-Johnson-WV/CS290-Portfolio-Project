import mongoose from 'mongoose';
import 'dotenv/config';

let connection = undefined;
let Exercise = undefined;

/**
 * Connecting to MongoDB
 */
async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
        Exercise = createModel()
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

function createModel(){
    const userSchema = mongoose.Schema({
        name: {type: String, required: true},
        reps: {type: Number, required: true},
        weight: {type: Number, required: true},
        unit: {type: String, requitred: true},
        date: {type: String, required: true}
    }, {collection: 'exercises'})
    return mongoose.model('Exercise', userSchema, 'exercises')
}

async function createExercise(exercise){
    const newExercise = new Exercise({name: exercise.name, reps: exercise.reps, weight: exercise.weight, 
        unit: exercise.unit, date: exercise.date})
    return newExercise.save()
}

/**
 * Detemines whether the data entries for an exercise are valid
 * @param {string} name 
 * @param {number} reps 
 * @param {number} weight 
 * @param {string} unit 
 * @param {string} date 
 * @returns {Boolean}
 */
function validateExercise(exercise){

    // Checking that the exercise only has 5 properties
    const keyList = Object.keys(exercise)
    if (keyList.length !== 5){return false}
    
    // Name needs to be a string of length >= 1
    if (typeof(exercise.name) !== 'string' || exercise.name.length < 1) {return false}
    
    // Reps needs to be a number > 0
    if (typeof(exercise.reps) !== 'number' || exercise.reps < 1) {return false}
    
    // Weight needs to be a number > 0
    if (typeof(exercise.weight) !== 'number' || exercise.weight < 1) {return false}
    
    // Unit needs to be a string and either lbs or kgs
    if (typeof(exercise.unit) !== 'string') {return false}
    else if (exercise.unit !== 'lbs' && exercise.unit !== 'kgs') {return false}

    // If the rest of these are true, the outcome is dependant on whether the date is valid
    return isDateValid(exercise.date)
}

function isDateValid(date) {
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

async function getAllExercises(){
    const exerciseList = Exercise.find({})
    return exerciseList
}

async function getExerciseById(id) {
    try{
        return Exercise.findById(id).exec()
    } catch {return undefined}
}

async function updateExercise(exercise, id){
    if (await getExerciseById(id)) {
        await Exercise.updateOne({_id: id}, exercise).exec()
        return await getExerciseById(id)
    } else {return undefined}
}

async function deleteExercise(id){
    const result = await Exercise.deleteOne({_id: id})
    return result.deletedCount
}

export { connect, createExercise, validateExercise, getAllExercises, getExerciseById,
    updateExercise, deleteExercise }