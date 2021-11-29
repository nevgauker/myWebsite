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
import python from "../../images/technologies/python.png";
import sql from "../../images/technologies/sql.png";
import js from "../../images/technologies/js.png";
import mongo from "../../images/technologies/mongo.png";
import aws from "../../images/technologies/aws.png";

//projects
import expertx1 from "../../images/projects/expertx/1.png";
import expertx2 from "../../images/projects/expertx/2.png";
import duedo1 from "../../images/projects/duedo/1.png";
import duedo2 from "../../images/projects/duedo/2.png";
import willer1 from "../../images/projects/willer/1.png";
import willer2 from "../../images/projects/willer/2.png";
import chat1 from "../../images/projects/chat/1.png";
import chat2 from "../../images/projects/chat/2.png";
import bmi1 from "../../images/projects/bmi/1.png";
import bmi2 from "../../images/projects/bmi/2.png";
import store1 from "../../images/projects/store/1.png";
import store2 from "../../images/projects/store/2.png";
import blog1 from "../../images/projects/blog/1.png";
import blog2 from "../../images/projects/blog/2.png";
import airbnb1 from "../../images/projects/airbnb/1.png";
import airbnb2 from "../../images/projects/airbnb/2.png";

import Technology from "../../model/Techology";
import Project from "../../model/Project";

var willerText =
  "Willer is a marketplace platform that allows people to take initiative  and ask what they are looking for and how much they are willing to pay for . This is a constantly changing system .  from payment  to free stuff  (favors), from crypto  based payment to normal / fiat payment .";
var expertxText =
  "This App allows  trainers  and sport experts   to send feedback to their clients .They get videos from their clients and send them back a video with audio  and visual feedback about how they exercise  and how they can  improve.The app is part  of  a platform that includes a firebase  backend, and a React front end App.";
var duedoText =
  "This app is  part of task managing system with a vision of reducing out day to day noise around us, and increase productivity by delegating tasks to the people we know and making out  day visually. ";
var chatText =
  "Another personal project of  mine with the purpose of integrating beautiful  chat ui  and some suficticate functionality .";
var bmiText =
  "This is a very basic  project  in flutter  as  part of  my early work with flutter";
var storeText =
  "This is a  personal project for me in order to experiment  with the ecommerce world.  this is a functioning store including paypal payment integration ";
var blogText =
  "This is another personal project.  this is a blog based on node, mongo and express. this is my first node.js project which is not an api and i used mongodb atlas to store my db.";
var airbnbText =
  "This is an airbnb clone based on React Native and AWS Amplify.";

var swiftTechnology = new Technology("Swift", swift);
var objcTechnology = new Technology("Objective-c", objc);
var flutterTechnology = new Technology("Flutter", flutter);
var reactTechnology = new Technology("React", react);
var nodeTechnology = new Technology("Node.js", node);
var mongoTechnology = new Technology("Mongo.DB", mongo);

var reactnativeTechnology = new Technology("React Native", react);
var firebaseTechnology = new Technology("Firebase", firebase);

var googleTechnology = new Technology("Google Cloud", googleCloud);
var awsTechnology = new Technology("AWS", aws);

export var expertxProject = new Project(
  "ExpertX",
  "Swift,Repplaykit,firebase,google-cloud",
  expertxText,
  expertx1,
  expertx2,
  [swiftTechnology, firebaseTechnology, googleTechnology],
  null,
  null,
  "https://apps.apple.com/us/app/expertx/id1504334527"
);

export var willerProject = new Project(
  "Willer",
  "Swift,Objective-c,Parse,Firebase",
  willerText,
  willer1,
  willer2,
  [swiftTechnology, objcTechnology],
  null,
  null,
  null
);
export var duedoProject = new Project(
  "DueDo",
  "Swift",
  duedoText,
  duedo1,
  duedo2,
  [swiftTechnology],
  null,
  null,
  "https://apps.apple.com/us/app/duedo/id1061979346"
);
var chatProject = new Project(
  "Chat UI",
  "Flutter,Firebase",
  chatText,
  chat1,
  chat2,
  [flutterTechnology, firebaseTechnology],
  "https://github.com/nevgauker/chat_ui",
  null,
  null
);
export var bmiProject = new Project(
  "Bmi Calculator",
  "Flutter",
  bmiText,
  bmi1,
  bmi2,
  [flutterTechnology],
  "https://github.com/nevgauker/bmi_calculator",
  null,
  null
);
var storeProject = new Project(
  "Store",
  "React.js,Node.js,MongoDB",
  storeText,
  store1,
  store2,
  [reactTechnology, nodeTechnology, mongoTechnology],
  "https://github.com/nevgauker/my-store",
  null,
  null
);

export var blogProject = new Project(
  "Blog",
  "Node.js,MongoDB",
  blogText,
  blog1,
  blog2,
  [nodeTechnology, mongoTechnology],
  "https://github.com/nevgauker/blog",
  null,
  null
);
export var airbnbProject = new Project(
  "Airbnb",
  "React Native,Amplify",
  airbnbText,
  airbnb1,
  airbnb2,
  [awsTechnology, reactnativeTechnology],
  null,
  null,
  null
);
