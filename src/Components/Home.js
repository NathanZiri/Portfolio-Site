import React, { useState }  from 'react';
import "./../Styles/main.css";

const Home = (props) =>{
    var today = new Date();

    //put real dbay here eventurally

    var birthDate = new Date("December 12, 1997");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }

    const [aboutMe, setAboutMe] = useState(false);

    const saveAboutMe = () => {
        setAboutMe(!aboutMe);
    };

    const [showProject, setProjectDrop] = useState(false);

    const saveProjectDrop = () => {
        setProjectDrop(!showProject);
    };
    

    const [gameProject, setGameDrop] = useState(false);

    const saveGameDrop = () => {
        setGameDrop(!gameProject);
    };


    const [siteDrop, setSiteDrop] = useState(false);

    const saveSiteDrop = () => {
        setSiteDrop(!siteDrop);
    };

    return(
        //main dive field containing most of the information
        <div className={`center-text ${props.visVal ? 'main-content-show' : 'main-content-hide'}`}>
            {/* about me section starts here */}
            <h2 onClick={saveAboutMe}>
                About Me
            </h2>
            <div style={{overflow:"hidden"}}>
                <div className={`home-text ${aboutMe ? 'dropdown-small-show' : 'dropdown-small-hide'}`}>
                    Hi, my name is ---------, I am a {age} year old software developer based in Montreal. I have a passion for web and video game development and am in the last year of my Bachelor's degree at --------- University. I have a larger amount of experince in Java, C#, HTML, JS and CSS amoung other programming languages. If you are looking to hire me for any work refer to the Contact Me page.
                </div>
            </div>


            {/* projects section starts here encapsulates all my projects should put these dropdowns as their own elment, we will see*/}
            <h2 onClick={saveProjectDrop}>Projects I Have Worked On</h2>
            <div className={`${showProject ? 'dropdown-large-show' : 'dropdown-large-hide'}`}>

                {/* game section starts here*/}
                <h3 onClick={saveGameDrop}>
                    Prototype Parkour Game
                </h3>
                <div style={{overflow:"hidden"}}>
                    <div className={`home-text ${gameProject ? 'dropdown-small-show' : 'dropdown-small-hide'}`}>
                        This whole site was built from scratch using HTML ReactJS and CSS to function as a easy to navigate resume and to show some examples of ptojects that I have worked on. I hope you enjoy your stay here!
                    </div>
                </div>

                {/* Site section starts here*/}
                <h3 onClick={saveSiteDrop}>
                    About this site
                </h3>
                <div style={{overflow:"hidden"}}>
                <div className={`home-text ${siteDrop ? 'dropdown-small-show' : 'dropdown-small-hide'}`}>
                    This whole site was built from scratch using HTML ReactJS and CSS to function as a easy to navigate resume and to show some examples of ptojects that I have worked on. I hope you enjoy your stay here!
                </div>
            </div>
            </div>
            
        </div>
    );
};



export default Home;