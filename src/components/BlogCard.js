import { Card } from "react-bootstrap/";
import readMore from "../images/readMoreBtn.png";
import "../css/BlogCard.css";

function BlogCard(props) {
  const { title, subtitle, text, link } = props;

  return (
    <Card>
      <h3 class="card-title blogTitle">{title}</h3>
      <h4 class="card-title blogSubtitle">{subtitle}</h4>
      <div class="card-body">
        <p class="card-text  blogText">{text}</p>
      </div>
      <div class="btn-group" role="group">
        <button
          type="button"
          class="btn readMoreButton"
          onClick={() => window.open(link, "_blank")}
        >
          <img className="btnImage" src={readMore} />
        </button>
      </div>
    </Card>
  );
}

export default BlogCard;
