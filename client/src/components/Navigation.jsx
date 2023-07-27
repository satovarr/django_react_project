import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
        <h1>
            <Link to= "tasks"> Task App</Link>
        </h1>
        <Link to="task-create"> Create Task</Link>
    </div>
  )
}
