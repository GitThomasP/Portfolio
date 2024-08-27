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
      <div>  
        {PROJECTS.map((projectCard) => (
            <projectsCard key={projectCard} title={projectCard.title} img={projectCard.image} description={projectCard.description}/>
        ))}
            
      </div>
      <div>
        <button onClick={handlerSelectProject}></button>
      </div>
    </section>
  );
}
