import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';

// Lazy load page components
const Profile = React.lazy(() => import('./components/Profile'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Education = React.lazy(() => import('./pages/Education'));
const Accomplishments = React.lazy(() => import('./pages/Accomplishments'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <SEO />
          <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] transition-colors duration-300">
            <Header />
            <main id="main" className="min-h-[calc(100vh-80px)]">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Profile />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/accomplishments" element={<Accomplishments />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;
