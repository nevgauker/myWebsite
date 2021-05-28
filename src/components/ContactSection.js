import '../css/ContactSection.css';
import { Col, Row } from 'react-bootstrap/';


import phone from '../images/phone.png';
import email from '../images/email.png';



function ContactSection(props) {

    return (
        <Row className='contactRow'>
            <Col>
                <Row className='contactRow'>
                    <h3 className='mainContactText'>Feel free to contact me if you have any doubts about the right solution for you.</h3>     
               </Row>
               <Row className='contactRow'>
               <img  className='icon'  src={email} alt='email'></img>

               <h4 className='subText'>nevgauker@gmauk.com</h4>
               <img className='icon2' src={phone} alt="phone"></img>

               <h4 className='subText'>0547646847</h4>


               </Row>
             
            </Col>
        </Row>
    );
}

export default ContactSection;
