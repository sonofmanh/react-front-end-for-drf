
import '../Ourservicespage/Service.css'
import Card from './Card'
import { GiNetworkBars } from "react-icons/gi";
import { FaHourglassStart } from "react-icons/fa";
import { CgCornerUpRight } from "react-icons/cg";
import { FaHouseDamage } from "react-icons/fa";


function Services() {

    return (
        <div id='services'>
            <div className="ourservice">
                <h1>our services</h1>
                <p>we offer suport,visual ,design strategies and evelopment to our customers via webdev html,react,redux,scss,css,js and django/djangoRest backend with firebase or SQL) and pytton programming</p>
            </div>
            <div className="cards">
                <Card className='indiv_card' icon={<FaHourglassStart />}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore necessitatibus pariatur esse possimus
                    quod aperiam provident autem fuga beatae, iste deserunt adipisci, eum non!
                </Card>
                <Card className='indiv_card' icon={<GiNetworkBars />} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore necessitatibus pariatur esse possimus
                    quod aperiam provident autem fuga beatae, iste deserunt adipisci, eum non!</Card>
                <Card className='indiv_card' icon={<CgCornerUpRight />}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore necessitatibus pariatur esse possimus
                    quod aperiam provident autem fuga beatae, iste deserunt adipisci, eum non!</Card>
                <Card className='indiv_card' icon={<FaHouseDamage />}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore necessitatibus pariatur esse possimus
                    quod aperiam provident autem fuga beatae, iste deserunt adipisci, eum non!
                </Card>
            </div>
        </div>
    )
}

export default Services