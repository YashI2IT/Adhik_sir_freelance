import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Journey from './pages/Journey'
import Work from './pages/Work'
import Impact from './pages/Impact'
import Contact from './pages/Contact'
import Recognition from './pages/Recognition'
import HeartOfTheCause from './pages/HeartOfTheCause'
import Legacy from './pages/Legacy'
import InnerJourney from './pages/InnerJourney'
import CuringTheGash from './pages/CuringTheGash'
import DaughtersReturn from './pages/DaughtersReturn'
import GalleryMedia from './pages/GalleryMedia'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/work" element={<Work />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/heart-of-the-cause" element={<HeartOfTheCause />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/inner-journey" element={<InnerJourney />} />
        <Route path="/curing-the-gash" element={<CuringTheGash />} />
        <Route path="/daughters-return-to-their-soil" element={<DaughtersReturn />} />
        <Route path="/gallery-media" element={<GalleryMedia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-20"> {/* pt-20 for fixed navbar */}
          <AnimatedRoutes />
        </div>
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
