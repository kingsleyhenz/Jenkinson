import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router>
      <Header />
      <Navbar />
      <main className="container my-4">
        <Routes>
          
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App
