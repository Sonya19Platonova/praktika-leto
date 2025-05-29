import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Contacts from './contacts.jsx';
import Biografy from './biografy.jsx';
import Music from './music.jsx';
import Media from './media.jsx';

import './App.css';
import instasamkaImage from './img/INSTASAMKA1.png';
import shop1 from './img/shop1.jpg';
import shop2 from './img/shop2.jpg';
import shop3 from './img/shop3.jpg';
import shop4 from './img/shop4.jpg';
import shop5 from './img/shop5.jpg';
import shop6 from './img/shop6.jpg';
import shop7 from './img/shop7.jpg';
import shop8 from './img/shop8.png';
import shop9 from './img/shop9.jpg';
import boss from './img/BOSS.png';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainPage />} />
        {/* Страницы */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/biografy" element={<Biografy />} />
        <Route path="/music" element={<Music />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function MainPage() {
  return (
    <div className="app">
      {/* Шапка */}
      <header className="header">
        <div className="nav-group">
          <Link to="/biografy" className="nav-link">БИОГРАФИЯ</Link>
          <Link to="/media" className="nav-link">МЕДИА</Link>
        </div>

        <div className="nav-group">
          <div className="logo">INSTASAMKA</div>
        </div>

        <div className="nav-group">
          <Link to="/music" className="nav-link">МУЗЫКА</Link>
          <Link to="/contacts" className="nav-link">КОНТАКТЫ</Link>
        </div>
      </header>

      {/* Главная картинка */}
      <div className="main-image">
        <img src={instasamkaImage} alt="Instasamka" />
      </div>

      {/* Концерты */}
      <section id="concert" className="section">
        <h1 className="section-title">КОНЦЕРТЫ</h1>
        
        <div className="concerts-table">
          <table>
            <thead>
              <tr>
                <th>МАРТ</th>
                <th>ДАТА</th>
              </tr>
            </thead>
            <tbody>
              <tr className="divider-row">
                <td colSpan="5"><div className="table-divider"></div></td>
              </tr>
              <tr>
                <td><a href="#" className="concert-link">САНКТ-ПЕТЕРБУРГ</a></td>
                <td><a href="#" className="concert-link">06.08.2025</a></td>
              </tr>
              <tr className="divider-row">
                <td colSpan="5"><div className="table-divider"></div></td>
              </tr>
              <tr>
                <td><a href="#" className="concert-link">МОСКВА</a></td>
                <td><a href="#" className="concert-link">09.08.2025</a></td>
              </tr>
              <tr className="divider-row">
                <td colSpan="5"><div className="table-divider"></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Новый релиз */}
      <section id="new-release" className="section">
        <h1 className="section-title">НОВЫЙ РЕЛИЗ</h1>
        
        <div className="release-container">
          <div className="release-image">
            <img src={boss} alt="BOSS" className="boss-cover" />
            <h2 className="release-title">INSTASAMKA - BOSS</h2>
            <h2 className="release-prod">prod. realmoneyken</h2> 
          </div>
        </div>
      </section>

      {/* Магазин */}
      <section id="shop" className="section">
        <h1 className="section-title">МАГАЗИН</h1>
        <h2 className="coming-soon">скоро открытие</h2>
        
        <div className="shop-gallery">
          <div className="shop-row">
            <img src={shop1} alt="Shop item" />
            <img src={shop2} alt="Shop item" />
            <img src={shop3} alt="Shop item" />
          </div>
          <div className="shop-row">
            <img src={shop4} alt="Shop item" />
            <img src={shop5} alt="Shop item" />
            <img src={shop6} alt="Shop item" />
          </div>
          <div className="shop-row">
            <img src={shop7} alt="Shop item" />
            <img src={shop8} alt="Shop item" />
            <img src={shop9} alt="Shop item" />
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="section">
        <h1 className="section-title">КОНТАКТЫ</h1>

        <div className="contacts-container">
          <div className="contacts-left">
            
            <div className="contact-block">
              <h2 className="contact-subtitle">БУКИНГ АРТИСТА</h2>
              <p className="contact-info">+7 (964) 728-78-88</p>
            </div>

            <div className="contact-block">
              <h2 className="contact-subtitle">СВЯЗИ С ОБЩЕСТВЕННОСТЬЮ</h2>
              <p className="contact-info">maxim@namnecash.ru</p>
            </div>

            <div className="contact-block">
              <h2 className="contact-subtitle">БИЛЕТЫ НА КОНЦЕРТ</h2>
              <p className="contact-info">maxim@namnecash.ru</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

