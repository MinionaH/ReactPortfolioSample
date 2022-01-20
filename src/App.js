import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';

const App = () =>{
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Projects />
    </div>
  )
}

export default App;
