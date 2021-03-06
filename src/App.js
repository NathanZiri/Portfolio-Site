import "./App.css";
import "./Styles/main.css";
import Button from "./Components/Button";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import React, { useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
    const [currentDisp, setNewDisp] = useState(1);

    const saveNewDisp = (changedDisp) => {
        setNewDisp(changedDisp);
    };

    return (
        <div className="main-layout">
            <div className="header"></div>
            <div className="sidebar">
                <Button
                    text="Home"
                    buttonVal="1"
                    showVal={currentDisp}
                    onChangeDisp={saveNewDisp}
                />
                <Button
                    text="Education"
                    buttonVal="2"
                    showVal={currentDisp}
                    onChangeDisp={saveNewDisp}
                />
                <Button
                    text="Work Experience"
                    buttonVal="3"
                    showVal={currentDisp}
                    onChangeDisp={saveNewDisp}
                />
                <Button
                    text="Personal Projects"
                    buttonVal="4"
                    showVal={currentDisp}
                    onChangeDisp={saveNewDisp}
                />
                <Button
                    text="Contact Me"
                    buttonVal="5"
                    showVal={currentDisp}
                    onChangeDisp={saveNewDisp}
                />
                
            </div>
            <div className="main-content">
                <Scrollbars>
                    <Home  dispText="show" visVal={parseInt(currentDisp)===1 ? true : false} />
                    <Education dispText="hide" visVal={parseInt(currentDisp)===2 ? true : false} />
                    <Work dispText="hide" visVal={parseInt(currentDisp)===3 ? true : false} />
                    <Projects dispText="hide" visVal={parseInt(currentDisp)===4 ? true : false} />
                    <Contact dispText="hide" visVal={parseInt(currentDisp)===5 ? true : false} />
                    
                </Scrollbars>
            </div>
        </div>
    );
}

//content-show
//content-hide

export default App;
