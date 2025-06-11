import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contacts.css';

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

import { CardContact } from '../../components/card-contact';

const data = [
  {label:'Instagram*', title:'@instasamka', img:instagram, alt:'Instagram*', link:'https://instagram.com/instasamka/'},
  {label:'Facebook*', title:'facebook.com/instasamka', img:facebook, alt:'Facebook*', link:'https://www.facebook.com/instasamka'},
  {label:'Telegram', title:'t.me/instasamkacore', img:telegram, alt:'Telegram', link:'tg://resolve?domain=instasamkacore'},
  {label:'ВКонтакте', title:'vk.com/instasamka', img:vk, alt:'ВКонтакте', link:'https://vk.com/instasamka'},
  {label:'Twitch', title:'prod. realmoneyken', img:twitch, alt:'Twitch', link:'https://www.twitch.tv/kensamka'},
  {label:'Дзен', title:'dzen.ru/instasamka', img:dzen, alt:'Дзен', link:'https://dzen.ru/instasamka'},
  {label:'YouTube', title:'youtube.com/@INSTASAMKA', img:youtube, alt:'YouTube', link:'https://www.youtube.com/c/INSTASAMKA'},
  {label:'TikTok', title:'tiktok.com/@instasamka', img:tiktok, alt:'TikTok', link:'https://www.tiktok.com/@instasamka'},
  {label:'E-mail', title:'maxim@namnecash.ru', img:email, alt:'E-mail', link:''},
  {label:'БУКИНГ АРТИСТА', title:'+7 (964) 728-78-88', img:email, alt:'БУКИНГ АРТИСТА', link:''},
]

function Contacts() {
  
  // Пролистывание

  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
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
        <h1 ref={headerRef} className="section-title">КОНТАКТЫ</h1>

        <div className="contacts-grid">

          {data.map(el=><CardContact label={el.label} title={el.title} img={el.img} alt={el.alt} link={el.link}/>)}

       
        </div>

        <div className="disclaimer">* Instagram и Facebook принадлежат компании Meta, признанной экстремистской организацией и запрещенной в РФ</div>
      </section>


      {/* Кнопка "Вверх" */}

      <button 
        className="scroll-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Наверх">
        ↑
      </button>

    </div>
  );
}

export default Contacts;
