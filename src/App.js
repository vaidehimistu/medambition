import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import CounsellingPlans from './pages/CounsellingPlans';
import Contact from './pages/Contact';
import Register from './pages/Register';
import SubmissionSuccess from "./components/SubmissionSuccess";
import MbbsRussia from "./pages/MbbsRussia"; // <-- new import

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/counselling-plans" element={<CounsellingPlans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/submission-success" element={<SubmissionSuccess />} />
            <Route path="/mbbs-russia" element={<MbbsRussia />} /> {/* new route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
