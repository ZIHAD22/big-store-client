import { Route, Router, Routes } from 'react-router-dom'
import NotFound from '../components/NotFound/NotFound'
import Header from '../components/Header/Header'
import './App.css'
import Banner from '../components/Banner/Banner'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
