import React, { useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import './biografy.css';

import instasamkaImage from './img/INSTASAMKA1.png';

function Biografy() {

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
            <Link to="/biografy" className="nav-link" style={{ color: '#8B0000' }}>БИОГРАФИЯ</Link>
            <Link to="/media" className="nav-link">МЕДИА</Link>
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
    

      {/* Биография */}
      <section className="biografy-page">
        <h1 ref={headerRef} className="biografy-title">INSTASAMKA - российская поп-певица и рэп-исполнительница, тиктокер.</h1>
        
        <div className="biografy-content">
          <p>В 2017 году начала снимать видео разговорного жанра и короткие комедийные ролики — вайны; 
            публиковала их в Instagram под псевдонимом «Президентша». Позже псевдоним был изменён на «Instasamka».</p>
          
          <p>В июне 2019 года выпустила свой первый музыкальный альбом 
            <a href="https://www.youtube.com/watch?v=OiRHVkp_vBs" target="_blank" rel="noopener noreferrer" className='biografy-link'>
            <strong> «Born to Flex» </strong></a> в жанре рэп, 
            содержащий 12 сольных композиций общей длительностью 26 минут.</p>
          
          <p>За 2020 год Инстасамкой было выпущено три альбома: сольные — 
            <a href="https://music.yandex.ru/album/10294760?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
            <strong> «Mamacita» </strong></a> и  
            <a href="https://music.yandex.ru/album/11013231?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
            <strong> «Спасибо папаша»</strong></a>, 
            а также совместный с Moneyken — 
            <a href="https://music.yandex.ru/album/13265770?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
            <strong>«Семейный бизнес»</strong></a>. Последний после релиза дебютировал 
            на первое место альбомного чарта российского сегмента Apple Music.</p>

          <p>С конца 2020 года многие чартерные синглы Инстасамки становились широко известны в TikTok ещё до их официального релиза. 
          Согласно исследованию аналитического агентства Brand Analytics, аккаунт Дарьи в данной соцсети по состоянию на февраль 2021 года 
          был одним из <strong>самых популярных</strong> в России. </p>
          
          <p> В ноябре 2021 года выпустила сольный 
            <a href="https://music.yandex.ru/album/19332695?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
            <strong> альбом «Moneydealer»</strong></a>. 
          В релиз вошло 7 композиций общей длительностью 14 минут. Две из них —
          <a href="https://music.yandex.ru/album/19332695/track/90569161?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Lipsi Ha»</strong></a> и 
          <a href="https://music.yandex.ru/album/19332695/track/84894425?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Juicy» </strong></a> 
          — ранее выпущенные синглы. 
          По итогам 2021 года Moneydealer вошёл в список лучших альбомов за год, 
          по версии музыкального журналиста Антона Вагина из издания «РБК Стиль», и расположился на 22 месте топ-50 
          отечественных альбомов года, по версии музыкального портала The Flow. </p>
        
          <p> Летом 2022 года Инстасамка выпустила лонг-плей на 15 треков в жанре 
          рэп под названием 
          <a href="https://music.yandex.ru/album/22823205?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Queen of Rap»</strong></a>, общая длительность которого составила 33 минуты. 
          После его релиза поменяла вектор развития творчества, сменив жанр музыки на поп. Один из синглов в новом жанре, 
          вышедший 25 ноября, под названием 
          <a href="https://music.yandex.ru/album/24375438/track/109140203?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «За деньги да»</strong></a>, дебютировал в чартах Apple Music России, 
          Москвы и Санкт-Петербурга, а также в чартах VK Музыки, Яндекс Музыки и YouTube Music.  </p>
          
          <p> Данный трек, а также ранее 
          выпущенные синглы в новом жанре, а именно: 
          <a href="https://music.yandex.ru/album/24375438/track/107281308?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Popstar»</strong></a> и 
          <a href="https://music.yandex.ru/album/24375438/track/108756423?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Волосы назад»</strong></a>, 
          вошли в дебютный полноформатный альбом Дарьи в жанре поп. 
          <a href="https://music.yandex.ru/album/24375438?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> Альбом «Popstar»</strong></a> вышел 16 декабря — 
          в его состав вошло 11 треков общей длительностью 25 минут. По итогам прошедшего года Инстасамка стала одной 
          из главных поп-звёзд России за 2022 год по оценкам издания Meduza. </p>

          <p> В конце 2023 года вышло несколько треков: 
          <a href="https://music.yandex.ru/album/24945899/track/111556054?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Отключаю телефон»</strong></a>, 
          <a href="https://music.yandex.ru/album/25237046/track/112328515?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Жара»</strong></a>, 
          <a href="https://music.yandex.ru/album/25596005/track/113194195?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Тяги»</strong></a>, 
          <a href="https://music.yandex.ru/album/25889157/track/113902874?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Bestie»</strong></a>, а также дуэт с Лолитой – 
          <a href="https://music.yandex.ru/album/28144280/track/119108048?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «На Титанике»</strong></a>.
          В 2024 году Инстасамка выпустила синглы 
          <a href="https://music.yandex.ru/album/29527280/track/122176893?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Грустный дэнс»</strong></a>, 
          <a href="https://music.yandex.ru/album/30000006/track/123241303?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Мой мармеладный» </strong></a>
          (кавер на песню Кати Лель) и 
          <a href="https://music.yandex.ru/album/30565417/track/124503431?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Пампим нефть»</strong></a>.</p>
          
          <p>В октябре 2024 года в Telegram-канале <strong>группы "Ленинград"</strong> появилась информация о том, 
          что певица Instasamka станет их солисткой. 
          Уже 8 ноября 2024 года вышел совместный альбом Инстасамки и группы "Ленинград" -
          <a href="https://music.yandex.ru/album/33939785?utm_source=web&utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className='biografy-link'>
          <strong> «Бумеры и зумеры»</strong></a>. 
          Их совместная работа с Инстасамкой над альбомом проходила «игриво и легко», однако, они не думали о продолжении 
          совместного творчества.</p>

        </div>
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

export default Biografy;
