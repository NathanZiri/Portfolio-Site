import logo from './logo.svg';
import './App.css';
import './Styles/main.css';
import Button from './Components/Button';
import Home from './Components/Home';
import Work from './Components/Work';
import Education from './Components/Education';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="main-layout">
        <div className="header">
            Header
        </div>
        <div className="sidebar">
            <Button text="Home"/>
            <Button text="Education"/>
            <Button text="Work Experience"/>
            <Button text="Contact Me"/>
        </div>
        <div className="main-content">
            <Home/>
            <Work/>
            <Education/>
            <Contact/>
        </div>
    </div>
  );
}

export default App;
