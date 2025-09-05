import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import { Home } from "./pages/Home"
import { Quiz } from "./pages/Quiz"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  )
}
