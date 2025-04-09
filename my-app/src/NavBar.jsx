import { Link } from "react-router-dom"
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home Page</Link></li>
        <li>
          <Link to={'/about'}>About Page</Link>
        </li>
        <li>
          <Link to={'/articles'}>Articles Page</Link>
        </li>
      </ul>
    </nav>
  )
}