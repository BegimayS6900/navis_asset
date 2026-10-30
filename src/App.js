
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactsPage from './pages/Contacts/ContactsPage';
import NewsPage from './pages/News/NewsPage';
import PricePage from './pages/Price/PricePage';
import Reviews from './pages/Reviews/ReviewsPage';

import './App.css';
import ApplicationPage from './pages/Application/ApplicationPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path='/application' element={<ApplicationPage/>} />
        <Route path="/reviews" element={<Reviews/>} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
