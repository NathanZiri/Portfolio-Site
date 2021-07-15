import React, { useState }  from 'react';

const Projects = (props) =>{

    
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
            
            
                <h2 onClick={saveGameDrop}>
                    Prototype Parkour Game 
                    <span className={`drop-arrow ${gameProject ?  'drop-arrow-down' : 'drop-arrow-right'}`}>
                        {'>'}
                    </span>
                </h2>
                <div style={{overflow:"hidden"}}>
                    <div className={`home-text ${gameProject ? 'dropdown-medium-show' : 'dropdown-medium-hide'}`}>
                        <div className="game-description">
                            During the winter of 2020 I worked on a demo game focussing on movement mechanics. Some aspects of the demo were used assets which i then modified and others were made from scratch. I plan on working on the this further and hopefully turn it into short game in the future.
                            <br></br>
                            <a href="https://zwizii.itch.io/parkourtechdemo"  target="_blank" className="game-link">Check out the game here</a> 
                        </div>
                        <img src="https://img.itch.zone/aW1nLzQ4NjY1NTQucG5n/original/aac%2BIg.png" className="game-image"></img>
                    </div>
                </div>

                {/* Site section starts here*/}
                <h2 onClick={saveSiteDrop}>
                    About this site
                    <span className={`drop-arrow ${siteDrop ?  'drop-arrow-down' : 'drop-arrow-right'}`}>
                        {'>'}
                    </span>
                </h2>
                <div style={{overflow:"hidden"}}>
                <div className={`home-text ${siteDrop ? 'dropdown-small-show' : 'dropdown-small-hide'}`}>
                    This whole site was built from scratch using HTML ReactJS and SCSS to function as a easy to navigate resume and to show some examples of ptojects that I have worked on. I hope you enjoy your stay here!
                </div>
            </div>
            </div>
            
    );
};



export default Projects;