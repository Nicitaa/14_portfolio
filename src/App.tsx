import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Main } from "./pages"
import { Footer } from "./components/Footer"
import { Page404 } from "./pages/Page404"
import { useEffect } from "react"

function App() {

  //To prevent iFrame anti-fishing using Clerk
  useEffect(() => {
  const defaultValue = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMlVRV2VOeWhwRkxJdTNCdlpLS1pudzI4bGljIn0.R98J3bP7LZY1yrTLFy59DGviC0Pb3bHAEBDm10ArP0SSUsi_Sorso4DM0LjKJbFWlAVQExK38X5_YBZY3y87Za7xpLvwZuvAUSLkttnt-FwfxftFgFzRYgSAigYEqPlznJxylE0gAk-0YP9IRyHmp5XICEfcqTC57SekqE3t3iap54ooXLIu1BAdDo3F5py9M0zX1FJgPPrBpZJ4Z0Hw6gRTO3EpHttk8BgnFNV3ZAm5huEhcaaaPtMsospllBspvdGqpgOatWxFnzKx0kiJE95AdTZlJWPiOCysARz_radAKddRR6-cjGJCuOWlp5bjr9b_tTA4iE-yepg7p548rg';
  const storedValue = localStorage.getItem('clerk-db-jwt');

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
