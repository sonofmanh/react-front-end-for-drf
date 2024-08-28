
import { useState } from 'react'
import './Hero.css'
import { IoHome, IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import Nav from './nav/Nav'
import { motion } from 'framer-motion';

// react-scroll for smooth scroll to i
const Hero = () => {
	const [checkbox, setCheckbox] = useState(false)

	return (
		<div id='hero'>
			{checkbox && <Nav />}

			<section className='right' style={{ width: '100vw' }} >
				<div className="burger">
					<label htmlFor="checkbox"> {checkbox ? <ImCancelCircle /> : <IoMenu />}</label>
					<input type="checkbox" name="" id="checkbox" value={checkbox} onClick={() => { setCheckbox(!checkbox) }} />
				</div>
				<motion.h1 initial={{ opacity: 0, y: "-10em" }} animate={{ opacity: 1, y: "0em" }} exit={{ opacity: 0 }} transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96], }}>i am <br /> a designer & developer</motion.h1>
				<motion.p initial={{
					y: "10vw", opacity: 0,
				}} animate={{ y: 0, opacity: 1 }} transition={{ delay: .2, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}>100% html,scss/sass,css,js,react,python,django & djangoRESTFULL stark </motion.p>
				<motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }} href="#resume">view portfolio <IoHome /></motion.a>
			</section>
		</div >
	)
}

export default Hero