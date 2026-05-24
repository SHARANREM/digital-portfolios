import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css"
import AboutMe from "./Pages/AboutMe";
import Journey from "./Pages/Journey";
import ExpertiseWork from "./Pages/ExpertiseWork";
import Blogs from "./Pages/Blogs";
import TechSkills from "./Pages/TechSkills";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutme" element={<AboutMe />}/>
      <Route path="/journey" element={<Journey />}/>
      <Route path="/expertisework" element={<ExpertiseWork />}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/techskill" element={<TechSkills/>}/>
    </Routes>
    </>
  )
}

export default App
