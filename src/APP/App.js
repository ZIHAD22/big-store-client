import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/NotFound/NotFound'
import Header from '../components/Header/Header'
import './App.css'
import Banner from '../components/Banner/Banner'
import SpecialItems from '../components/SpecialItems/SpecialItems'
import Footer from '../components/Footer/Footer'
import Map from '../components/Map/Map'
// import 'leaflet/dist/leaflet.css'

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
              <Map />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/manage-items" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
