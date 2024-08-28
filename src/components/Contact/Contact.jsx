
import './contact.css';
// import ContactCard from './ContactCard/ContactCard'
import { ImLocation2 } from "react-icons/im";
import { FaPhoneVolume, FaEnvelope, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa6"
 
function Contact() {
    let URL = 'http://127.0.0.1:8000/api/add/'
    const handlesubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget);
        const harmington = Object.fromEntries(formdata) //object.fromEntries() collects generally all form entries as object
        fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(harmington) // converts all JSON data to strings within the json format
            })
        e.currentTarget.reset()  //this is to clear the input area after submission of data.
    }
    return (
        <div id='contact'>
            <h2>get in <span>touch</span></h2>
            <h4>got ideas? we&apos;ve got the skills.let&apos;s team up.</h4>
            <p>tell us more about yourself and what you have in mind</p>

            <div id='cntact_card'>
                <div id="left">
                    <h5>contact information</h5>
                    <h6>we&apos;ll create high quality linkable contents and build atleast 40 high-authoritylinks paving way for you to grow your ranks </h6>
                    <div>
                        <FaPhoneVolume /><a href="tel:+2348164240282">08164240828</a>
                    </div>
                    <div>
                        <FaEnvelope /><a href="mailto:soniceguy78@gmail">soniceguy78@gmail</a>
                    </div>
                    <div>
                        <ImLocation2 />
                        <address>Igwe ocha, Biafra</address>
                    </div>
                </div>

                <div id="right">
                    <form method="post" onSubmit={handlesubmit}>
                        <div className="row_1">
                            <div className='first'>
                                <input type="text" name='FirstName' id='first_name' required='required' autoComplete='true' />
                                <label className='label' htmlFor="first_name">first name</label>
                            </div>

                            <div className='first'>
                                <input type="text" name='LastName' id='last_name' required='required' autoComplete='true' />
                                <label className='label' htmlFor="last_name">last name</label>
                            </div>

                        </div>

                        {/*  row 2 in forms */}

                        <div className="row_2">
                            <div className='first'>
                                <input type="text" name='SubjectMatter' id='subject' required='required' />
                                <label className='label' htmlFor="subjectMatter">your subject</label>
                            </div>
                        </div>

                        {/* row_3 in forms */}

                        <div className="row_3">
                            <label className='label' htmlFor="Message">your message</label>
                            <textarea className='textarea' name="Message" id="message" required ></textarea>
                        </div>

                        {/* for button */}

                        <div className="row_4">
                            <button type="submit" className="btn btn-primary" >send message</button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="footer">
                <div className='logo'>
                    <p>S.O onukafor</p>
                </div>
                <div className="terms">
                    <p>terms</p>
                    <p>privacy</p>
                    <p>cookies</p>
                </div>
                <div className="socials">
                    <FaLinkedinIn className='social_links' />
                    <FaFacebookF className='social_links' />
                    <FaTwitter className='social_links' />
                </div>
            </div>
        </div>
    )
}

export default Contact