import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const venuesImages = [
    '/img/venues.jpg',
    '/img/paris2024.jpg',
    '/img/venue3.jpg',
  ];

  const openModal = (src) => {
    setModalImageSrc(src);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImageSrc('');
  };

  const nextSlide = () => {
    setCarouselIndex((carouselIndex + 1) % venuesImages.length);
  };

  const prevSlide = () => {
    setCarouselIndex((carouselIndex - 1 + venuesImages.length) % venuesImages.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/img/olympics-logo.png"
          alt="Olympics 2024 Logo"
          className="olympics-logo"
          onClick={() => openModal('/img/olympics-logo.png')}
        />
        <h1>Juegos Olímpicos 2024 - París</h1>
      </header>

      <nav className="nav-menu">
        <a href="#home">Inicio</a>
        <a href="#about">Sobre los Juegos</a>
        <a href="#schedule">Calendario</a>
        <a href="#venues">Sedes</a>
        <a href="#athletes">Atletas</a>
        <a href="#medals">Medallero</a>
        <a href="#videos">Videos</a>
        <a href="#contact">Contacto</a>
      </nav>

      <section id="home" className="intro">
        <h2>Bienvenidos a los Juegos Olímpicos de París 2024</h2>
        <p>Este verano, París será la sede de los Juegos Olímpicos. ¡Sigue leyendo para conocer todo sobre las competiciones, los atletas y más!</p>
        <img
          src="/img/paris2024.jpg"
          alt="París 2024"
          className="intro-image"
          onClick={() => openModal('/img/paris2024.jpg')}
        />
      </section>

      <section id="about" className="about">
        <h2>Sobre los Juegos Olímpicos 2024</h2>
        <p>
          París 2024 trae una mezcla de deportes clásicos y nuevos, como el surf y el skateboarding, siendo un ejemplo de sostenibilidad.
        </p>
        <iframe
          className="about-video"
          src="https://www.youtube.com/embed/XYZ"
          title="Olympics Overview Video"
          allowFullScreen
        ></iframe>
      </section>

      <section id="schedule" className="schedule">
        <h2>Calendario de Competencias</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Día</th>
              <th>Deporte</th>
              <th>Horario</th>
              <th>Evento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Julio 26</td>
              <td>Natación</td>
              <td>10:00 AM</td>
              <td>Clasificatorias</td>
            </tr>
            <tr>
              <td>Julio 27</td>
              <td>Gimnasia</td>
              <td>2:00 PM</td>
              <td>Clasificatorias</td>
            </tr>
            <tr>
              <td>Julio 28</td>
              <td>Atletismo</td>
              <td>5:00 PM</td>
              <td>Finales</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="venues" className="venues">
        <h2>Sedes de los Juegos</h2>
        <div className="carousel">
          <button className="carousel-button" onClick={prevSlide}>❮</button>
          <img
            src={venuesImages[carouselIndex]}
            alt="Sedes de los Juegos"
            className="carousel-image"
            onClick={() => openModal(venuesImages[carouselIndex])}
          />
          <button className="carousel-button" onClick={nextSlide}>❯</button>
        </div>
      </section>

      <section id="athletes" className="athletes">
        <h2>Atletas Destacados</h2>
        <div className="athletes-gallery">
          <div className="athlete">
            <img src="/img/duplantis.jpg" alt="Armand Duplantis" />
            <p>Armand Duplantis (Suecia) - Salto con pértiga</p>
          </div>
          <div className="athlete">
            <img src="/img/biles.jpg" alt="Simone Biles" />
            <p>Simone Biles (EE.UU.) - Gimnasia</p>
          </div>
          <div className="athlete">
            <img src="/img/dressel.jpg" alt="Caeleb Dressel" />
            <p>Caeleb Dressel (EE.UU.) - Natación</p>
          </div>
        </div>
      </section>

      <section id="medals" className="medals">
        <h2>Top 5 Países en el Medallero Histórico</h2>
        <table>
          <thead>
            <tr>
              <th>País</th>
              <th>Oro</th>
              <th>Plata</th>
              <th>Bronce</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Estados Unidos</td>
              <td>1180</td>
              <td>960</td>
              <td>800</td>
              <td>2940</td>
            </tr>
            <tr>
              <td>China</td>
              <td>260</td>
              <td>199</td>
              <td>173</td>
              <td>632</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="videos" className="videos">
        <h2>Revive los Momentos Olímpicos</h2>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/ABC"
          title="Memorable Olympic Moments"
          allowFullScreen
        ></iframe>
      </section>

      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>Para más información, puedes contactarnos en: olympics2024@info.com</p>
      </section>

      <footer className="App-footer">
        <p>Juan sebastian  &copy; 2024 Juegos Olímpicos | Todos los derechos reservados.</p>
      </footer>

      {modalIsOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>&times;</span>
          <img src={modalImageSrc} alt="Ampliación" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default App;
