import { Col, Row } from 'react-bootstrap/';
import '../css/SectionTitle.css';

function SectionTitle(props) {

    const { title, subTitle } = props;
    return (
        <Row>
            <Col md={12}>
                <h2 className='mainTitle'>{title} </h2>
                <h5>{subTitle}</h5>
            </Col>
        </Row>
    );
}

export default SectionTitle;
