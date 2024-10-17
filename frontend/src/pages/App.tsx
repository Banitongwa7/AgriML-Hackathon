import { Routes, Route } from "react-router-dom"
import SignInUser from "./signin/SignInUser"
import SignUpUser from "./signup/SignUpUser"
import Page404 from "./error404/Page404"
import Dashboard from "./home/Dashboard"
import ActivityForm from "./activityform/ActivityForm"
import Profile from "./profile/Profile"

function App() {

  return (
    <Routes>
      <Route path="/" element={<SignInUser />} />
      <Route path="/signup" element={<SignUpUser />} />
      <Route path="/home" element={< Dashboard />} />
      <Route path="/activityform" element={< ActivityForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App
