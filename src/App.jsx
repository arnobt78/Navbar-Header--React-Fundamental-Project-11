/**
 * App: root layout and client-side routing.
 * - BrowserRouter enables routing via the browser URL (no full page reload).
 * - Navbar is always visible; Routes swap only the content below it.
 * - Each Route maps a path to a page component (no backend; SPA only).
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        {/* Route config: path must match links in data.jsx for nav to work */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
