import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';

function App() {

  const [exerciseToEdit, setExercise] = useState('')

  return (
    <div className='App'>
      <header>
        <h1>Workout Tracking System</h1>
      </header>
      <p>Here you can keep track of the exercises you complete, as well as edit and delete existing workouts!</p>
      <Router id='AppLink'>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage setExercise={setExercise} />}></Route>
          <Route path="/create_exercise" element={<CreatePage />}></Route>
          <Route path="/edit_exercise" element={<EditPage exerciseToEdit={exerciseToEdit} />}></Route>
        </Routes>
      </Router>
      <br />
      <footer>© 2025 Evan Johnson</footer>
    </div>
  )
}

export default App
