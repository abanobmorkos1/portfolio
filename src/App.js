import './App.css';
import About from './componenets/about';
import Contact from './componenets/contact';
import Projects from './componenets/projects';
import Footer from './componenets/footer';
function App() {
  return (
    <div className="App">
    <About/>
    <Projects/>
     {/* <Contact/> */}
    <Footer/> 
    </div>
  );
}

export default App;
