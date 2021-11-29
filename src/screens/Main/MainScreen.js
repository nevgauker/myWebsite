import "../../css/Main.css";
import { Col, Row } from "react-bootstrap/";

//technologgies
import flutter from "../../images/technologies/flutter.png";
import objc from "../../images/technologies/objc.png";
import react from "../../images/technologies/react.png";
import reactNative from "../../images/technologies/react-native.png";
import swift from "../../images/technologies/swift.png";
import django from "../../images/technologies/django.png";
import firebase from "../../images/technologies/firebase.png";
import googleCloud from "../../images/technologies/google-cloud.png";
import node from "../../images/technologies/node.png";
import sql from "../../images/technologies/sql.png";
import mongo from "../../images/technologies/mongo.png";
import aws from "../../images/technologies/aws.png";
import userImage from "../../images/myPhoto.png";

import ImageCard from "../../components/ImageCard";
import ProjectRow from "../../components/ProjectRow";
import Social from "../../components/Social";
import SectionTitle from "../../components/SectionTitle";
import BlogCard from "../../components/BlogCard";
import ContactSection from "../../components/ContactSection";

import {
  expertxProject,
  duedoProject,
  willerProject,
  chatProject,
  bmiProject,
  storeProject,
  blogProject,
  airbnbProject,
} from "./data";

