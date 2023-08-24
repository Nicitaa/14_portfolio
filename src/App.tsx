import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Main } from "./pages"
import { Footer } from "./components/Footer"
import { Page404 } from "./pages/Page404"
import { useEffect } from "react"

function App() {

  //To prevent iFrame anti-fishing using Clerk
  useEffect(() => {
  const defaultValue = 'clerk-db-jwt';
  const storedValue = localStorage.getItem('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMlVPMlBzVkw2cEJDSFJKM2I4VlFia2VRUFVtIn0.MQpTH31HB4dMKcJWkbL-olGCaLkiYrqVC50WHqhTwyrHN5J3X1O1tjvxG28oKucRnaM_3ACnJnxSmG58s5F-7ngQtdkeCRGNLUOBLmi1m2ylQG-VJk2sUCh1nFmUeKcX7ok_OquEHcw-K16xNg0w2cf0ohm5kzjgZcpWGKWzePYfkgi-JDacc7kyT6pMk_c5iuAydYzk29Mu2AU8eC926vgCDlI-dMiveqs9Y5TMXY0VyujB00Z7x3JE46tF6HuybdFWBbkbbyFE-Wh4flLzvyUv3GzdLevk-1UGZ9pqpaOr8J_yopDsdmY_HAHGCHqp2hug-TNx9FGYHgCRmM-UrQ');

  if (!storedValue) {
    localStorage.setItem('clerk-db-jwt', defaultValue);
  }
}, []);

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
