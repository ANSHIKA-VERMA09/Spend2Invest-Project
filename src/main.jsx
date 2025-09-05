import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from './components/LandingPage/HeroPage.jsx';
import AboutPage from './components/AboutUsPage/AboutPage.jsx';
import FeaturesPage from './components/FeaturePage/FeaturePage.jsx';
import DashBoardPage from './components/DasboardPage/DashBoardPage.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';
import SupportPage from './components/support/SupportPage.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import Login from './components/Auth/Login.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
