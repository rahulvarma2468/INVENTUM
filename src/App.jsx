import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import useSecurity from './hooks/useSecurity';
import './styles/loader.css';

// Lazy load pages for performance
const Index = lazy(() => import('./pages/Index'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const TechnicalEvents = lazy(() => import('./pages/TechnicalEvents'));
const NonTechnicalEvents = lazy(() => import('./pages/NonTechnicalEvents'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="loader-container">
    <div className="netflix-loader"></div>
  </div>
);

function App() {
  useSecurity();

  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/technical-events" element={<TechnicalEvents />} />
            <Route path="/non-technical-events" element={<NonTechnicalEvents />} />
            <Route path="/memories" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
