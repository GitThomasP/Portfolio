import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Projects from "./pages/projects/projects.jsx";
//import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/contact.jsx";

export default function App() {
  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
