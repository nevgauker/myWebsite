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


import React, {Component} from 'react'


import SimpleImageSlider from "react-simple-image-slider";

class ProjectRow extends Component {

    constructor(props) {
        super();
        this.state = {
           project : props.project,
           leftToRight : props.leftToRight,
           width: window.innerWidth
          }
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


     renderTech = (t) => {
        return ( <ImageCard title={t.name} img={t.image} />);
    }


    renderSlider = (project) => {

        if (project.projectName != 'Store'){

            return(
                <SimpleImageSlider
                width={281}
                height={500}
                bgColor={'#58aaaf'}
                images={[{url:project.image1},
                {url:project.image2}]}
                showNavs={true}
                showBullets={true}
        />
            );


        }else {
            return(
                <SimpleImageSlider
                width={280}
                height={200}
                bgColor={'#58aaaf'}
                images={[{url:project.image1},
                {url:project.image2}]}
                showNavs={true}
                showBullets={true}
        />
    
            );


        }

     

    }

    renderRow  = () => {
        
        const { project,leftToRight,width } = this.state;
        if (width <= 500 ){
                    return (
                        <Col className='col-sm-12'>
                        <h2 className='prjoectName'>{project.projectName}</h2>
                        <p className='descriptiopn'>{project.descriptionText}</p>
                        <Row className='techs-row'>{project.technologies.map(t => this.renderTech(t))}</Row>
                        <Row className='gallery'>

                            {this.renderSlider(project)}

                        </Row>
                       
                        </Col>
                        );
        }else {
            if  (leftToRight){
                return (
                    <Row className='projectRow'>
                <Col md={6}>
                    <h2 className='prjoectName'>{project.projectName}</h2>
                    <p className='descriptiopn'>{project.descriptionText}</p>
                    <Row className='techs-row'>{project.technologies.map(t => this.renderTech(t))}</Row>
                </Col>
                <Col md={6}>
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
            } else {
                return (
                    <Row className='projectRow'>
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
                <Col md={6}>
                    <h2  className='prjoectName'>{project.projectName}</h2>
                    <p className='descriptiopn'>{project.descriptionText}</p>
                    <Row className='techs-row'>{project.technologies.map(t => this.renderTech(t))}</Row>
                </Col>
                
            </Row>
            );
            }
        }
    }

    render() {
        return(this.renderRow());
    }
    
}

export default ProjectRow;
