import { Card } from 'react-bootstrap/';

function ExtraCard(props) {
    const { title, text, years } = props;

    return (
        <Card>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <h8>{ years } </h8>
            </div>
        </Card>
    );
}

export default ExtraCard;



