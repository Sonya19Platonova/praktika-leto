import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';

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
          {/* Альбом 1 */}
          <div className="album-item">
            <img src={boss} alt="BOSS 2025" className="album-cover" />
            <h3 className="album-title">BOSS 2025</h3>
          </div>
          
          {/* Альбом 2 */}
          <div className="album-item">
            <img src={horosho} alt="АЛЬБОМ БУМЕРЫ И ЗУМЕРЫ 2024" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ БУМЕРЫ И ЗУМЕРЫ 2024</h3>
          </div>
          
          {/* Альбом 3 */}
          <div className="album-item">
            <img src={hoshu} alt="ТАК ХОЧУ 2024" className="album-cover" />
            <h3 className="album-title">ТАК ХОЧУ 2024</h3>
          </div>
          
          {/* Альбом 4 */}
          <div className="album-item">
            <img src={kendall} alt="KENDALL 2024" className="album-cover" />
            <h3 className="album-title">KENDALL 2024</h3>
          </div>

          {/* Альбом 5 */}
          <div className="album-item">
            <img src={tiandi} alt="ТЫ И Я 2024" className="album-cover" />
            <h3 className="album-title">ТЫ И Я 2024</h3>
          </div>
          
          {/* Альбом 6 */}
          <div className="album-item">
            <img src={neft} alt="ПАМПИМ НЕФТЬ 2024" className="album-cover" />
            <h3 className="album-title">ПАМПИМ НЕФТЬ 2024</h3>
          </div>
          
          {/* Альбом 7 */}
          <div className="album-item">
            <img src={marmelad} alt="МОЙ МАРМЕЛАДНЫЙ 2024" className="album-cover" />
            <h3 className="album-title">МОЙ МАРМЕЛАДНЫЙ 2024</h3>
          </div>

          {/* Альбом 8 */}
          <div className="album-item">
            <img src={grustniydens} alt="ГРУСТНЫЙ ДЭНС 2024" className="album-cover" />
            <h3 className="album-title">ГРУСТНЫЙ ДЭНС 2024</h3>
          </div>

          {/* Альбом 9 */}
          <div className="album-item">
            <img src={sreda} alt="BOSS 2025" className="album-cover" />
            <h3 className="album-title">СРЕДА 2023</h3>
          </div>
          
          {/* Альбом 10 */}
          <div className="album-item">
            <img src={zaletaivtrendi} alt="ЗАЛЕТАЙ В ТРЕНДЫ 2023" className="album-cover" />
            <h3 className="album-title">ЗАЛЕТАЙ В ТРЕНДЫ 2023</h3>
          </div>
          
          {/* Альбом 11 */}
          <div className="album-item">
            <img src={natitanike} alt="НА ТИТАНИКЕ 2023" className="album-cover" />
            <h3 className="album-title">НА ТИТАНИКЕ 2023</h3>
          </div>
          
          {/* Альбом 12 */}
          <div className="album-item">
            <img src={alfasamka} alt="АЛЬФА-САМКА 2023" className="album-cover" />
            <h3 className="album-title">АЛЬФА-САМКА 2023</h3>
          </div>

          {/* Альбом 13 */}
          <div className="album-item">
            <img src={whoiam} alt="ТWHO I AM 2023" className="album-cover" />
            <h3 className="album-title">WHO I AM 2023</h3>
          </div>
          
          {/* Альбом 14 */}
          <div className="album-item">
            <img src={samolet} alt="МАЛЕНЬКИЙ САМОЛЕТ 2023" className="album-cover" />
            <h3 className="album-title">МАЛЕНЬКИЙ САМОЛЕТ 2023</h3>
          </div>
          
          {/* Альбом 15 */}
          <div className="album-item">
            <img src={biznesklass} alt="БИЗНЕС КЛАСС 2023" className="album-cover" />
            <h3 className="album-title">БИЗНЕС КЛАСС 2023</h3>
          </div>

          {/* Альбом 16 */}
          <div className="album-item">
            <img src={vmoeigolove} alt="В МОЕЙ ГОЛОВЕ 2023" className="album-cover" />
            <h3 className="album-title">В МОЕЙ ГОЛОВЕ 2023</h3>
          </div>

          {/* Альбом 17 */}
          <div className="album-item">
            <img src={bestie} alt="BESTIE 2023" className="album-cover" />
            <h3 className="album-title">BESTIE 2023</h3>
          </div>
          
          {/* Альбом 18 */}
          <div className="album-item">
            <img src={nottelephone} alt="ОТКЛЮЧАЮ ТЕЛЕФОН 2023" className="album-cover" />
            <h3 className="album-title">ОТКЛЮЧАЮ ТЕЛЕФОН 2023</h3>
          </div>
          
          {/* Альбом 19 */}
          <div className="album-item">
            <img src={spedupalbum} alt="АЛЬБОМ SPED UP ALBUM 2023" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ SPED UP ALBUM 2023</h3>
          </div>
          
          {/* Альбом 20 */}
          <div className="album-item">
            <img src={tyagi} alt="ТЯГИ 2023" className="album-cover" />
            <h3 className="album-title">ТЯГИ 2023</h3>
          </div>

          {/* Альбом 21 */}
          <div className="album-item">
            <img src={jara} alt="ЖАРА 2023" className="album-cover" />
            <h3 className="album-title">ЖАРА 2023</h3>
          </div>
          
          {/* Альбом 22 */}
          <div className="album-item">
            <img src={shake} alt="ПSHAKE 2022" className="album-cover" />
            <h3 className="album-title">SHAKE 2022</h3>
          </div>
          
          {/* Альбом 23 */}
          <div className="album-item">
            <img src={popstar} alt="АЛЬБОМ POPSTAR 2022" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ POPSTAR 2022</h3>
          </div>

          {/* Альбом 24 */}
          <div className="album-item">
            <img src={queenofrap} alt="АЛЬБОМ QUEEN OF RAP 2022" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ QUEEN OF RAP 2022</h3>
          </div>

          {/* Альбом 25 */}
          <div className="album-item">
            <img src={snova} alt="СНОВА? 2022" className="album-cover" />
            <h3 className="album-title">СНОВА? 2022</h3>
          </div>
          
          {/* Альбом 26 */}
          <div className="album-item">
            <img src={moneyday} alt="MONEY DAY 2021" className="album-cover" />
            <h3 className="album-title">MONEY DAY 2021</h3>
          </div>
          
          {/* Альбом 27 */}
          <div className="album-item">
            <img src={viton2} alt="ВИТОН 2 2021" className="album-cover" />
            <h3 className="album-title">ВИТОН 2 2021</h3>
          </div>
          
          {/* Альбом 28 */}
          <div className="album-item">
            <img src={moneydealer} alt="АЛЬБОМ MONEYDEALER 2021" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ MONEYDEALER 2021</h3>
          </div>

          {/* Альбом 29 */}
          <div className="album-item">
            <img src={terminal} alt="TERMINAL 2021" className="album-cover" />
            <h3 className="album-title">TERMINAL 2021</h3>
          </div>
          
          {/* Альбом 30 */}
          <div className="album-item">
            <img src={fact} alt="ФАКТ 2021" className="album-cover" />
            <h3 className="album-title">ФАКТ 2021</h3>
          </div>
          
          {/* Альбом 31 */}
          <div className="album-item">
            <img src={mommy} alt="MOMMY 2021" className="album-cover" />
            <h3 className="album-title">MOMMY 2021</h3>
          </div>

          {/* Альбом 32 */}
          <div className="album-item">
            <img src={familybiznes} alt="АЛЬБОМ СЕМЕЙНЫЙ БИЗНЕС 2020" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ СЕМЕЙНЫЙ БИЗНЕС 2020</h3>
          </div>

          {/* Альбом 33 */}
          <div className="album-item">
            <img src={goba} alt="ГОБА 2020" className="album-cover" />
            <h3 className="album-title">ГОБА 2020</h3>
          </div>
          
          {/* Альбом 34 */}
          <div className="album-item">
            <img src={rpg} alt="RPG 2020" className="album-cover" />
            <h3 className="album-title">RPG 2020</h3>
          </div>
          
          {/* Альбом 35 */}
          <div className="album-item">
            <img src={viton} alt="ВИТОН 2020" className="album-cover" />
            <h3 className="album-title">ВИТОН 2020</h3>
          </div>
          
          {/* Альбом 36 */}
          <div className="album-item">
            <img src={wordup} alt="WORD UP 2020" className="album-cover" />
            <h3 className="album-title">WORD UP 2020</h3>
          </div>

          {/* Альбом 37 */}
          <div className="album-item">
            <img src={spasibopapasha} alt="АЛЬБОМ СПАСИБО ПАПАША 2020" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ СПАСИБО ПАПАША 2020</h3>
          </div>
          
          {/* Альбом 38 */}
          <div className="album-item">
            <img src={polaroid} alt="POLAROID 2020" className="album-cover" />
            <h3 className="album-title">POLAROID 2020</h3>
          </div>
          
          {/* Альбом 39 */}
          <div className="album-item">
            <img src={bloodyparty} alt="BLOODY PARTY 2020" className="album-cover" />
            <h3 className="album-title">BLOODY PARTY 2020</h3>
          </div>

          {/* Альбом 40 */}
          <div className="album-item">
            <img src={mamacita} alt="АЛЬБОМ MAMACITA 2020" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ MAMACITA 2020</h3>
          </div>

          {/* Альбом 41 */}
          <div className="album-item">
            <img src={interviu} alt="ИНТЕРВЬЮ 2020" className="album-cover" />
            <h3 className="album-title">ИНТЕРВЬЮ 2020</h3>
          </div>
          
          {/* Альбом 42 */}
          <div className="album-item">
            <img src={gta} alt="GTA 2019" className="album-cover" />
            <h3 className="album-title">GTA 2019</h3>
          </div>

          {/* Альбом 43 */}
          <div className="album-item">
            <img src={borntoflex} alt="АЛЬБОМ BORN TO FLEX 2019" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ BORN TO FLEX 2019</h3>
          </div>
          
          {/* Альбом 44 */}
          <div className="album-item">
            <img src={ding} alt="АЛЬБОМ ТРИПЛ МАЛЫШ 2019" className="album-cover" />
            <h3 className="album-title">АЛЬБОМ ТРИПЛ МАЛЫШ 2019</h3>
          </div>
          
          {/* Альбом 45 */}
          <div className="album-item">
            <img src={mikrutie} alt="МЫ КРУТЫЕ 2019" className="album-cover" />
            <h3 className="album-title">МЫ КРУТЫЕ 2019</h3>
          </div>

          {/* Альбом 46 */}
          <div className="album-item">
            <img src={mynamedasha} alt="МОЕ ИМЯ ДАША 2019" className="album-cover" />
            <h3 className="album-title">МОЕ ИМЯ ДАША 2019</h3>
          </div>
          
          {/* Альбом 47 */}
          <div className="album-item">
            <img src={heavymetal} alt="HEAVY METAL 2019" className="album-cover" />
            <h3 className="album-title">HEAVY METAL 2019</h3>
          </div>
          
          {/* Альбом 48 */}
          <div className="album-item">
            <img src={nahodu} alt="НА ХОДУ 2019" className="album-cover" />
            <h3 className="album-title">НА ХОДУ 2019</h3>
          </div>

          {/* Альбом 49 */}
          <div className="album-item">
            <img src={triple} alt="TRIPLE BABY TOUR 2019" className="album-cover" />
            <h3 className="album-title">TRIPLE BABY TOUR 2019</h3>
          </div>

          {/* Альбом 50 */}
          <div className="album-item">
            <img src={ariflamee} alt="ARIFLAME 2019" className="album-cover" />
            <h3 className="album-title">ARIFLAME 2019</h3>
          </div>
          
          {/* Альбом 51 */}
          <div className="album-item">
            <img src={kupidoon} alt="KUPIDON 2019" className="album-cover" />
            <h3 className="album-title">KUPIDON 2019</h3>
          </div>
          
          {/* Альбом 52 */}
          <div className="album-item">
            <img src={splashoout} alt="SPLASH OUT 2019" className="album-cover" />
            <h3 className="album-title">SPLASH OUT 2019</h3>
          </div>
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
