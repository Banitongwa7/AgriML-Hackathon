import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div className="w-full pt-10 mb-10">
        <ul className="flex justify-center items-center gap-4 font-medium">
            <li><Link to="/">Login</Link></li>
            <li><Link to="/home">Home</Link></li>
        </ul>
    </div>
  )
}
