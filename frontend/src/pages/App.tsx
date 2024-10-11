import { Routes, Route } from "react-router-dom"
import SignInUser from "./signin/SignInUser"
import SignUpUser from "./signup/SignUpUser"

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignInUser />} />
      <Route path="/signup" element={<SignUpUser />} />
      <Route path="/home" element={<h1>Dashboard</h1>} />
      <Route path="/activityform" element={<h1>Activity Form</h1>} />
      <Route path="/marketplace" element={<h1>Marketplace</h1>} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
