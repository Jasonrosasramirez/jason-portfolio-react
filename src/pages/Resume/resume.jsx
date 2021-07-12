import React from "react"; 
import "./resume.css"; 
import resumeFile from "./WebDevelopmentJasonRosasRamirez.pdf" // the PDF on the same file. 
// import the pdf file of your resume here

const Resume = () => {
    return (
        <div class = "section" id = "resume">
            <h1 class = "sectionTitle"> Jason's Resume </h1>
            
            {/* Download Resume button*/}
            <h3> <a href={resumeFile} download="WebDevelopmentJasonRosasRamirez.pdf"> Download Jason's resume Resume </a> </h3>


            {/* The body of the page*/}
            <div id = "mainColumns">
                {/* Left Hand Side */}
                <div id = "columnLeft">
                    <h3>Education</h3>
                    <h3> University of Wisconsin - Eau Claire </h3>
                    <p>Bachelor of Science in Applied Physics</p>

                    <h3> Professional Experience </h3>
                    <ul>
                        <li> Medtronic | Contractor | Sustaining Engineer | June 2019 - Present </li>
                        <li> 3M | Contractor | Electical Engineer l | May 2018 - June 2019  </li>
                    </ul>
                </div>


                {/* Left Hand Side */}
                <div id = "columnRight">
                <h2>Programming Experience</h2>
                    <div id = "formerProgrammingExperience">
                        <p>
                        | University of Minnesota - Twin Cities Coding Bootcamp |
                         NI LabView |
                         Javascript |
                         C# | 
                         Python |
                        </p>
                    </div>

                    <h2>Programming Toolkit</h2>
                    <div >
                        <p>
                        bootstrap, React, Node, API Usage, JS Express, Handlebars
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

/* exporting */
export default Resume // will be referenced by ../App.js
