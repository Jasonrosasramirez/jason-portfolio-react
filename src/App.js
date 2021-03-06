import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container";
import { BsPrefixComponentClass } from 'react-bootstrap/esm/helpers';

/* -- Importing page components -- */
import MyNavBar from "./components/Navigation/MyNavBar.jsx";
import MyHeader from "./components/Header/MyHeader.jsx"; 
import MyFooter from "./components/Footer/MyFooter.jsx";
import MyProject from "./components/Project/MyProject.jsx";


/* -- Import the pages -- */
import About from "./pages/AboutMe/aboutMe.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Portfolio from "./pages/Portfolio/portfolio.jsx";
//import resume from "./pages/Resume/resume.jsx";
import Resume from './pages/Resume/resume.jsx';


/* -- Display to Page -- */
function App() {
  return (
    
    
    // This displays directly to the webpage
    <div className="App">
      <MyHeader />
      
      <MyNavBar /> 
        <div>
          <Container> 
            <About /> 
          </Container>

          <Container>
            <Portfolio />
          </Container>

          <Container>
            <Resume />
          </Container>

          <Container> 
            <Contact /> 
          </Container>
        </div>

      <MyFooter />
    </div>
  );
}


/* -- exporting -- */
export default App; // accessed by ./index.js
