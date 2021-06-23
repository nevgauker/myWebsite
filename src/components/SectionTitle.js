import { Col, Row } from 'react-bootstrap/';
import '../css/SectionTitle.css';

function SectionTitle(props) {

    const { title, subTitle } = props;
    return (
        <Row className='sectionRow'>
            <Col md={12}>
                <h1 className='mainTitle'>{title} </h1>
                <h5>{subTitle}</h5>
            </Col>
        </Row>
    );
}

export default SectionTitle;
