import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Main } from "./pages"

function App() {

  return (
    <div className="font-primary text-secondary-dark text-sm">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
