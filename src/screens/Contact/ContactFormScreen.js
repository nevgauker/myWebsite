import { send } from "emailjs-com";
import { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap/";
import "../../css/ContactFormScreen.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your message was successfully send
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thank you for messgae</h4>
        <p>I will contact you shortly</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ContactFormScreen() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Rotem",
    message: "",
    reply_to: "",
  });

  const [modalShow, setModalShow] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_oqhw6aq",
      "template_snlp62m",
      toSend,
      "user_M4rEbgKyd10sx3ov6BLUQ"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        console.log(" email send ");
        setModalShow(true);
        resetForm();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const resetForm = () => {
    document.getElementById("messageForm").reset();
    setToSend({ from_name: "", to_name: "Rotem", message: "", reply_to: "" });
  };

  return (
    <div className="background">
      <Col sm={12}>
        <Row className="mainRow">
          <div className="formContainer">
            <form id="messageForm" onSubmit={onSubmit}>
              <h4 className="formTitle">Contact</h4>
              <div class="form-group">
                <label className="fieldTitle" for="exampleInputEmail1">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label className="fieldTitle" for="exampleInputEmail1">
                  Email
                </label>
                <input
                  type="text"
                  name="reply_to"
                  placeholder="Your email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mainText">
                <textarea
                  className="theText"
                  type="text"
                  name="message"
                  placeholder="Your message"
                  value={toSend.message}
                  onChange={handleChange}
                />
              </div>
              <button className="submitBtn" type="Send">
                <h5 className="btnTitle">Send</h5>
              </button>
            </form>
          </div>
        </Row>
      </Col>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ContactFormScreen;
