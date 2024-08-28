
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


function Nav() {  
    return (
        <motion.div  id='nav' className='nav'>
            
            <motion.img whileHover={{scale:1.1}} src="images/general.jpg" alt="profile image" />
            <p>sylvester onukafor <br />webdev & python programmer</p>
            <div>
                <ul>
                    <li><Link to='home'>home</Link></li>
                    <li><Link to='about'>about</Link></li>
                    <li><Link to='services'>services</Link></li>
                    <li><Link to='skills'>skills</Link></li>
                    <li><Link to='blog'>blog</Link></li>
                    <li><Link to='resume'>resume</Link></li>
                    <li><Link to='contact'>contact</Link></li>
                </ul>
            </div>
            <p>
                ©copyright ©2018 all rights reservered!, this templates is made with love.
            </p>
        </motion.div>
    )
}

export default Nav