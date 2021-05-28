import { Container, Jumbotron, Col, Row, Card } from 'react-bootstrap/';
import ImageCard from './ImageCard';
import Project from '../model/Project';


import flutter from '../images/technologies/flutter.png';
import objc from '../images/technologies/objc.png';
import react from '../images/technologies/react.png';
import swift from '../images/technologies/swift.png';
import django from '../images/technologies/django.png';
import firebase from '../images/technologies/firebase.png';
import googleCloud from '../images/technologies/google-cloud.png';
import node from '../images/technologies/node.png';
import python from '../images/technologies/python.png';
import sql from '../images/technologies/sql.png';
import js from '../images/technologies/js.png';
import mongo from '../images/technologies/mongo.png';
import iphone from '../images/iphone-placeholder.png';

import '../css/ProjectRow.css';




function ProjectRow(props) {

    const { project } = props;

    const renderTech = (t) => {
        return (
            <Col md={3}>
                <ImageCard title={t.name} img={t.image} />
            </Col>
        );
    }

    return (
        <Row className='projectRow'>
            <Col md={6}>
                <h2>{project.projectName}</h2>
                <h5>{project.technologiesNames}</h5>
                <p className='descriptiopn'>{project.descriptionText}</p>
                <Row className='techs-row'>{project.technologies.map(t => renderTech(t))}</Row>
            </Col>
            <Col className='iphnes-col' md={6}>
                <Row className='projectImages'>
                    <Col md={6}>
                        <img class="img-fluid" src={project.image1} alt="iphone image"></img>
                    </Col>
                    <Col md={6}>
                        <img class="img-fluid" src={project.image2} alt="iphone image"></img>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default ProjectRow;
