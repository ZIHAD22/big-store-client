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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loading from '../components/Loading/Loading'
import RequireAuth from '../components/RequireAuth/RequireAuth'
import Inventory from '../components/Inventory/Inventory'
import ManageInventories from '../components/ManageInventories/ManageInventories'
import AddProduct from '../components/AddProduct/AddProduct'
import MyInventory from '../components/MyInventory/MyInventory'
import Blogs from '../components/Blogs/Blogs'
import Testimonial from '../components/Testimonial/Testimonial'
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
              <Testimonial />
            </>
          }
        />
        <Route
          path="/manage-items"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/add-item"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyInventory />
            </RequireAuth>
          }
        />
        <Route path="/signUp" element={<Registration />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
