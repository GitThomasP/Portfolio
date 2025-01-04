import { lazy as Lazy } from "react";
import Header from "../../components/Header/Header.jsx";
//const  ProjectPreview = Lazy(() => import("../../components/ProjectPreview/ProjectPreview.jsx")) ;
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <ProjectPreview /> 
    </>
  );
}
