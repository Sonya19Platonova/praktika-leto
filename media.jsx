import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';

import instasamkaImage from './img/INSTASAMKA1.png';

import blackRussia from './img/BLACKRUSSIA-clip.jpg'; 
import backstage from './img/backstage.jpg';

import marmeladclip from './img/marmelad-clip.jpg';
import pampimclip from './img/pampim-clip.jpg';

import photo1 from './img/photo1.jpg';
import photo2 from './img/photo2.jpg';
import photo3 from './img/photo3.jpg';

function Media() {
  return (
    <div className="app">
      {/* Шапка */}
      <header className="header">
        <div className="nav-group">
          <Link to="/biografy" className="nav-link">БИОГРАФИЯ</Link>
          <Link to="/media" className="nav-link" style={{ color: '#8B0000' }}>МЕДИА</Link>
        </div>

        <div className="nav-group">
          <Link to="/" className="logo">INSTASAMKA</Link>
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

      {/* Медиа */}
      <section className="media-page">
        <h1 className="section-title">МЕДИА</h1>

        <div className="collaboration">
          <div className="collab-images">
            <img src={blackRussia} alt="BLACK RUSSIA" className="collab-image" />
          </div>
          <h3 className="collab-title">INSTASAMKA x BLACK RUSSIA</h3>
        </div>

        <div className="backstage">
          <div className="backstage-content">
            <img src={backstage} alt="BACKSTAGE" className="backstage-image" />
            <h3 className="backstage-title">BACKSTAGE как снимали INSTASAMKA - BLACK RUSSIA</h3>
          </div>
          <p className="backstage-text">
            Instasamka снова взрывает интернет своим новым клипом – это армада в аплодисментах дерзкой эстетики, 
            дорогих образов и затягивающего бита. Особое внимание приковывают детали стиля, блестящие аксессуары и та энергия, 
            которую певица излучает в каждом кадре. Клип уже вызывает бурные обсуждения – одни восхищаются смелостью артиста, 
            другие с интересом разбирают скрытые отсылки и детали. Одно ясно точно – этот релиз снова доказывает, что instasamka 
            не просто занимает позиции, а задаёт их. Не пропустите – включайте, смотрите и заряжайтесь её неугасающей энергией!
          </p>
        </div>

        {/* Клипы */}
        <h1 className="section-title">КЛИПЫ</h1>
        <div className="clip">
       
          <div className="clip-item">
            <img src={pampimclip} alt="Пампим" className="clip-image" />
            <p className="clip-title">INSTASAMKA - Пампим нефть (Премьера клипа, 2024)</p>
          </div>

          <div className="clip-item">
            <img src={marmeladclip} alt="Мармелад" className="clip-image" />
            <p className="clip-title">INSTASAMKA - Мой мармеладный (Премьера клипа, 2024)</p>
          </div>

        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="gallery">
        <h1 className="section-title">ГАЛЕРЕЯ</h1>
        <p className="gallery-title">Запись DISS, 2025</p>

        <div className="gallery">
          <div className="gallery-photo">
            <img src={photo3} alt="Photo1" />
            <img src={photo1} alt="Photo2" />
            <img src={photo2} alt="Photo3" />
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="contact">
        <h1 className="section-title">КОНТАКТЫ</h1>

        <div className="contacts-container">
          <div className="contacts-left">
            
            <div className="contact-block">
              <h2 className="contact-subtitle">YOUTUBE</h2>
              <a href="#" className="contact-info">youtube.com/@INSTASAMKA</a>
            </div>

            <div className="contact-block">
              <h2 className="contact-subtitle">VK ВИДЕО</h2>
              <a href="#" className="contact-info">vkvideo.ru/@instasamka</a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Media;
