import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';

import instasamkaImage from './img/INSTASAMKA1.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import telegram from './img/telegram.png';
import vk from './img/vk.png';
import twitch from './img/twitch.png';
import dzen from './img/dzen.png';
import youtube from './img/youtube.png';
import tiktok from './img/tiktok.png';
import email from './img/email.png';


function Contacts() {
  return (
    <div className="app">
      {/* Шапка */}
      <header className="header">
        <div className="nav-group">
          <Link to="/biografy" className="nav-link">БИОГРАФИЯ</Link>
          <Link to="/media" className="nav-link">МЕДИА</Link>
        </div>

        <div className="nav-group">
          <Link to="/" className="logo">INSTASAMKA</Link>
        </div>

        <div className="nav-group">
          <Link to="/music" className="nav-link">МУЗЫКА</Link>
          <Link to="/contacts" className="nav-link" style={{ color: '#8B0000' }}>КОНТАКТЫ</Link>
        </div>
      </header>

      {/* Главная картинка */}
      <div className="main-image">
        <img src={instasamkaImage} alt="Instasamka" />
      </div>

       {/* Контакты */}
      <section id="contact" className="contacts-page">
        <h1 className="section-title">КОНТАКТЫ</h1>

        <div className="contacts-grid">
          {/* Левый столбец */}
          <div className="contacts-column">
            
            <div className="contact-item">
              <img src={instagram} alt="Instagram" className="social-icon" />
              <div>
                <p className="contact-label">Instagram*</p>
                <a href="#" className="contact-link">@instasamka</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={telegram} alt="Telegram" className="social-icon" />
              <div>
                <p className="contact-label">Telegram</p>
                <a href="#" className="contact-link">t.me/instasamkacore</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={twitch} alt="Twitch" className="social-icon" />
              <div>
                <p className="contact-label">Twitch</p>
                <a href="#" className="contact-link">twitch.tv/ikensamka</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={youtube} alt="YouTube" className="social-icon" />
              <div>
                <p className="contact-label">YouTube</p>
                <a href="#" className="contact-link">youtube.com/@INSTASAMKA</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={email} alt="Email" className="social-icon" />
              <div>
                <p className="contact-label">E-mail</p>
                <a href="#" className="contact-link">maxim@namnecash.ru</a>
              </div>
            </div>
          </div>

          {/* Правый столбец */}
          <div className="contacts-column">

            <div className="contact-item">
              <img src={facebook} alt="Facebook" className="social-icon" />
              <div>
                <p className="contact-label">Facebook*</p>
                <a href="#" className="contact-link">facebook.com/instasamka</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={vk} alt="ВКонтакте" className="social-icon" />
              <div>
                <p className="contact-label">ВКонтакте</p>
                <a href="#" className="contact-link">vk.com/instasamka</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={dzen} alt="Дзен" className="social-icon" />
              <div>
                <p className="contact-label">Дзен</p>
                <a href="#" className="contact-link">dzen.ru/instasamka</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={tiktok} alt="TikTok" className="social-icon" />
              <div>
                <p className="contact-label">TikTok</p>
                <a href="#" className="contact-link">tiktok.com/@instasamka</a>
              </div>
            </div>

            <div className="contact-item">
              <img src={email} alt="Telephone" className="social-icon" />
              <div>
                <p className="contact-label">БУКИНГ АРТИСТА</p>
                <a href="#" className="contact-link">+7 (964) 728-78-88</a>
              </div>
            </div>
          </div>
        </div>

        <div className="disclaimer">* Instagram и Facebook принадлежат компании Meta, признанной экстремистской организацией и запрещенной в РФ</div>
      </section>

    </div>
  );
}

export default Contacts;
