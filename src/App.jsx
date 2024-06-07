import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import Header from "./components/Header/Header.jsx";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Header />
        <ProjectPreview />
      </main>
      <Footer />
    </>
  );
}
