

import './skills.css'
import { SiSkillshare, SiRedux, SiDjango } from "react-icons/si"
import { FaHtml5, FaSass, FaReact, FaCopyright } from "react-icons/fa"
import { DiJavascript1 } from "react-icons/di"
import { FaPython } from "react-icons/fa6"
function Skills() {
    return (
        <div id='skills'>
            <h1>skills</h1>
            <p>why choose me?, areas of experience</p>
            <div className="holder">
                <div className="left">
                    <p> <FaHtml5 /></p>
                    <div id='html'></div>
                    <p> <FaSass /></p>
                    <div id="scss"></div>
                    <p> <DiJavascript1 /></p>
                    <div id="js"></div>
                    <p> <FaReact/>&<SiRedux/></p>
                    <div id="react"></div>
                    <p> <SiDjango /></p>
                    <div id="django"></div>
                    <p><FaPython /></p>
                    <div id="python"></div>
                </div>
                <div className="right">
                    <SiSkillshare />
                </div>
            </div>
            <div className="last"><FaCopyright />copyrights reserved</div>
        </div>
    )
}

export default Skills