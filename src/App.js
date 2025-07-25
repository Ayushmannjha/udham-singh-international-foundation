import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import udham3 from './assets/udham_singh1.png';
import udham2 from './assets/udham_singh21.png';
import udham4 from './assets/udham_singh31.png';
import udham1 from './assets/udham_singh4.jpeg';
import udham5 from './assets/udham_singh5.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo (2).png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Required for toggles, dropdowns, etc.

import './App.css';
function App() {

useEffect(() => {
  let current = 0;
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-control-prev');
  const nextBtn = document.querySelector('.carousel-control-next');

  const showSlide = (index) => {
    items.forEach((item, i) => {
      item.classList.remove('active');
      if (i === index) {
        item.classList.add('active');
      }
    });
  };

  const showNext = () => {
    current = (current + 1) % items.length;
    showSlide(current);
  };

  const showPrev = () => {
    current = (current - 1 + items.length) % items.length;
    showSlide(current);
  };

  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  const interval = setInterval(showNext, 3000); // auto-slide every 3s

  return () => {
    clearInterval(interval);
    if (nextBtn) nextBtn.removeEventListener('click', showNext);
    if (prevBtn) prevBtn.removeEventListener('click', showPrev);
  };
}, []);
useEffect(() => {
  AOS.init({ duration: 1000 }); // animation duration in ms
}, []);

  const images = [udham1, udham2, udham3, udham4, udham5];
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom shadow-sm">
  <div className="container-fluid">

   <p class="brand-name"><img src={logo} alt="Udham Singh Logo" className="navbar-brand-logo" />Saheed Udham Singh <span>International Foundation</span></p>

    <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
>
  <span className="navbar-toggler-icon"></span>
</button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Who We Are</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#who">History</a></li>
            <li><a className="dropdown-item" href="#who">Mission</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">What We Do</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#what">Activities</a></li>
            <li><a className="dropdown-item" href="#what">Events</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Media</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#media">Gallery</a></li>
            <li><a className="dropdown-item" href="#media">News</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


      {/* Carousel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>


      {/* Sections */}
     <section id="who" className="p-5 bg-light">
  <div className="container">
 
    

    <div className="row">
      {/* Card 1 */}
      <div className="col-md-4 mb-4" data-aos="fade-up">
  <div className="card h-100 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Our Mission</h5>
      <p className="card-text">
        We aim to spread awareness about the values and sacrifices of Udham Singh through education and outreach.
      </p>
    </div>
  </div>
</div>

<div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
  <div className="card h-100 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Our Vision</h5>
      <p className="card-text">
        To create a society inspired by patriotism, social justice, and unity—values championed by Udham Singh.
      </p>
    </div>
  </div>
</div>

<div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
  <div className="card h-100 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">What We Do</h5>
      <p className="card-text">
        Organize events, seminars, and campaigns that promote youth engagement, history awareness, and national pride.
      </p>
    </div>
  </div>
</div>

    </div>
  </div>
</section>

      <section id="what" className="p-5">
        <div className="container">
          <h2>What We Do</h2>
          <p>We organize educational programs, heritage events, and community initiatives to spread awareness about India's freedom struggle.</p>
        </div>
      </section>

      <section id="media" className="p-5 bg-light">
        <div className="container">
          <h2>Media</h2>
          <p>Explore our gallery and latest news showcasing our foundation's work and public engagements.</p>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p>Follow Us:</p>
        <div className="d-flex justify-content-center gap-4">
          <a href="https://facebook.com/udhamfoundation" target="_blank" rel="noreferrer" className="text-white fs-4">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/udhamfoundation" target="_blank" rel="noreferrer" className="text-white fs-4">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/udhamfoundation" target="_blank" rel="noreferrer" className="text-white fs-4">
            <FaInstagram />
          </a>
        </div>
        <p className="mt-3 mb-0">© {new Date().getFullYear()} Shaheed Udham Singh International Foundation</p>
      </div>
    </footer>

    </div>
  );
}

export default App;
