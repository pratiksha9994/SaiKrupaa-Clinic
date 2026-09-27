import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './Context/Themecontext'
import { LangProvider } from './Context/Langcontext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter>
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>

          <Footer />

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919588633596?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Saikrupaa%20Clinic."
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#25D366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              zIndex: 999,
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            💬
          </a>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  )
}

export default App