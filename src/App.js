import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import More from './components/More'
import Avatar from './image/pngwing.com.png'
import Perfil from './image/perfil.png'
import Objetivos from './components/Objetivos'
class App extends Component {
  render() {
    const person = {
      avatar: Avatar,
      imgReal: Perfil,
      name: 'Guillermo Gonzalez',
      profession: 'FullStack Developer',
      bio: 'Soy Guillemo, tengo 29 años, Soy una persona creativa con una gran pasión por la tecnología, con ganas de avanzar y obtener nuevos conocimientos... ',
      address: 'Buenos Aires, Argentina',
      bioExtendida: ' Me gusta trabajar en equipo y aprender cosas nuevas. con gran capacidad de desarrollo lógico, considero que puedo aportar una mirada distinta a los desafíos que se me presentan. Estoy en búsqueda activa de mi primer trabajo en el sector IT y de un espacio de trabajo donde poder aplicar mis conocimientos como desarrollador aportando los conocimientos que adquirí en la facultad y de forma autodidacta. ', 
      
      social: [
        // Agregar ULR de mi portfolio 
        {name: 'github', url: 'https://github.com/GuillermoGonzalez91'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/guillermo-adrian-gonzalez-52064b17b/'}
      ],
      experience: [
        {jobTitle: 'Tecnico', company: 'SKF Argentina', startDate: 'Oct 2019', endDate: 'Presente', jobDescription: 'Tareas desarrolladas en el sector de montaje, armado y rectificacion.'},
        {jobTitle: 'Operador', company: 'Exal Argentina', startDate: 'Feb 2014', endDate: 'Mar 2019', jobDescription: 'Tareas desempeñadas en el sector de produccion, aseguramiento de la calidad de los productos terminados , participacion en mejora continua y optimizacion de procesos, 5S. Capacitador del sector donde desarrollaba mi trabajo'},
      ],
      education: [
        {degree: 'Tecnicatura Superior en Programacion', institution: 'UTN', startDate: 'Enero 2019', endDate: '2022', description: 'Actualmente tengo el 75 % de las materias aprovadas.'},
        {degree: 'Tecnico Superior en Informatica', institution: 'EETN 1', startDate: 'Marzo 2005', endDate: 'Diciembre 2009', description: 'Escuela con orientacion a Informatica y Programacion'},
      ],
      certificate: [
        {name: 'FullStack', institution: 'Alkemy', date: 'Julio 2021', description: 'Participe de la aceleracion brindada por Alkemy, durante 10 semanas desarrollamos un proyecto de uso real, en mi caso realice una Web para una ONG ficticia. Trabajando habilidades como productividad, organizacion, trabajo en equipo y comunicacion. Utilizacion de plataforma Bitbucket y Jira.' },
        {name: 'React', institution: 'CoderHouse', date: '2020', description: 'Curso de Avanzado de React, se realizo un ecommerce como proyecto final' },
        {name: 'JavaScript', institution: 'Codo a Codo', date: '2020', description: 'Curso de Avanzado de JavasScript' },
        {name: 'React', institution: 'Udemy', date: '2020', description: 'Curso de Avanzado de React' },
        {name: 'FullStack', institution: 'Udemy', date: '2020', description: 'Proyecto CRUD hecho con Mongo, Express, React, Node' },
        {name: 'SQL', institution: 'Quales Group', date: '2020', description: 'Capacitacion realizada con la empresa Quales Group, SQL server nivel basico e intermedio' },
      ],
      skills: [
        {name: 'HTML5', percentage: '75%'},
        {name: 'CSS', percentage: '75%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'React', percentage: '75%'},
        {name: 'Python', percentage: '25%'},
        {name: 'C++ / C', percentage: '50%'},
        {name: 'C # ', percentage: '25%'},
        {name: 'Git', percentage: '50%'},
        {name: 'SQL', percentage: '50%'},
        {name: 'MongoDB', percentage: '25%'},
        {name: 'Sequalise', percentage: '25%'},
        {name: 'Express', percentage: '25%'},
        {name: 'Jira', percentage: '25%'},
        {name: 'Bitbuket', percentage: '25%'},
        {name: 'Kotlin', percentage: '25%'},
      ],
      objetivos: [
        {name: 'Sumar experiencia dentro del mundo del Desarrollo Web.'},
        {name: 'Tener la oportunidad de demostrar mis conocimientos adquiridos.'},
        {name: 'Contribuir al logro de los objetivos de la empresa y a su desarrollo.'},
        {name: 'Buscar crecimiento continuo mediante el aprendizaje de nuevas tecnologías.'}
      ]
    };
    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              imgReal={person.imgPerfil}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} 
            />
          </div>
          <div className='content-wrapper'>
              <div className='content'>
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Experience experience={person.experience} />
                <More masinformacion = {person.bioExtendida}/>
                <Objetivos objetivos = {person.objetivos}/>
                <Skills skills={person.skills} />
              </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
