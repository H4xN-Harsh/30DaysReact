import { Route, Routes } from "react-router-dom"

import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import CaptainSignup from "./pages/CaptainSignup"
import CaptainLogin from "./pages/CaptainLogin"
import Start from "./pages/Start"
import Home from "./pages/Home"
import UserProtectWrapper from "./pages/UserProtectWrapper"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CaptainSignup/>}/>
        <Route path="/home" element={
          <UserProtectWrapper><Home/></UserProtectWrapper>
        }/>
        <Route path="/user/logout" element={<UserProtectWrapper>
          {/*  */}
        </UserProtectWrapper>}/>
      </Routes>
    </div>
  )
}

export default App
