import '../css/ContactSection.css';
import { Col, Container, Row } from 'react-bootstrap/';


import phone from '../images/phone.png';
import email from '../images/email.png';


import React, {Component} from 'react'
import { send } from 'emailjs-com';


class ContactSection extends Component {


    constructor(props) {
        super();
        this.state = {width: window.innerWidth};

    }


    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

      updateDimensions = () => {
        this.setState({ width: window.innerWidth});
      };

    renderRow = () => {
        const { width } = this.state;
        if (width <= 500){
            return (
                <Container>
<                   Row className='contactRow'>
                        <a href="/contact">
                            <img  className='icon'  src={email} alt='email'></img>
                        </a>
                        <a href="/contact">
                            <h4 className='subText'>nevgauker@gmail.com</h4>
                        </a>
                    </Row>
                    <Row className='contactRow'>
                        <a href="tel:+972-54-7646847">
                            <img className='icon2' src={phone} alt="phone"></img>
                        </a>
                        <a href="tel:+972-54-7646847">
                            <h4 className='subText'>0547646847</h4>
                        </a>
                    </Row>
                </Container>
               );
        }else {
            return (
                <Row className='contactRow'>
                    <a href="/contact">
                        <img  className='icon'  src={email} alt='email'></img>
                    </a>
                    <a href="/contact">
                        <h4 className='subText'>nevgauker@gmail.com</h4>
                    </a>
                    <a href="tel:+972-54-7646847">
                        <img className='icon2' src={phone} alt="phone"></img>
                    </a>
                    <a href="tel:+972-54-7646847">
                        <h4 className='subText'>0547646847</h4>
                    </a>
                </Row>
               );
        } 
   }

   render() {
    return (
        <Row className='contactRow'>
            <Col>
                <Row className='contactRow'>
                    <h3 className='mainContactText'>Feel free to contact me if you have any doubts about the right solution for you.</h3>     
               </Row>
                {this.renderRow()}
            </Col>
        </Row>
    );
   }
    
 
}

export default ContactSection;
