import { Routes, Route } from "react-router-dom"
import SignInUser from "./signin/SignInUser"

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignInUser />} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
    </Routes>
  )
}

export default App
