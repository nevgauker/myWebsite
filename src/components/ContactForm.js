import { send } from 'emailjs-com';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap/';
import '../css/ContactForm.css';


function ContactForm() {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };


    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_oqhw6aq',
          'template_snlp62m',
          toSend,
          'user_M4rEbgKyd10sx3ov6BLUQ'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };


    return (
      <div className='container-fluid'>
        <Col sm={12}>
          <Row>
              <h4 className='formTitle'>Contact</h4>
          </Row>
          <Row>
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label className='fieldTitle' for="exampleInputEmail1">Email address</label>
                    <input
                      type='text'
                      name='from_name'
                      placeholder='from name'
                      value={toSend.from_name}
                      onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label className='fieldTitle' for="exampleInputEmail1">Email address</label>
                  <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label className='fieldTitle' for="exampleInputEmail1">Email address</label>
                  <textarea
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />

                </div>
                <div class="form-group">
                    <label className='fieldTitle' for="exampleInputEmail1">Email address</label>
                    <input
                      type='text'
                      name='reply_to'
                      placeholder='Your email'
                      value={toSend.reply_to}
                      onChange={handleChange}
                    />
                </div>
          <button type='Send'>Submit</button>
          </form>  
          </Row>
        </Col>
       

      </div>
       
    );

}

export default ContactForm;
