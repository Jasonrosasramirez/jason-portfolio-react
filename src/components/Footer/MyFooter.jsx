/* -- File Import -- */
import React from 'react'
import "./MyFooter.css" // importing style sheet


/* --  -- */
function MyFooter() {
    return (
        <footer>
            <h1>Hello I am a footer | Let's Collaborate Sometime </h1>

            <ul>
                <li href="https://www.linkedin.com/in/jason-rosas-ramirez/" target="_blank"> <a> LinkedIn </a></li> {/*<i class="fab fa-linkedin"></i>*/}
                <li href="https://github.com/Jasonrosasramirez" target="_blank"> <a> github </a> </li> {/*<i class="fab fa-github-alt"></i>*/}
            </ul>
        </footer>

    )
}


/* exporting */
export default MyFooter // will be referenced by ../App.js