function MainScreen() {
  return (
    <div className="container-fluid">
      <Col className="mobilePadding">
        <Row>
          <Col md={12}>
            <Row className="myRow">
              <Col sm={12} md={12} lg={6}>
                <Row>
                  <h1 className="header">My name is Rotem</h1>
                </Row>
                <Row>
                  <h2 className="header2">
                    Full Stack / iOS Developer, originally from Tel Aviv, Israel
                  </h2>
                </Row>
                <Row>
                  <p className="mainText">
                    My name is Rotem and I am a Full Stack / iOS Developer,
                    originally from Tel Aviv, Israel. I have a bachelor degree
                    in Biology . I have completed many courses from the bachelor
                    and master programs in computer science and I did an
                    independent iOS course .{" "}
                  </p>
                  <p className="mainText">
                    Beside that, I have been teaching myself many technologies
                    that intrigue me and that I need in my projects, from
                    Flutter to Node.js. I have many personal projects that offer
                    different solutions. I am adaptable to the project's needs
                    and prefer to learn new technologies thשn offer solutions
                    and technologies that are not suited to the project. Feel
                    free to contact me if you have any doubts about the right
                    solution for you.
                  </p>
                </Row>
              </Col>
              <Col sm={12} md={12} lg={6} className="avatar">
                <img className="avatar" alt="My photo" src={userImage} />
              </Col>
            </Row>
          </Col>
        </Row>
        <ContactSection width={window.innerWidth} />
        <Row className="socialRow">
          <Social />
        </Row>
        <SectionTitle title={"What clients are saying..."} />
        <p className="refText">
          "Rotem built the iOS version of our new concept and has been fantastic
          to work with. He's constantly thinking of smart ways to improve the
          experience while coding quickly and efficiently."
        </p>
        <h3 className="refName">Richard Demb</h3>

        <SectionTitle title={"My Skills"} />
        <Row>
          <Col md={6} sm={12}>
            <Row>
              <h2 className="header">Mobile Development</h2>
            </Row>
            <Row>
              <p className="mainText">
                I build mobile apps with the most suited technology for the
                project. From native iOS apps to cross platform one and
                responsive websites using Flutter, React and React Native.
              </p>
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <Row className="techRow">
              <div className="pr-md-2">
                <ImageCard img={flutter} />
              </div>

              <div className="pr-md-2">
                <ImageCard img={swift} />
              </div>
              <div className="pr-md-2">
                <ImageCard img={objc} />
              </div>
              <div className="pr-md-2">
                <ImageCard img={react} />
              </div>
            </Row>
            <Row className="techRow">
              <div className="pr-md-2">
                <ImageCard img={reactNative} />
              </div>

              <div className="pr-md-2">
                <ImageCard img={objc} />
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <Row>
              <h2 className="header">Backend Development</h2>
            </Row>
            <Row>
              <p className="mainText">
                According to the project specifications, I can either set up
                serverless services such as firebase. I can also set up a custom
                server from scratch. I usually use Node.js and mongo.DB for the
                backend, but I have some Python and SQL past experience.
              </p>
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <Row className="techRow">
              <div className="pr-md-2">
                <ImageCard img={node} />
              </div>
              <div className="pr-md-2">
                <ImageCard img={mongo} />
              </div>
              <div className="pr-md-2">
                <ImageCard img={firebase} />
              </div>
              <div className="pr-md-2">
                <ImageCard img={googleCloud} />
              </div>
            </Row>
            <Row className="techRow">
              <div className="pr-md-2">
                <ImageCard img={aws} />
              </div>
              <div className="pr-md-2">
                <ImageCard img={django} />
              </div>
              <div className="pr-md-2">
                <ImageCard img={sql} />
              </div>
            </Row>
          </Col>
        </Row>
        <SectionTitle title={"My Projects"} />
        <ProjectRow project={duedoProject} leftToRight={true} />
        <ProjectRow project={expertxProject} leftToRight={false} />
        <ProjectRow project={willerProject} leftToRight={true} />
        <ProjectRow project={chatProject} leftToRight={false} />
        <ProjectRow project={bmiProject} leftToRight={true} />
        <ProjectRow project={storeProject} leftToRight={false} />
        <ProjectRow project={blogProject} leftToRight={true} />
        <ProjectRow project={airbnbProject} leftToRight={false} />

        <SectionTitle title={"Education"} />
        <h2 className="subtitle">Udemy Courses</h2>
        <Row>
          <Col className="col-lg-1 col-md-2 col-sm-3">
            <h4 className="yearText">2020 - </h4>
          </Col>
          <Col className="col-lg-11 col-md-10 col-sm-9">
            <Row>
              <h4 className="courseMainText">React Native -</h4>
              <h4 className="courseSeconderyText">
                complete course, include hooks
              </h4>
            </Row>
            <Row>
              <h4 className="courseMainText">Flutter Bootcamp Course -</h4>{" "}
              <h4 className="courseSeconderyText">
                Over 28 hours flutter development course where we build over 15
                flully-fledged apps.
              </h4>
            </Row>
            <Row>
              <h4 className="courseMainText">3D Blender Modeling</h4>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-1 col-md-2 col-sm-3">
            <h4 className="yearText">2018 - </h4>
          </Col>
          <Col className="col-lg-11 col-md-10 col-sm-9">
            <Row>
              <h4 className="courseMainText">
                Full stack web development course -
              </h4>
              <h4 className="courseSeconderyText">
                I learned Fronted and Backend development.
              </h4>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-1 col-md-2 col-sm-3">
            <h4 className="yearText">2017 - </h4>
          </Col>
          <Col className="col-lg-11 col-md-10 col-sm-9">
            <Row>
              <h4 className="courseMainText">Python & Django -</h4>
              <h4 className="courseSeconderyText">Building a REST API</h4>
            </Row>
            <Row>
              <h4 className="courseMainText">C# and Unity game development-</h4>
              <h4 className="courseSeconderyText">
                Games development in unity
              </h4>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-1 col-md-2 col-sm-3">
            <h4 className="yearText">2010 - </h4>
          </Col>
          <Col className="col-lg-11 col-md-10 col-sm-9">
            <Row>
              <h4 className="courseMainText">IOS Development Course -</h4>
              <h4 className="courseSeconderyText">Etgar college</h4>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-2 col-md-3 col-sm-4">
            <h4 className="yearText">2002 - 2004 </h4>
          </Col>
          <Col className="col-lg-10 col-md-9 col-sm-8">
            <Row>
              <h4 className="courseMainText">B.Sc in Biology-</h4>
              <h4 className="courseSeconderyText">Ben Gurion University</h4>
            </Row>
          </Col>
        </Row>
        <SectionTitle title={"Extra Curricular"} />
        <Row>
          <p className="courseMainText extraNormal">
            <b className="extraBold">
              Volunteering in animals (ex-anonymous) - 2020 -
            </b>{" "}
            I am helping build the new challange 22 app. Challange 22 is a
            support project, helping people expirence veganism for the first
            time.
          </p>
        </Row>
        <Row>
          <p className="courseMainText extraNormal">
            <b className="extraBold">
              One of the founding memebrs of Willer -{" "}
            </b>
            2014-2015 | 2019-2020 - Willer is a an open marketplace. It was
            cyrpto base in the past. now it is trasnforming into a network of
            people helping each other.
          </p>
        </Row>
        <SectionTitle title={"Latest from my blog"} />
        <Row className="blog-row">
          <Col md={4} sm={12} className="blog">
            <BlogCard
              title={"My developer story"}
              subtitle={""}
              text={
                "Coding was not my thing when I was a kid. I spend most of my time playing..."
              }
              link={
                "https://rnevgauker-blog.herokuapp.com/blogs/6159e36e8893914b53b052df"
              }
            />
          </Col>
          {/* <Col md={4} sm={12} className="blog">
            <BlogCard
              title={"Keeping your focus"}
              subtitle={"When everything intersed you"}
              text={
                "A have a lot of intersts, and  from someone from the side  t looks like i am all over the place..."
              }
            />
          </Col>
          <Col md={4} sm={12} className="blog">
            <BlogCard
              title={"Coding for a puprose"}
              subtitle={"Put your skills for good purpose"}
              text={
                "Some quick example text to build on the card title and make up the bulk of the card's content."
              }
            />
          </Col> */}
        </Row>
      </Col>
      <footer>
        <Row>
          <Col md={12}>
            <h8 className="copywrites">
              All Rights Reserved © Rotem Nevgauker
            </h8>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h8 className="copywrites">Designed by Neimer Design</h8>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default MainScreen;
