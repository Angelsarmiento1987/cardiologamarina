

import React from 'react';
import { MyNavbar } from '../Components/Nav/MyNavbar';
import { Container, Nav, Navbar, Button, Card } from 'react-bootstrap';
import ImgDra from '../Img/dramarina.png'
import ImgPerfil from '../Img/perfil.jpeg'
import ancianas from '../Img/ancianas.jpg'
import deporte from '../Img/deporte.jpg'
import logomarina from '../Img/logomarina.PNG'
import '../Views/Home.css'
import { FaStar } from 'react-icons/fa';


//import {BsHeartPulse, BsClipboardCheck, BsBriefcaseHeart, BsBook } from "react-icons/bs";
import { BsHeartPulse } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaUserMd, FaRegClock, FaStethoscope, FaHeartbeat } from "react-icons/fa";


const Home = () => {

     const servicios = [
    {
      icon: <BsHeartPulse size={24} color="#3dd4f5" />,
      title: "Consultas cardiológicas",
      text: "Realizamos una evaluación completa de la salud de su corazón, con análisis de histórico, síntomas y factores de riesgo. Ideal para chequeos y prevención."
    },
    {
      icon: <BsClipboardCheck size={24} color="#3dd4f5" />,
      title: "Exámenes de diagnóstico",
      text: "Ofrecemos exámenes como electrocardiograma, ecocardiograma, prueba de esfuerzo, MAPA y Holter. Ayudan en el diagnóstico preciso de alteraciones cardíacas."
    },
    {
      icon: <BsBriefcase size={24} color="#3dd4f5" />,
      title: "Tratamiento de enfermedades cardíacas",
      text: "Tratamos hipertensión, arritmias, insuficiencia cardíaca y otras condiciones con un enfoque individualizado."
    },
    {
      icon: <BsBook size={24} color="#3dd4f5" />,
      title: "Prevención y educación",
      text: "Orientamos sobre alimentación, ejercicios, control del estrés y otros hábitos saludables."
    }
  ];

    return(
        <div>
      {/* Navbar */}
     <Navbar
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#003e63" }}
      className="shadow-sm"
      variant="dark" // <- importante para texto blanco
    >
      <Container>
       <Navbar.Brand href="#" className="fw-bold d-flex align-items-center gap-2">
  <BsHeartPulse size={24} color="#3dd4f5" />
  <span>Dra. Marina Pire Araujo</span>
</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#sobre">Sobre mí</Nav.Link>
            <Nav.Link href="#checkup">Apto Fisico</Nav.Link>
            <Nav.Link href="#diferenciales">Diferenciales</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

         <section
       id="inicio"
       style={{
         paddingTop: "120px", // 👈 espacio para que no lo tape el navbar
         backgroundColor: "#f8fcfd",
         minHeight: "100vh",
         display: "flex",
         alignItems: "center"
       }}
     >
  <Container>
    <div className="row align-items-center">
      {/* Columna de texto */}
      <div className="col-md-6 text-center text-md-start">
        <h1 className="fw-bold">
          Cuidamos tu <span style={{ color: '#0d6efd' }}>corazón</span> con experiencia,<br />
          calidez y compromiso profesional
        </h1>
        <p className="lead mt-3">Tratamientos personalizados y atención para tu salud cardíaca.</p>
        <Button
         as="a"
  href="https://wa.me/541162729514" 
          size="lg"
          style={{
            background: 'linear-gradient(90deg, #003e63, #38c4e5)',
            border: 'none',
            padding: '12px 24px'
          }}
        >
          Solicitar turno
        </Button>
        <p className="mt-3 text-muted">
          📍 Consultorio en CABA
        </p>
      </div>

      {/* Imagen de la doctora */}
      <div className="col-md-6 text-center mt-4 mt-md-0">
        <img
          src={ImgDra}
          alt="Dra. Marina Pire Araujo"
          className="img-fluid"
          style={{ maxHeight: '500px' }}
        />
      </div>
    </div>
  </Container>
</section>



      {/* Servicios */}
      <section id="servicios" style={{ backgroundColor: '#0d3b66' }} className="text-white py-5">
      <Container>
        <div className="row align-items-center">
          {/* Texto y foto izquierda */}
          <div className="col-md-5 mb-4 mb-md-0">
            <h2 className="mb-4">Mis servicios</h2>
            <p>
              Ofrezco una amplia variedad de servicios cuidadosamente pensados para atender a diferentes necesidades de su salud cardíaca. Desde consultas de rutina y exámenes preventivos hasta tratamientos especializados, estoy aquí para acompañarlo en cada etapa, con atención y compromiso con su bienestar.
            </p>
            <img 
              src={ancianas} 
              alt="Consultas cardíacas" 
              className="img-fluid rounded" 
              style={{ maxWidth: '100%', marginTop: '1rem' }} 
            />
          </div>

          {/* Servicios en cards */}
          <div className="col-md-7">
            <div className="row g-4">
              {servicios.map(({ icon, title, text }, idx) => (
                <div key={idx} className="col-md-6">
                  <Card
                    bg="dark"
                    text="white"
                    className="h-100 p-4"
                    style={{ borderRadius: '8px' }}
                  >
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">{icon}</div>
                        <Card.Title className="mb-0 fw-bold">{title}</Card.Title>
                      </div>
                      <Card.Text style={{ fontSize: '0.9rem' }}>{text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
    
      {/* Sobre mí */}
   <section id="sobre" className="py-5 bg-white">
  <Container>
    <div className="row align-items-center">
      {/* Texto */}
      <div className="col-md-6">
        <h2 className="fw-bold mb-4">Dra. Marina Pire Araujo</h2>
        <p>
          Médica cardióloga dedicada a ofrecer cuidados excepcionales para la salud de tu corazón.
          <strong> Con más de 15 años de experiencia y un enfoque centrado en el paciente</strong>, busca comprender a fondo cada caso, ofreciendo atención individualizada, calidez y soluciones eficaces para promover el bienestar cardiovascular.
        </p>
        <p>
          <strong>Atiende en su consultorio en la ciudad de Buenos Aires</strong>, equipado con tecnología moderna y un ambiente cómodo. Cada paciente es tratado con empatía, respeto y profesionalismo, garantizando seguridad y confianza en todo el proceso.
        </p>
        <p>
          Con un <strong>conocimiento profundo, tecnología de punta y un toque humano</strong>, garantiza que recibas el mejor cuidado posible.
        </p>
        <p className="fw-bold">
          Nuestra misión es mejorar tu calidad de vida a través de cuidados preventivos y tratamientos eficaces.
        </p>

        {/* Formación y experiencia */}
        <h5 className="mt-4 mb-3">Formación y Experiencia</h5>
        <ul>
          <li>Médica especialista en Cardiología - Universidad de Buenos Aires (UBA), Sociedad Argentina de Cardiología (SAC)</li>
          <li>Miembro Adscripto de la Sociedad Argentina de Cardiología</li>
          <li>Médica especialista en Ecocardiografía Doppler - Asociación Médica Argentina (AMA)</li>
          <li>Médica cardióloga de staff en Hospital Parmenio Piñero (CABA)</li>
          <li>Docente en UDH para la carrera de Medicina en UBA</li>
          <li>Médica de guardia en unidad coronaria (UCO), Clínica Modelo de Morón</li>
        </ul>
      </div>

      {/* Imagen */}
      <div className="col-md-6 text-center mt-4 mt-md-0">
        <div
          className="p-3 rounded"
          style={{
            background: "linear-gradient(to bottom, #00aaff, #00d4ff)",
            display: "inline-block",
          }}
        >
          <img
            src={ImgPerfil}
            alt="Dra. Marina"
            className="img-fluid rounded"
            style={{ maxWidth: "300px" }}
          />
          {/* Línea cardiaca decorativa */}
          <div className="mt-3">
            <svg
              width="100%"
              height="30"
              viewBox="0 0 300 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                points="0,20 40,20 50,5 60,25 70,10 80,20 300,20"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>


      {/* Check-up deportivo */}
      <section id="checkup" className="py-5" style={{ backgroundColor: '#e6f4f8' }}>
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={deporte} className="img-fluid rounded" alt="Checkup deportivo" />
            </div>
            <div className="col-md-6">
              <h2>Apto Fisico deportivo</h2>
              <p>
                Evaluación cardiovascular completa para deportistas amateurs y profesionales.
                Ideal para comenzar o retomar la actividad física de forma segura.
              </p>
              <Button variant="primary"
                as="a"
  href="https://wa.me/541162729514" 
              >
                Solicitar evaluación</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Diferenciales */}
       <section id="diferenciales" className="py-5 bg-white">
      <Container>
        <div className='contDiferenciales'>
       
       
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={logomarina}
              className="img-fluid"
              alt="Logotipo Dra. Marina"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </Container>
    </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-5" style={{ backgroundColor: '#0d3b66' }}>
  <Container>
    <h2 className="text-center text-white mb-4">Lo que dicen mis pacientes</h2>
    <div className="row text-white">
      {[
        { name: 'Ana R.', text: 'Excelente profesional. Me sentí muy bien atendida.' },
        { name: 'Carlos M.', text: 'Gracias a ella logré controlar mi presión y mejorar mi salud.' },
        { name: 'Lucía F.', text: 'Recomendada 100%. Atenta y dedicada.' },
      ].map((item, i) => (
        <div className="col-md-4 mb-3" key={i}>
          <Card className="bg-light text-dark h-100 shadow-sm">
            <Card.Body>
              <div className="mb-2" style={{ color: '#ffc107' }}>
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <Card.Text>"{item.text}"</Card.Text>
              <Card.Subtitle className="text-muted mt-2">– {item.name}</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  </Container>
</section>


      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p className="mb-1">© 2025 Dra. Marina Pire Araujo – Cardióloga</p>
          <small>Whatsapp: 11 6272-9514 </small>
          <p>Baldomero Fernández Moreno 3060
CABA </p>
        </Container>
      </footer>

       {/* 🚀 Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/541162729514"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "30px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        <FaWhatsapp />
      </a>
    </div>
        
    )
}

export { Home }