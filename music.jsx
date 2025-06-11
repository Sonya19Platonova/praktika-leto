import React, { useState, useEffect, useRef, useReducer, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import './music.css';

import instasamkaImage from './img/INSTASAMKA1.png';
import boss from './img/pesni/BOSS.png';
import horosho from './img/pesni/horosho.jpg';
import hoshu from './img/pesni/hochu.jfif';
import kendall from './img/pesni/kendall.jfif';
import tiandi from './img/pesni/tiandi.png';
import neft from './img/pesni/neft.jpg';
import marmelad from './img/pesni/marmelad.jfif';
import grustniydens from './img/pesni/grustniydens.jpg';
import sreda from './img/pesni/sreda.jpg';
import zaletaivtrendi from './img/pesni/zaletaivtrendi.jpg';
import natitanike from './img/pesni/natitanike.jpg';
import alfasamka from './img/pesni/alfasamka.jpg';
import whoiam from './img/pesni/whoiam.jpg';
import samolet from './img/pesni/samolet.jpg';
import biznesklass from './img/pesni/biznesklass.jpg';
import vmoeigolove from './img/pesni/vmoeigolove.jpg';
import bestie from './img/pesni/bestie.jpg';
import nottelephone from './img/pesni/nottelephone.jpg';
import spedupalbum from './img/pesni/spedupalbum.jpg';
import tyagi from './img/pesni/tyagi.jpg';
import jara from './img/pesni/jara.jpg';
import shake from './img/pesni/shake.jpg';
import popstar from './img/pesni/popstar.jpg';
import queenofrap from './img/pesni/queenofrap.jpg';
import snova from './img/pesni/snova.jpg';
import moneyday from './img/pesni/moneyday.jpg';
import viton2 from './img/pesni/viton2.jpg';
import moneydealer from './img/pesni/moneydealer.webp';
import terminal from './img/pesni/terminal.jpg';
import fact from './img/pesni/fact.jpg';
import mommy from './img/pesni/mommy.jpg';
import familybiznes from './img/pesni/familybiznes.jpg';
import goba from './img/pesni/goba.jpg';
import rpg from './img/pesni/rpg.jpg';
import viton from './img/pesni/viton.jpg';
import wordup from './img/pesni/wordup.jpg';
import spasibopapasha from './img/pesni/spasibopapasha.jpg';
import polaroid from './img/pesni/polaroid.jpg';
import bloodyparty from './img/pesni/bloodyparty.jpg';
import mamacita from './img/pesni/mamacita.jpg';
import interviu from './img/pesni/interviu.jpg';
import gta from './img/pesni/gta.jpg';
import borntoflex from './img/pesni/borntoflex.jpg';
import ding from './img/pesni/dingdingdong.jpg';
import mikrutie from './img/pesni/mikrutie.jpg';
import mynamedasha from './img/pesni/mynamedasha.jpg';
import heavymetal from './img/pesni/heavymetal.jpg';
import nahodu from './img/pesni/nahodu.jpg';
import triple from './img/pesni/triplebaby.jpg';
import ariflamee from './img/pesni/ariflame.jpg';
import kupidoon from './img/pesni/kupidon.jpg';
import splashoout from './img/pesni/splashout.jpg';
import { CardMusic } from '../../components/card-music';


const data = [
  // Альбом 1
  {title:'BOSS 2025', img:boss, alt:'BOSS 2025', link:'https://music.yandex.ru/album/36376370/track/138562177?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 2
  {title:'АЛЬБОМ БУМЕРЫ И ЗУМЕРЫ 2024', img:horosho, alt:'АЛЬБОМ БУМЕРЫ И ЗУМЕРЫ 2024', link:'https://music.yandex.ru/album/33939785?utm_source=web&utm_medium=copy_link'},

  // Альбом 3
  {title:'ТАК ХОЧУ 2024', img:hoshu, alt:'ТАК ХОЧУ 2024', link:'https://music.yandex.ru/album/32948523/track/130297737?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 4
  {title:'KENDALL 2024', img:kendall, alt:'KENDALL 2024', link:'https://music.yandex.ru/album/31574877/track/126844372?utm_source=web&utm_medium=copy_link'},

  // Альбом 5
  {title:'ТЫ И Я 2024', img:tiandi, alt:'ТЫ И Я 2024', link:'https://music.yandex.ru/album/31257385/track/126065334?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 6
  {title:'ПАМПИМ НЕФТЬ 2024', img:neft, alt:'ПАМПИМ НЕФТЬ 2024', link:'https://music.yandex.ru/album/30565417/track/124503431?utm_source=web&utm_medium=copy_link'},

  // Альбом 7
  {title:'МОЙ МАРМЕЛАДНЫЙ 2024', img:marmelad, alt:'МОЙ МАРМЕЛАДНЫЙ 2024', link:'https://music.yandex.ru/album/30000006/track/123241303?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 8
  {title:'ГРУСТНЫЙ ДЭНС 2024', img:grustniydens, alt:'ГРУСТНЫЙ ДЭНС 2024', link:'https://music.yandex.ru/album/29527280/track/122176893?utm_source=web&utm_medium=copy_link'},

  // Альбом 9
  {title:'СРЕДА 2023', img:sreda, alt:'СРЕДА 2023', link:'https://music.yandex.ru/album/28507718/track/119945229?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 10
  {title:'ЗАЛЕТАЙ В ТРЕНДЫ 2023', img:zaletaivtrendi, alt:'ЗАЛЕТАЙ В ТРЕНДЫ 2023', link:'https://music.yandex.ru/album/28212319/track/119260340?utm_source=web&utm_medium=copy_link'},

  // Альбом 11
  {title:'НА ТИТАНИКЕ 2023', img:natitanike, alt:'НА ТИТАНИКЕ 2023', link:'https://music.yandex.ru/album/28144280/track/119108048?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 12
  {title:'АЛЬФА-САМКА 2023', img:alfasamka, alt:'АЛЬФА-САМКА 2023', link:'https://m.vk.com/video-182863061_456241117?comments=1&offset=20&list=bcb0ff3d67132317c6'},

  // Альбом 13
  {title:'WHO I AM 2023', img:whoiam, alt:'WHO I AM 2023', link:'https://music.yandex.ru/album/27285578/track/117168180?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 14
  {title:'МАЛЕНЬКИЙ САМОЛЕТ 2023', img:samolet, alt:'МАЛЕНЬКИЙ САМОЛЕТ 2023', link:'https://music.yandex.ru/album/26654240/track/115632230?utm_source=web&utm_medium=copy_link'},

  // Альбом 15
  {title:'БИЗНЕС КЛАСС 2023', img:biznesklass, alt:'БИЗНЕС КЛАСС 2023', link:'https://music.yandex.ru/album/26682884/track/115715671?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 16
  {title:'В МОЕЙ ГОЛОВЕ 2023', img:vmoeigolove, alt:'В МОЕЙ ГОЛОВЕ 2023', link:'https://music.yandex.ru/album/26380646/track/114978716?utm_source=web&utm_medium=copy_link'},

  // Альбом 17
  {title:'BESTIE 2023', img:bestie, alt:'BESTIE 2023', link:'https://music.yandex.ru/album/25889157/track/113902874?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 18
  {title:'ОТКЛЮЧАЮ ТЕЛЕФОН 2023', img:nottelephone, alt:'ОТКЛЮЧАЮ ТЕЛЕФОН 2023', link:'https://music.yandex.ru/album/24945899/track/111556054?utm_source=web&utm_medium=copy_link'},

  // Альбом 19
  {title:'АЛЬБОМ SPED UP ALBUM 2023', img:spedupalbum, alt:'АЛЬБОМ SPED UP ALBUM 2023', link:'https://music.yandex.ru/album/25660387?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 20
  {title:'ТЯГИ 2023', img:tyagi, alt:'ТЯГИ 2023', link:'https://music.yandex.ru/album/25596005?utm_source=web&utm_medium=copy_link'},

  // Альбом 21
  {title:'ЖАРА 2023', img:jara, alt:'ЖАРА 2023', link:'https://music.yandex.ru/album/25237046?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 22
  {title:'SHAKE 2022', img:shake, alt:'SHAKE 2022', link:'https://music.yandex.ru/album/22020021/track/103151474?utm_source=web&utm_medium=copy_link'},

  // Альбом 23
  {title:'АЛЬБОМ POPSTAR 2022', img:popstar, alt:'АЛЬБОМ POPSTAR 2022', link:'https://music.yandex.ru/album/24375438?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 24
  {title:'АЛЬБОМ QUEEN OF RAP 2022', img:queenofrap, alt:'АЛЬБОМ QUEEN OF RAP 2022', link:'https://music.yandex.ru/album/22823205?utm_source=web&utm_medium=copy_link'},

  // Альбом 25
  {title:'СНОВА? 2022', img:snova, alt:'СНОВА? 2022', link:'https://music.yandex.ru/album/22289632/track/103922875?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 26
  {title:'MONEY DAY 2021', img:moneyday, alt:'MONEY DAY 2021', link:'https://music.yandex.ru/album/14927313/track/81057255?utm_source=web&utm_medium=copy_link'},

  // Альбом 27
  {title:'ВИТОН 2 2021', img:viton2, alt:'ВИТОН 2 2021', link:'https://music.yandex.ru/album/20020400/track/97276442?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 28
  {title:'АЛЬБОМ MONEYDEALER 2021', img:moneydealer, alt:'АЛЬБОМ MONEYDEALER 2021', link:'https://music.yandex.ru/album/19332695?utm_source=web&utm_medium=copy_link'},

  // Альбом 29
  {title:'TERMINAL 2021', img:terminal, alt:'TERMINAL 2021', link:'https://music.yandex.ru/album/16537884?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 30
  {title:'ФАКТ 2021', img:fact, alt:'ФАКТ 2021', link:'https://music.yandex.ru/album/12166857/track/71420915?utm_source=web&utm_medium=copy_link'},

  // Альбом 31
  {title:'MOMMY 2021', img:mommy, alt:'MOMMY 2021', link:'https://music.yandex.ru/album/14035695/track/78491690?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 32
  {title:'АЛЬБОМ СЕМЕЙНЫЙ БИЗНЕС 2020', img:familybiznes, alt:'АЛЬБОМ СЕМЕЙНЫЙ БИЗНЕС 2020', link:'https://music.yandex.ru/album/13265770?utm_source=web&utm_medium=copy_link'},

  // Альбом 33
  {title:'ГОБА 2020', img:goba, alt:'ГОБА 2020', link:'https://music.yandex.ru/album/12160654?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 34
  {title:'RPG 2020', img:rpg, alt:'RPG 2020', link:'https://music.yandex.ru/album/10716340?utm_source=web&utm_medium=copy_link'},

  // Альбом 35
  {title:'ВИТОН 2020', img:viton, alt:'ВИТОН 2020', link:'https://music.yandex.ru/album/12044575?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 36
  {title:'WORD UP 2020', img:wordup, alt:'WORD UP 2020', link:'https://music.yandex.ru/album/11434382?utm_source=web&utm_medium=copy_link'},

  // Альбом 37
  {title:'АЛЬБОМ СПАСИБО ПАПАША 2020', img:spasibopapasha, alt:'АЛЬБОМ СПАСИБО ПАПАША 2020', link:'https://music.yandex.ru/album/11013231?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 38
  {title:'POLAROID 2020', img:polaroid, alt:'POLAROID 2020', link:'https://music.yandex.ru/album/10014402/track/63124627?utm_source=web&utm_medium=copy_link'},

  // Альбом 39
  {title:'BLOODY PARTY 2020', img:bloodyparty, alt:'BLOODY PARTY 2020', link:'https://music.yandex.ru/album/10574413/track/65372191?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 40
  {title:'АЛЬБОМ MAMACITA 2020', img:mamacita, alt:'АЛЬБОМ MAMACITA 2020', link:'https://music.yandex.ru/album/10294760?utm_source=web&utm_medium=copy_link'},

  // Альбом 41
  {title:'ИНТЕРВЬЮ 2020', img:interviu, alt:'ИНТЕРВЬЮ 2020', link:'https://music.yandex.ru/album/10014365/track/63124484?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 42
  {title:'GTA 2019', img:gta, alt:'GTA 2019', link:'https://music.yandex.ru/album/9134693/track/59556187?utm_source=web&utm_medium=copy_link'},

  // Альбом 43
  {title:'АЛЬБОМ BORN TO FLEX 2019', img:borntoflex, alt:'АЛЬБОМ BORN TO FLEX 2019', link:'https://www.youtube.com/watch?v=OiRHVkp_vBs'},
  
  // Альбом 44
  {title:'АЛЬБОМ ТРИПЛ МАЛЫШ 2019', img:ding, alt:'АЛЬБОМ ТРИПЛ МАЛЫШ 2019', link:'https://www.youtube.com/watch?v=3b84sw4kCt0'},

  // Альбом 45
  {title:'МЫ КРУТЫЕ 2019', img:mikrutie, alt:'МЫ КРУТЫЕ 2019', link:'https://music.yandex.ru/album/9471391/track/60972952?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 46
  {title:'МОЕ ИМЯ ДАША 2019', img:mynamedasha, alt:'МОЕ ИМЯ ДАША 2019', link:'https://music.yandex.ru/album/8845352/track/58359948?utm_source=web&utm_medium=copy_link'},

  // Альбом 47
  {title:'HEAVY METAL 2019', img:heavymetal, alt:'HEAVY METAL 2019', link:'https://genius.com/Instasamka-heavy-metal-lyrics'},
  
  // Альбом 48
  {title:'НА ХОДУ 2019', img:nahodu, alt:'НА ХОДУ 2019', link:'https://music.yandex.ru/album/8875818/track/58472739?utm_source=web&utm_medium=copy_link'},

  // Альбом 49
  {title:'TRIPLE BABY TOUR 2019', img:triple, alt:'TRIPLE BABY TOUR 2019', link:'https://music.yandex.ru/album/8878505?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 50
  {title:'ARIFLAME 2019', img:ariflamee, alt:'ARIFLAME 2019', link:'https://www.youtube.com/watch?v=OvBqrfI9Yx0'},

  // Альбом 51
  {title:'KUPIDON 2019', img:kupidoon, alt:'KUPIDON 2019', link:'https://music.yandex.ru/album/8691385/track/57697115?utm_source=web&utm_medium=copy_link'},
  
  // Альбом 52
  {title:'SPLASH OUT 2019', img:splashoout, alt:'SPLASH OUT 2019', link:'https://genius.com/Instasamka-splash-out-lyrics'},

]

// Контекст для обмена данными между компонентами
const LyricsContext = createContext();  

// Начальное состояние
const initialState = {
  lyrics: {},              // Объект с URL текстов песен
  loading: false,          // Состояние загрузки: идет или не идет
  error: null,             // В начале ошибок нет
  currentSong: null        // Название текущей песни для отображения статуса
};

// Управление состоянием
function lyricsReducer(state, action) {
  if (action.type === 'FETCH_START') {    // Начало загрузки текста песни
    return {
      ...state,                           // Состояние, основанное на текущем
      loading: true,                      // Состояние загрузки: идет
      error: null,                        // Нет ошибок 
      currentSong: action.payload,        // Устанавливается название песни
    };
  } else if (action.type === 'FETCH_SUCCESS') {    // Окончание загрузки текста песни
    return {
      ...state,
      loading: false,                                                            // Состояние загрузки: не идет (завершено)
      lyrics: { ...state.lyrics, [action.payload.song]: action.payload.url },    // Добавляет новую пару "песня: url", сохраняя пары до этого
      currentSong: null,                                                         // Нет названия для поиска
    };
  } else if (action.type === 'FETCH_ERROR') {   //Ошибка загрузки
    return {
      ...state,
      loading: false,                           // Состояние загрузки: не идет (произошла ошибка) 
      error: action.payload,                    // Сохранение ошибки 
      currentSong: null,                        // Сброс названия песни
    };
  } else {
    return state;                               // По умолчанию возвращаем исходное состояние (если действие неизвестно)
  }
}

// Компонент для отображения ссылки на текст песни
const SongLyrics = ({ songTitle }) => {                     // songTitle - название песни для поиска
  const { state, dispatch } = useContext(LyricsContext);    // Подключение к состоянию и функции dispatch. state - текущее состояние, dispatch - отправка действия
  const [isVisible, setIsVisible] = useState(false);        // Состояние. Изначально - false, ссылка не показывается

  useEffect(() => {
    if (isVisible && !state.lyrics[songTitle]) {            // Срабатывает при изменении isVisible или если нет URL для песни
      fetchLyricsUrl(songTitle);                            // Вызывается функция fetchLyricsUrl для загрузки URL
    }
  }, [isVisible, songTitle]);

  const fetchLyricsUrl = async (song) => {                  // async (асинхронная функция) для await
    dispatch({ type: 'FETCH_START', payload: song });       // Отправление состояние, чтобы показать начало загрузки
    try {
      const CLIENT_ACCESS_TOKEN = '_3Hvm7rRvCFl_ZUpzYAhToqM6oRxbp57PzO5cUf4DD0ZvIYJSvosRIMJsMWPVZQK';  // Авторизация API Genius
      
      // Поиск песни по названию
      const searchResponse = await fetch(                   // await (ожидание завершения и получения результата)
        `https://api.genius.com/search?q=${encodeURIComponent(`Instasamka ${song}`)}&access_token=${CLIENT_ACCESS_TOKEN}`  //Поиск по строке "Instasamka песня"
      );
      const searchData = await searchResponse.json();   // JSON-объект с результатами поиска

      if (!searchData.response.hits.length) {      // Если нет совпадений - ошибка
        throw new Error('Песня не найдена');       // throw (прерывание функции) и создание нового объекта
      }

      // Получение информации о песне (URL)
      const songId = searchData.response.hits[0].result.id;       // Получение ID первой найденной песни
      const songResponse = await fetch(
        `https://api.genius.com/songs/${songId}?access_token=${CLIENT_ACCESS_TOKEN}`  // Запрос для получение URL по найденному ID
      );
      const songData = await songResponse.json();     
      
      const lyricsUrl = songData.response.song.url;     // Получение URL с текстом нужной песни

      dispatch({                                // Состояние: загрузка завершена. Отправляется пара "песня, URL"
        type: 'FETCH_SUCCESS', 
        payload: { song, url: lyricsUrl } 
      });
    } catch (error) {
      dispatch({                                // Состояние: ошибка
        type: 'FETCH_ERROR', 
        payload: error.message 
      });
    }
  };

  const toggleVisibility = () => {      // Переключение состояния isVisible между true и false
    setIsVisible(!isVisible);
  };

  return (
    <div className="song-container">
      <h3 
        className="text-title"
        onClick={toggleVisibility}                                              // После клика вызывается toggleVisibility
        style={{ cursor: 'pointer', color: isVisible ? '#8B0000' : 'inherit' }}>   {/* Курсор - указатель, цвет: true - темнокрасный, false - какой был */}

        {songTitle} {isVisible ? '-' : '+'}                                     {/* Отображается название песни и символы "+" или "-" */}
      </h3>
      
      {state.loading && state.currentSong === songTitle && <p className='loading'>Загрузка...</p>}   {/* Если состояние - загрузка, то сообщение "Загрузка" */}
      {state.error && <p className="error">{state.error}</p>}                                        {/* Если состояние - ошибка, то сообщение "Ошибка" */}                                   
       
      {isVisible && state.lyrics[songTitle] && (                       // Если isVisible=true или URL загружен, то ссылка отображается
        <div className="lyrics-text">
          <a href={state.lyrics[songTitle]} target="_blank" rel="noopener noreferrer" className='link-text-song'>
            Посмотреть текст песни на Genius </a>
        </div>
      )}
    </div>
  );
};

function Music() {
  const [state, dispatch] = useReducer(lyricsReducer, initialState);

  // Пролистывание

  const headerRef = useRef(null);
  
    useEffect(() => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);

  return (
    <LyricsContext.Provider value={{ state, dispatch }}>
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
            <Link to="/music" className="nav-link" style={{ color: '#8B0000' }}>МУЗЫКА</Link>
            <Link to="/contacts" className="nav-link">КОНТАКТЫ</Link>
          </div>
        </header>

        {/* Главная картинка */}
        <div className="main-image">
          <img src={instasamkaImage} alt="Instasamka" />
        </div>

        {/* Музыка */}
        <section className="music-page">

          <h1 ref={headerRef} className="section-title">МУЗЫКА</h1>
          
          <div className="albums-grid">

            {data.map(el=><CardMusic title={el.title} img={el.img} alt={el.alt} link={el.link}/>)}
    
          </div>

          {/* Текста */}
          <h1 className="text">ТЕКСТА</h1>
          {/* Альбом 1 */}
          <SongLyrics songTitle="BOSS" />

          {/* Альбом 2 */}
          <SongLyrics songTitle="АЛЬБОМ БУМЕРЫ И ЗУМЕРЫ INSTASAMKA & ЛЕНИНГРАД" />

          {/* Альбом 3 */}
          <SongLyrics songTitle="ТАК ХОЧУ" />

          {/* Альбом 4 */}
          <SongLyrics songTitle="KENDALL" />

          {/* Альбом 5 */}
          <SongLyrics songTitle="ТЫ И Я" />

          {/* Альбом 6 */}
          <SongLyrics songTitle="ПАМПИМ НЕФТЬ" />

          {/* Альбом 7 */}
          <SongLyrics songTitle="МОЙ МАРМЕЛАДНЫЙ" />

          {/* Альбом 8 */}
          <SongLyrics songTitle="ГРУСТНЫЙ ДЭНС" />

          {/* Альбом 9 */}
          <SongLyrics songTitle="СРЕДА" />

          {/* Альбом 10 */}
          <SongLyrics songTitle="ЗАЛЕТАЙ В ТРЕНДЫ" />

          {/* Альбом 11 */}
          <SongLyrics songTitle="НА ТИТАНИКЕ" />

          {/* Альбом 12 */}
          <SongLyrics songTitle="АЛЬФА-САМКА" />

          {/* Альбом 13 */}
          <SongLyrics songTitle="WHO I AM" />

          {/* Альбом 14 */}
          <SongLyrics songTitle="МАЛЕНЬКИЙ САМОЛЕТ" />

          {/* Альбом 15 */}
          <SongLyrics songTitle="БИЗНЕС КЛАСС" />

          {/* Альбом 16 */}
          <SongLyrics songTitle="В МОЕЙ ГОЛОВЕ" />

          {/* Альбом 17 */}
          <SongLyrics songTitle="BESTIE" />

          {/* Альбом 18 */}
          <SongLyrics songTitle="ОТКЛЮЧАЮ ТЕЛЕФОН" />

          {/* Альбом 19 */}
          <SongLyrics songTitle="АЛЬБОМ SPED UP ALBUM" />

          {/* Альбом 20 */}
          <SongLyrics songTitle="ТЯГИ" />

          {/* Альбом 21 */}
          <SongLyrics songTitle="ЖАРА" />

          {/* Альбом 22 */}
          <SongLyrics songTitle="SHAKE" />

          {/* Альбом 23 */}
          <SongLyrics songTitle="АЛЬБОМ POPSTAR INSTASAMKA" />

          {/* Альбом 24 */}
          <SongLyrics songTitle="АЛЬБОМ QUEEN OF RAP INSTASAMKA" />

          {/* Альбом 25 */}
          <SongLyrics songTitle="СНОВА?" />

          {/* Альбом 26 */}
          <SongLyrics songTitle="MONEY DAY" />

          {/* Альбом 27 */}
          <SongLyrics songTitle="ВИТОН 2" />

          {/* Альбом 28 */}
          <SongLyrics songTitle="АЛЬБОМ MONEYDEALER INSTASAMKA" />

          {/* Альбом 29 */}
          <SongLyrics songTitle="TERMINAL" />

          {/* Альбом 30 */}
          <SongLyrics songTitle="ФАКТ" />

          {/* Альбом 31 */}
          <SongLyrics songTitle="MOMMY" />

          {/* Альбом 32 */}
          <SongLyrics songTitle="АЛЬБОМ СЕМЕЙНЫЙ БИЗНЕС INSTASAMKA" />

          {/* Альбом 33 */}
          <SongLyrics songTitle="ГОБА" />

          {/* Альбом 34 */}
          <SongLyrics songTitle="RPG" />

          {/* Альбом 35 */}
          <SongLyrics songTitle="ВИТОН" />

          {/* Альбом 36 */}
          <SongLyrics songTitle="WORD UP" />

          {/* Альбом 37 */}
          <SongLyrics songTitle="АЛЬБОМ СПАСИБО ПАПАША INSTASAMKA" />

          {/* Альбом 38 */}
          <SongLyrics songTitle="POLAROID" />

          {/* Альбом 39 */}
          <SongLyrics songTitle="BLOODY PARTY" />

          {/* Альбом 40 */}
          <SongLyrics songTitle="АЛЬБОМ MAMACITA INSTASAMKA" />

          {/* Альбом 41 */}
          <SongLyrics songTitle="ИНТЕРВЬЮ" />

          {/* Альбом 42 */}
          <SongLyrics songTitle="GTA" />

          {/* Альбом 43 */}
          <SongLyrics songTitle="АЛЬБОМ BORN TO FLEX INSTASAMKA" />
          
          {/* Альбом 44 */}
          <SongLyrics songTitle="АЛЬБОМ ТРИПЛ МАЛЫШ INSTASAMKA" />

          {/* Альбом 45 */}
          <SongLyrics songTitle="МЫ КРУТЫЕ" />

          {/* Альбом 46 */}
          <SongLyrics songTitle="МОЕ ИМЯ ДАША" />

          {/* Альбом 47 */}
          <SongLyrics songTitle="HEAVY METAL" />

          {/* Альбом 48 */}
          <SongLyrics songTitle="НА ХОДУ" />

          {/* Альбом 49 */}
          <SongLyrics songTitle="TRIPLE BABY TOUR" />

          {/* Альбом 50 */}
          <SongLyrics songTitle="ARIFLAME" />

          {/* Альбом 51 */}
          <SongLyrics songTitle="KUPIDON" />

          {/* Альбом 52 */}
          <SongLyrics songTitle="SPLASH OUT" />

        </section>

        {/* Кнопка "Вверх" */}

        <button 
          className="scroll-to-top" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Наверх">
          ↑
      </button>

      </div>
    </LyricsContext.Provider>
  );
}

export default Music;
