import React from 'react';
import './Contact.css';

function Contact() {
    return(
        <div className='contact' id='Contact'>
            <form>
                <input type='text' id='Your Name' placeholder='Your Name'/>
                <input type='email' id='Email Address' placeholder='Email Address'/>
                <textarea name="message" id="Your Message" placeholder='Your Message'/>
                <button>Send Message</button>
            </form>
        </div>
    );
}
export default Contact;