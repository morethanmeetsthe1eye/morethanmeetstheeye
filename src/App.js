import {Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PartnerPage from './pages/PartnerPage';
import AboutPage from './pages/AboutPage';
import MoreInfoPage from './pages/MoreInfoPage'


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path = '/' element={<HomePage /> } />
          <Route path = '/about' element={<AboutPage /> } />
          <Route path = '/moreInfo' element={<MoreInfoPage/> } />
          <Route path = '/contacts' element={<ContactPage />} />
          <Route path = '/partners' element={<PartnerPage />} />

        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
