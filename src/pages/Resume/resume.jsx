import React from "react"; 
import "./resume.css"; 
import resumeFile from "./WebDevelopmentJasonRosasRamirez.pdf" // the PDF on the same file. 
// import the pdf file of your resume here

const Resume = () => {
    return (
        <div id = "resume">
            <h1> Jason's Resume </h1>
            
            {/* Download Resume button*/}
            <h3> <a href={resumeFile} download="WebDevelopmentJasonRosasRamirez.pdf"> Download Jason's resume Resume </a> </h3>


            {/* The body of the page*/}
            <h1>Education</h1>

            <h2> University of Wisconsin - Eau Claire </h2>
            <p>Bachelor of Science in Applied Physics</p>


            <h1>Programming Experience</h1>
            <ul>
                <li> University of Minnesota - Twin Cities Coding Bootcamp </li>
                <li> NI LabView </li>
                <li> Javascript </li>
                <li> C# </li>
                <li> Python </li>
            </ul>


            <h1> Professional Experience </h1>
            <ul>
                <li> Medtronic | Contractor | Sustaining Engineer | June 2019 - Present </li>
                <li> 3M | Contractor | Electical Engineer l | May 2018 - June 2019  </li>
            </ul>
        </div>

    );
};

/* exporting */
export default Resume // will be referenced by ../App.js


/* 

<a href = "./Assets/Web Development Jason Rosas Ramirez.docx" download> <!--download button! -->
<button type="button" class="btn btn-primary" id = "resumeButton">Download Resume</button>  

*/