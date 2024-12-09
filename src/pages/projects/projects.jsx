import "./projects.css";
import { PROJECTS } from "../../data.js";
import { useState } from "react";
import projectsCard from "../../components/ProjectPreview/projectsCard.jsx";

export default function projects() {
  const [selectedProject, setSelectedProject] = useState();

  function handlerSelectProject() {
    setSelectedProject();
  }
  return (
    <section>
      <h2>Projects</h2>
      <div className="container flex-row">
        <div className='card-container'>
          <a href='/' className='hero-image-container'>
            <img
              className='hero-image'
              src='https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg'
              alt='Spinning glass cube'
            />
          </a>
          <main className='main-content'>
            <h1>
              Equilibrium #3429
            </h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            
          </main>
          <div className='card-attribute'>
            <img
              src='https://i.postimg.cc/SQBzNQf1/image-avatar.png'
              alt='avatar'
              className='small-avatar'
            />
            <img
              src='https://i.postimg.cc/SQBzNQf1/image-avatar.png'
              alt='avatar'
              className='small-avatar'
            />
          </div>
        </div>

        <div className='card-container'>
          <a href='/' className='hero-image-container'>
            <img
              className='hero-image'
              src='https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg'
              alt='Spinning glass cube'
            />
          </a>
          <main className='main-content'>
            <h1>
              Equilibrium #3429
            </h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </main>
          <div className='card-attribute'>
            <img
              src='https://i.postimg.cc/SQBzNQf1/image-avatar.png'
              alt='avatar'
              className='small-avatar'
            />
            <img
              src='https://i.postimg.cc/SQBzNQf1/image-avatar.png'
              alt='avatar'
              className='small-avatar'
            />
          </div>
        </div>

        <div className='card-container'>
          <a href='/' className='hero-image-container'>
            <img
              className='hero-image'
              src='https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg'
              alt='Spinning glass cube'
            />
          </a>
          <main className='main-content'>
            <h1>
              Equilibrium #3429
            </h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </main>
          <div className='card-attribute'>
            <img
              src='https://i.postimg.cc/SQBzNQf1/image-avatar.png'
              alt='avatar'
              className='small-avatar'
            />
            <img
              src='https://i.postimg.cc/SQBzNQf1/image-avatar.png'
              alt='avatar'
              className='small-avatar'
            />
          </div>
        </div>

        <div className='card-container'>
          <a href='/' className='hero-image-container'>
            <img
              className='hero-image'
              src='https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg'
              alt='Spinning glass cube'
            />
          </a>
          <main className='main-content'>
            <h1>
              Equilibrium #3429
            </h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </main>
          <div className='card-attribute'>
            <img
              src='https://i.postimg.cc/SQBzNQf1/image-avatar.png'
              alt='avatar'
              className='small-avatar'
            />
            <img
              src='https://i.postimg.cc/SQBzNQf1/image-avatar.png'
              alt='avatar'
              className='small-avatar'
            />
          </div>
        </div>

        
      </div>
    </section>
  );
}
