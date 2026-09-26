import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './model.mjs';

const app = express();
app.use(express.json())

const PORT = process.env.PORT;

app.post('/exercises', asyncHandler( async (req, res)=>{
    if (exercises.validateExercise(req.body)){
        const newExercise = await exercises.createExercise(req.body)
        res.status(201)
        res.json(newExercise)
    } else {
        res.status(400)
        res.json({ Error: "Invalid Request"})
    }
}))

app.get('/exercises', asyncHandler( async (req, res)=>{
    res.status(200)
    res.json(await exercises.getAllExercises())
}))

app.get('/exercises/:id', asyncHandler( async (req, res)=>{
    const exercise = await exercises.getExerciseById(req.params.id)
    if (exercise){
        res.status(200)
        res.json(exercise)
    } else {
        res.status(404)
        res.json({ Error: "Not found"})
    }
}))

app.put('/exercises/:id', asyncHandler( async (req, res)=>{
    if (exercises.validateExercise(req.body)){
        const updatedExercise = await exercises.updateExercise(req.body, req.params.id)
        if (updatedExercise){
            res.status(200)
            res.json(updatedExercise)
        } else {
            res.status(404)
            res.json({ Error: "Not found"})
        }
    } else {
        res.status(400)
        res.json({ Error: "Invalid Request"})
    }
}))

app.delete('/exercises/:id', asyncHandler( async (req, res)=>{
    if (await exercises.deleteExercise(req.params.id) > 0){
        res.status(204)
        res.send()
    } else {
        res.status(404)
        res.json({ Error: "Not found"})
    }
}))

app.listen(PORT, async () => {
    await exercises.connect(false)
    console.log(`Server listening on port ${PORT}...`);
});
