import { BrowserRouter as Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Review from './pages/Review';

// Styles
import './App.css';

// Layout component for pages with Navbar and Footer
const MainLayout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

// Layout for pages without Navbar and Footer
const MinimalLayout = () => (
  <div>
    <main>
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter basename='/amaan-glass'>
      <ScrollToTop />
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Route>
        
        {/* Routes without Navbar and Footer */}
        <Route element={<MinimalLayout />}>
          <Route path="/review" element={<Review />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
