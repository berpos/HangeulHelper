import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.scss"
import { Home } from "./pages/home/Home"
import { Quiz } from "./pages/quiz/Quiz"
import { Results } from "./pages/result/Result"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  )
}
