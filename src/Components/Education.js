import React, { useState }  from 'react';

const Education = (props) =>{
    const [collegeVis, setCollegeVis] = useState(false);

    const saveCollegeVis = () => {
        setCollegeVis(!collegeVis);
    };

    const [uniVis, setUniVis] = useState(false);

    const saveUniVis = () => {
        setUniVis(!uniVis);
    };
    return(
        <div className={`center-text ${props.visVal ? 'main-content-show' : 'main-content-hide'}`}>
            <h2 onClick={saveUniVis}>
            Concordia University
            <span className={`drop-arrow  ${uniVis ?  'drop-arrow-down' : 'drop-arrow-right'}`}>
                {'>'}
            </span>
            </h2>
            <div style={{overflow:"hidden"}}>
                <div className={`${uniVis ? 'dropdown-small-show' : 'dropdown-small-hide'}`}>
                    Enroled: September 2017 <br></br>
                    Graduated:  April 2022 (Tentative) <br></br>
                    Field of Study: Software Engineering <br></br>
                    Memeber of the Institute for Co-operative Education
                    Current GPA: 3.38 <br></br>
                </div>
            </div>
            <h2 onClick={saveCollegeVis}>
                Dawson College
                <span className={`drop-arrow  ${collegeVis ?  'drop-arrow-down' : 'drop-arrow-right'}`}>
                    {'>'}
                </span>
            </h2>
            <div style={{overflow:"hidden"}}>
                <div className={`${collegeVis ? 'dropdown-small-show' : 'dropdown-small-hide'}`}>
                    Enroled: September 2015 <br></br>
                    Graduated:  May 2017 <br></br>
                    Field of Study: Pure and Applied Sciences<br></br>
                    Graduated with Honours
                    R-Score: 3.15<br></br>
                </div>
            </div>
        </div>
    );
};

export default Education;