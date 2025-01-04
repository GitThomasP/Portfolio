import { lazy as Lazy } from "react";
import Header from "../../components/Header/Header.jsx";
//const  ProjectPreview = Lazy(() => import("../../components/ProjectPreview/ProjectPreview.jsx")) ;
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview.jsx";
const About = Lazy(() => import("../../pages/about/about.jsx"));
const Contact = Lazy(() => import("../../pages/contact/contact.jsx"));

export default function Home() {
  return (
    <div id="home">
      <Header />
      <ProjectPreview /> 
      <About />
      <Contact />
    </div>
  );
}
