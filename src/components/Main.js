import '../css/Main.css';



import { Container, Jumbotron, Col, Row, Card, Button } from 'react-bootstrap/';
import { Linkedin, GitHub } from 'react-feather';


//technologgies
import flutter from '../images/technologies/flutter.png';
import objc from '../images/technologies/objc.png';
import react from '../images/technologies/react.png';
import reactNative from '../images/technologies/react-native.png';
import swift from '../images/technologies/swift.png';
import django from '../images/technologies/django.png';
import firebase from '../images/technologies/firebase.png';
import googleCloud from '../images/technologies/google-cloud.png';
import node from '../images/technologies/node.png';
import python from '../images/technologies/python.png';
import sql from '../images/technologies/sql.png';
import js from '../images/technologies/js.png';
import mongo from '../images/technologies/mongo.png';

//projects
import expertx1 from '../images/projects/expertx/1.png'
import expertx2 from '../images/projects/expertx/2.png'
import duedo1 from '../images/projects/duedo/1.png'
import duedo2 from '../images/projects/duedo/2.png'
import willer1 from '../images/projects/willer/1.png'
import willer2 from '../images/projects/willer/2.png'
import chat1 from '../images/projects/chat/1.png'
import chat2 from '../images/projects/chat/2.png'
import bmi1 from '../images/projects/bmi/1.png'
import bmi2 from '../images/projects/bmi/2.png'
import store1 from '../images/projects/store/1.png'
import store2 from '../images/projects/store/2.png'



import userImage from '../images/user_placeholder.png'


import ImageCard from './ImageCard';
import ProjectRow from './ProjectRow';
import Social from './Social';
import SectionTitle from './SectionTitle';
import ExtraCard from './ExtraCard';
import BlogCard from './BlogCard';

import Project from '../model/Project'

import Technology from '../model/Techology';

import ContactSection from './ContactSection';

import Data from '../Data';



