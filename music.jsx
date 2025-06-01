import React from 'react'; 
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

function Music() {
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

        <h1 className="section-title">МУЗЫКА</h1>
        
        <div className="albums-grid">

          {data.map(el=><CardMusic title={el.title} img={el.img} alt={el.alt} link={el.link}/>)}
  
        </div>

        {/* Текста */}
        <h1 className="text">ТЕКСТА</h1>
        {/* Альбом 1 */}
        <h3 className="text-title">BOSS 2025</h3> 

        {/* Альбом 2 */}
        <h3 className="text-title">АЛЬБОМ БУМЕРЫ И ЗУМЕРЫ 2024</h3>

        {/* Альбом 3 */}
        <h3 className="text-title">ТАК ХОЧУ 2024</h3>

        {/* Альбом 4 */}
        <h3 className="text-title">KENDALL 2024</h3>

        {/* Альбом 5 */}
        <h3 className="text-title">ТЫ И Я 2024</h3>

        {/* Альбом 6 */}
        <h3 className="text-title">ПАМПИМ НЕФТЬ 2024</h3>

        {/* Альбом 7 */}
        <h3 className="text-title">МОЙ МАРМЕЛАДНЫЙ 2024</h3>

        {/* Альбом 8 */}
        <h3 className="text-title">ГРУСТНЫЙ ДЭНС 2024</h3>

        {/* Альбом 9 */}
        <h3 className="text-title">СРЕДА 2023</h3>

        {/* Альбом 10 */}
        <h3 className="text-title">ЗАЛЕТАЙ В ТРЕНДЫ 2023</h3>

        {/* Альбом 11 */}
        <h3 className="text-title">НА ТИТАНИКЕ 2023</h3>

        {/* Альбом 12 */}
        <h3 className="text-title">АЛЬФА-САМКА 2023</h3>

        {/* Альбом 13 */}
        <h3 className="text-title">WHO I AM 2023</h3>

        {/* Альбом 14 */}
        <h3 className="text-title">МАЛЕНЬКИЙ САМОЛЕТ 2023</h3>

        {/* Альбом 15 */}
        <h3 className="text-title">БИЗНЕС КЛАСС 2023</h3>

        {/* Альбом 16 */}
        <h3 className="text-title">В МОЕЙ ГОЛОВЕ 2023</h3>

        {/* Альбом 17 */}
        <h3 className="text-title">BESTIE 2023</h3>

        {/* Альбом 18 */}
        <h3 className="text-title">ОТКЛЮЧАЮ ТЕЛЕФОН 2023</h3>

        {/* Альбом 19 */}
        <h3 className="text-title">АЛЬБОМ SPED UP ALBUM 2023</h3>

        {/* Альбом 20 */}
        <h3 className="text-title">ТЯГИ 2023</h3>

        {/* Альбом 21 */}
        <h3 className="text-title">ЖАРА 2023</h3>

        {/* Альбом 22 */}
        <h3 className="text-title">SHAKE 2022</h3>

        {/* Альбом 23 */}
        <h3 className="text-title">АЛЬБОМ POPSTAR 2022</h3>

        {/* Альбом 24 */}
        <h3 className="text-title">АЛЬБОМ QUEEN OF RAP 2022</h3>

        {/* Альбом 25 */}
        <h3 className="text-title">СНОВА? 2022</h3>

        {/* Альбом 26 */}
        <h3 className="text-title">MONEY DAY 2021</h3>

        {/* Альбом 27 */}
        <h3 className="text-title">ВИТОН 2 2021</h3>

        {/* Альбом 28 */}
        <h3 className="text-title">АЛЬБОМ MONEYDEALER 2021</h3>

        {/* Альбом 29 */}
        <h3 className="text-title">TERMINAL 2021</h3>

        {/* Альбом 30 */}
        <h3 className="text-title">ФАКТ 2021</h3>

        {/* Альбом 31 */}
        <h3 className="text-title">MOMMY 2021</h3>

        {/* Альбом 32 */}
        <h3 className="text-title">АЛЬБОМ СЕМЕЙНЫЙ БИЗНЕС 2020</h3>

        {/* Альбом 33 */}
        <h3 className="text-title">ГОБА 2020</h3>

        {/* Альбом 34 */}
        <h3 className="text-title">RPG 2020</h3>

        {/* Альбом 35 */}
        <h3 className="text-title">ВИТОН 2020</h3>

        {/* Альбом 36 */}
        <h3 className="text-title">WORD UP 2020</h3>

        {/* Альбом 37 */}
        <h3 className="text-title">АЛЬБОМ СПАСИБО ПАПАША 2020</h3>

        {/* Альбом 38 */}
        <h3 className="text-title">POLAROID 2020</h3>

        {/* Альбом 39 */}
        <h3 className="text-title">BLOODY PARTY 2020</h3>

        {/* Альбом 40 */}
        <h3 className="text-title">АЛЬБОМ MAMACITA 2020</h3>

        {/* Альбом 41 */}
        <h3 className="text-title">ИНТЕРВЬЮ 2020</h3>

        {/* Альбом 42 */}
        <h3 className="text-title">GTA 2019</h3>

        {/* Альбом 43 */}
        <h3 className="text-title">АЛЬБОМ BORN TO FLEX 2019</h3>
        
        {/* Альбом 44 */}
        <h3 className="text-title">АЛЬБОМ ТРИПЛ МАЛЫШ 2019</h3>

        {/* Альбом 45 */}
        <h3 className="text-title">МЫ КРУТЫЕ 2019</h3>

        {/* Альбом 46 */}
        <h3 className="text-title">МОЕ ИМЯ ДАША 2019</h3>

        {/* Альбом 47 */}
        <h3 className="text-title">HEAVY METAL 2019</h3>

        {/* Альбом 48 */}
        <h3 className="text-title">НА ХОДУ 2019</h3>

        {/* Альбом 49 */}
        <h3 className="text-title">TRIPLE BABY TOUR 2019</h3>

        {/* Альбом 50 */}
        <h3 className="text-title">ARIFLAME 2019</h3>

        {/* Альбом 51 */}
        <h3 className="text-title">KUPIDON 2019</h3>

        {/* Альбом 52 */}
        <h3 className="text-title">SPLASH OUT 2019</h3>

      </section>

    </div>
  );
}

export default Music;
