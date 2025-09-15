import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/About';
import ContactUs from './pages/Contact';
import Gallery from './pages/Gallery';
import Animals from './pages/Animals';

function App() {

  return (
    <>
      <Router>
      <Header />
      <Navbar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/animals" element={<Animals />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App
