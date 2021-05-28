import { Container, Jumbotron, Col, Row, Card } from 'react-bootstrap/';
import flutter from '../images/technologies/flutter.png';
import '../css/ImageCard.css';

function ImageCard(props) {
    const { img } = props;
    return (
            <div className="tech-image-container">
                <img class="rounded tech-img" src={img} alt="Card image cap"></img>
            </div>
       
    );
}

export default ImageCard;
