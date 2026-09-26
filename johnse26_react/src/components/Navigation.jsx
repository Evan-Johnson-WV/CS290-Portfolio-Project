import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <Link to="/">Go to Homepage<br /></Link>
            <Link to="/create_exercise">Create a New Exercise</Link>
        </nav>
    )
}

export default Navigation