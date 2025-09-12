import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.scss"
import { Home } from "./pages/home/Home"
import { Quiz } from "./pages/quiz/Quiz"

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
