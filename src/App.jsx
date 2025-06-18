import "./components/css/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cyrptocurrency from "./routes/index.jsx"
import About from "./routes/about.jsx";
import Contacts from "./routes/contacts.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Cyrptocurrency/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
