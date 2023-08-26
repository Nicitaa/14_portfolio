import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Main } from "./pages"
import { Footer } from "./components/Footer"
import { Page404 } from "./pages/Page404"

function App() {

  return (
    <div className="font-primary text-secondary-dark text-sm flex flex-col min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