function Main() {


    var data  = new Data;


    var swiftTechnology = new Technology('Swift', swift);
    var objcTechnology = new Technology('Objective-c', objc);
    var flutterTechnology = new Technology('Flutter', flutter);
    var reactTechnology = new Technology('React', react);
    var nodeTechnology = new Technology('Node.js', node);
    var mongoTechnology = new Technology('Mongo.DB', mongo);

    var reactnativeTechnology = new Technology('React Native', react);
    var firebaseTechnology = new Technology('Firebase', firebase);

    var googleTechnology = new Technology('Google Cloud', googleCloud);


    var willerText = 'Willer is a marketplace platform that allows people to take initiative  and ask what they are looking for and how much they are willing to pay for . This is a constantly changing system .  from payment  to free stuff  (favors), from crypto  based payment to normal / fiat payment .';
    var expertxText = 'This App allows  trainers  and sport experts   to send feedback to their clients .They get videos from their clients and send them back a video with audio  and visual feedback about how they exercise  and how they can  improve.The app is part  of  a platform that includes a firebase  backend, and a React front end App.';
    var duedoText  = 'This app is  part of task managing system with a vision of reducing out day to day noise around us, and increase productivity by delegating tasks to the people we know and making out  day visually. ';
    var chatText = 'Another personal project of  mine with the purpose of integrating beautiful  chat ui  and some suficticate functionality .';
    var bmiText = 'This is a very basic  project  in flutter  as  part of  my early work with flutter';
    var storeText = 'This is a  personal project for me in order to experiment  with the ecommerce world.  this is a functioning store including paypal payment integration ';




    var expertxProject = new Project('ExpertX', 'Swift,Repplaykit,firebase,google-cloud', expertxText, expertx1, expertx2, [swiftTechnology,firebaseTechnology,googleTechnology]);
    var willerProject = new Project('Willer', 'Swift,Objective-c,Parse,Firebase', willerText, willer1, willer2, [swiftTechnology, objcTechnology]);
    var duedoProject = new Project('DueDo', 'Swift', duedoText, duedo1, duedo2, [swiftTechnology]);
    var chatProject = new Project('Chat UI', 'Flutter,Firebase', chatText, chat1, chat2, [flutterTechnology, firebaseTechnology]);
    var bmiProject = new Project('Bmi Calculator', 'Flutter', bmiText, bmi1, bmi2, [flutterTechnology]);
    var storeProject = new Project('Store', 'React.js,Node.js,MongoDB', storeText, store1, store2, [reactTechnology,nodeTechnology,mongoTechnology]);


    return (
      
        <div className='container-fluid'>
            <Col>
                <Row>
                    <Col md={12}>
                            <Row className='myRow'>
                                <Col>
                                        <Row>
                                            <h1 className='header'>My name is Rotem</h1>
                                        </Row>
                                        <Row>
                                            <h2 className='header2'>Full Stack / iOS Developer, originally from Tel Aviv, Israel</h2>
                                        </Row>
                                    <Row>
                                        <p className='mainText'>My name is Rotem and I am a Full Stack / iOS Developer, originally from Tel Aviv, Israel.
                                         I have a bachelor degree in Biology . I have completed many courses from the bachelor and
                                         master programs in computer science and I did an independent iOS course . </p>
                                         <p className='mainText'>
                                        Beside that, I have been teaching myself many technologies that intrigue me and that I need in my projects, from Flutter to Node.js.
                                        I have many personal projects that offer different solutions.
                                        I am adaptable to the project's needs and prefer to learn new technologies thשn offer solutions and technologies that are not suited to the project.
                                        Feel free to contact me if you have any doubts about the right solution for you.
                                        </p>
                                    </Row>
                                </Col>
                                <Col className='avatar'>
                                    <img className='avatar' src={userImage} />
                                </Col>
                            </Row>
                            
                    </Col>
                </Row>
                <ContactSection/>
                <Row>
                    <Social />
                 </Row>
                <SectionTitle title={'My Skills'}/>
                <Row>
                    <Col md={6} sm={12}>
                        <Row>
                            <h1 className='header'>Mobile Development</h1>
                        </Row>
                        <Row>
                            <p className='mainText'>
                            I build mobile apps with the most suited technology for the project.
                            From native iOS apps to cross platform one and  responsive websites using Flutter, React and React Native.
                            </p>
                        </Row>
                    </Col>
                    <Col md={6} sm={12}>
                        <Row  className='techRow'>
                            <div className='pr-md-2'>
                            <ImageCard  img={flutter} />

                            </div>

                            <div className='pr-md-2'>
                            <ImageCard   img={swift} />

                            </div>
                            <div className='pr-md-2'>
                            <ImageCard  img={objc} />

                            </div>
                            <div  className='pr-md-2'>
                            <ImageCard img={react} />

                            </div>

                        </Row>
                        <Row className='techRow'>
                        <div  className='pr-md-2'>
                        <ImageCard   img={reactNative} />

                        </div>

                        <div  className='pr-md-2'>
                        <ImageCard img={objc} />

                        </div>


                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} sm={12}>
                        <Row>
                            <h1 className='header'>Backend Development</h1>
                        </Row>
                        <Row>
                            <p className='mainText'>
                            According to the project specifications, I can either set up serverless services such as firebase. I can also set up a custom server from scratch. I usually use Node.js and mongo.DB for the backend, but I have some Python and SQL past experience.

                            </p>
                        </Row>
                    </Col>
                    <Col md={6} sm={12}>
                        <Row>
                            <Col>
                                <ImageCard img={node} />
                            </Col>
                            <Col>
                                <ImageCard  img={mongo} />
                            </Col>
                            <Col>
                                <ImageCard img={firebase} />
                            </Col>
                            <Col>
                                <ImageCard img={googleCloud} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ImageCard  img={python} />
                            </Col>
                            <Col>
                                 <ImageCard img={django} />
                            </Col>
                            <Col>
                                <ImageCard img={js} />
                            </Col>
                            <Col>
                                 <ImageCard img={sql } />
                            </Col> 
                        </Row>
                    </Col>
                </Row>
                <SectionTitle title={'My Projects'}/>
                <ProjectRow
                    project={duedoProject}
                />
                <ProjectRow
                    project={expertxProject}
                />
                <ProjectRow
                    project={willerProject}
                />
                <ProjectRow
                    project={chatProject}
                />
                <ProjectRow
                    project={bmiProject}
                />
                  <ProjectRow
                    project={storeProject}
                />
                <SectionTitle title={'Education'} />
                <h2>Udemy Courses</h2>
                <Row>
                    <Col className='col-4'>
                        <h4 className='yearText'>2020 - </h4>
                    </Col>
                    <Col className='col-8'>
                        <Row><h4  className='courseMainText'>React Native -</h4><h4 className='courseSeconderyText'>complete course, include hooks</h4></Row>
                        <Row><h4 className='courseMainText'>Flutter Bootcamp Course -</h4> <h4 className='courseSeconderyText'>Over 28 hours flutter development course where we build over 15 flully-fledged apps.</h4></Row>
                        <Row><h4 className='courseMainText'>3D Blender Modeling</h4></Row>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-4'>
                        <h4 className='yearText'>2018 - </h4>
                    </Col>
                    <Col className='col-8'>
                        <Row><h4  className='courseMainText'>Full stack web development course -</h4><h4 className='courseSeconderyText'>I learned Fronted and Backend development.</h4></Row>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-4'>
                        <h4 className='yearText'>2017 - </h4>
                    </Col>
                    <Col className='col-8'>
                        <Row><h4  className='courseMainText'>Python & Django -</h4><h4 className='courseSeconderyText'>Building a REST API</h4></Row>
                        <Row><h4  className='courseMainText'>C# and Unity  game development-</h4><h4 className='courseSeconderyText'>Games development in unity</h4></Row>

                    </Col>
                </Row>
                <Row>
                    <Col className='col-4'>
                        <h4 className='yearText'>2010 - </h4>
                    </Col>
                    <Col className='col-8'>
                        <Row><h4  className='courseMainText'>IOS Development Course -</h4><h4 className='courseSeconderyText'>Etgar college</h4></Row>

                    </Col>
                </Row>
                <Row>
                    <Col className='col-4'>
                        <h4 className='yearText'>2002 -  2004 </h4>
                    </Col>
                    <Col className='col-8'>
                        <Row><h4  className='courseMainText'>B.Sc in  Biology-</h4><h4 className='courseSeconderyText'>Ben Gurion University</h4></Row>

                    </Col>
                </Row>
                <SectionTitle title={'Extra Curricular'}/>
                
                
               
                <SectionTitle title={'Latest from my blog'}/>
                <Row className='blog-row'>
                    <Col md={4}>
                        <BlogCard
                            title={'My developer story'}
                            subtitle={'How did i started coding'}
                            text={'As a kid , beside a few basic lessons , i mainly used my computer for games...'}
                        />
                    </Col>
                    <Col md={4}>
                        <BlogCard
                            title={'Keeping your focus'}
                            subtitle={'When everything intersed you'}
                            text={'A have a lot of intersts, and  from someone from the side  t looks like i am all over the place...'}
                        />
                    </Col>
                    <Col md={4}>
                        <BlogCard
                            title={'Coding for a puprose'}
                            subtitle={'Put your skills for good purpose'}
                            text={'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}
                        />
                    </Col>
                </Row>
            </Col>
            <footer>
                <Row>
                    <Col md={12}>
                        <h8>copywrites © 2020.</h8>
                        <h8>rotem nevgauker - developer</h8>
                    </Col>
                </Row>
            </footer>



        </div>
    );
}

export default Main;
