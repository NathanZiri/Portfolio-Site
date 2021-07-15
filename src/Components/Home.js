import React, { useState }  from 'react';

const Home = (props) =>{
    var today = new Date();

    //put real dbay here eventurally

    var birthDate = new Date("August 4, 1998");
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
        <div className={`welcome-text center-text ${props.visVal ? 'main-content-show' : 'main-content-hide'}`}>
            {/* about me section starts here */}
            
            Hi, my name is Nathan Ziri, I am a {age} year old software developer based in Montreal. I have a passion for web and video game development. I am surrently in the last year of my Bachelor's degree at Concordia University. I have a large amount of experience in Java, C#, HTML, JS and CSS and. If you are looking to hire me for any work refer to the Contact Me page.
            
        </div>
    );
};



export default Home;