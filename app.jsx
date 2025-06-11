import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Contacts from './pages/contacts/contacts.jsx';
import Biografy from './pages/biografy/biografy.jsx';
import Music from './pages/music/music.jsx';
import Media from './pages/media/media.jsx';

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

import { NewReliz } from './components/new-reliz';

const data = [{title:'INSTASAMKA - BOSS', title1:'prod. realmoneyken', img:boss, alt:'BOSS 2025', link:'https://music.yandex.ru/album/36376370/track/138562177?utm_source=web&utm_medium=copy_link'}]

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
                <th>АВГУСТ</th>
                <th>ДАТА</th>
              </tr>
            </thead>
            <tbody>
              <tr className="divider-row">
                <td colSpan="5"><div className="table-divider"></div></td>
              </tr>
              <tr>
                <td><a href="https://afisha.yandex.ru/saint-petersburg/concert/instasamka-2025-08-05?source=artist" className="concert-link">САНКТ-ПЕТЕРБУРГ</a></td>
                <td><a href="https://afisha.yandex.ru/saint-petersburg/concert/instasamka-2025-08-05?source=artist" className="concert-link">05.08.2025</a></td>
              </tr>
              <tr className="divider-row">
                <td colSpan="5"><div className="table-divider"></div></td>
              </tr>
              <tr>
                <td><a href="https://afisha.yandex.ru/moscow/concert/instasamka-2025-08-08?source=artist" className="concert-link">МОСКВА</a></td>
                <td><a href="https://afisha.yandex.ru/moscow/concert/instasamka-2025-08-08?source=artist" className="concert-link">08.08.2025</a></td>
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

          {data.map(el=><NewReliz title={el.title} title1={el.title1} img={el.img} alt={el.alt} link={el.link}/>)}

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


      {/* Кнопка "Вверх" */}

      <button 
        className="scroll-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Вверх">
        ↑
      </button>

    </div>
  );
}

