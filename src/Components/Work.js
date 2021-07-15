import React, { useState }  from 'react';

const Work = (props) =>{

    const [ericssonDrop, setEricssonDrop] = useState(false);

    const saveEriscssonDrop = () => {
        setEricssonDrop(!ericssonDrop);
    };

    const [BombardierDrop, setBombardierDrop] = useState(false);

    const saveBombardierDrop = () => {
        setBombardierDrop(!BombardierDrop);
    };

    return(
        <div className={`center-text ${props.visVal ? 'main-content-show' : 'main-content-hide'}`}>
            <h2 onClick={saveBombardierDrop}>
                Bombardier
                <span className={`drop-arrow  ${BombardierDrop ?  'drop-arrow-down' : 'drop-arrow-right'}`}>
                    {'>'}
                </span>
            </h2>
            <div style={{overflow:"hidden"}}>
                <div className={`home-text ${BombardierDrop ? 'dropdown-small-show' : 'dropdown-small-hide'}`}>
                    <ul>
                        <li>Postion: Knowledge Management Intern</li>
                        <li>Employment period: June 2020 - November 2018</li>
                        <li>
                            Responsibilities
                            <ul>
                                <li>
                                    Aided in the development of the internal Knowledge Management site.
                                </li>
                                <li>
                                    Created forms to allow people on put in data in order to input data.
                                </li>
                                <li>
                                    Taught team memebers to to create forms in Microsoft Powerapps and created a lesson plan for future interns.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>


            <h2 onClick={saveEriscssonDrop}>
                Ericsson
                <span className={`drop-arrow  ${ericssonDrop ?  'drop-arrow-down' : 'drop-arrow-right'}`}>
                    {'>'}
                </span>
            </h2>
            <div style={{overflow:"hidden"}}>
                <div className={`home-text ${ericssonDrop ? 'dropdown-large-show' : 'dropdown-large-hide'}`}>
                    <ul>
                        <li>Postion: Analytics Solutions Designer</li>
                        <li>Employment period: August 2018 - September 2018</li>
                        <li>
                            Responsibilities
                            <ul>
                                <li>
                                    Created forms for data input.
                                </li>
                                <li>
                                    Took data received from forms and made packages that transformed said data into a form such that it can be used in various dashboards.
                                </li>
                                <li>
                                    Created dashboards for shareholders from data received from packages.
                                </li>
                                <li>
                                    Researched different ways of acquiring, transforming and displaying data as well as the automation of the processes.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Work;