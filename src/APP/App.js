import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/NotFound/NotFound'
import Header from '../components/Header/Header'
import './App.css'
import Banner from '../components/Banner/Banner'
import InventoryItem from '../components/InventoryItem/InventoryItem'
import SpecialItems from '../components/SpecialItems/SpecialItems'
import Footer from '../components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <SpecialItems />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
