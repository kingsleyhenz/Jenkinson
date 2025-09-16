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
import Events from './pages/Event';
import Reviews from './pages/Reviews';
import SiteMap from './pages/SiteMap';
import Queries from './pages/Queries';

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
          <Route path="/events" element={<Events />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/queries" element={<Queries />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App
