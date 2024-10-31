import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"

function App() {  
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/signup" Component={Signup}/>
    <Route path="/login" Component={Login}/>
    <Route path="/profile" Component={Profile}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
