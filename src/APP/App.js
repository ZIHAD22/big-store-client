import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/NotFound/NotFound'
import Header from '../components/Header/Header'
import './App.css'
import Banner from '../components/Banner/Banner'
import SpecialItems from '../components/SpecialItems/SpecialItems'
import Footer from '../components/Footer/Footer'
import Map from '../components/Map/Map'
import Registration from '../components/Registration/Registration'
import SignIn from '../components/SignIn/SignIn'
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
        <Route path="/manage-items" element={<Map />} />
        <Route path="/signUp" element={<Registration />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
