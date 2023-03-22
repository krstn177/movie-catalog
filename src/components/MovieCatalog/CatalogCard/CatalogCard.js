import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './CatalogCard.css';

export const CatalogCard = ({
  _id,
  title,
  subTitle,
  ImageUrl
}) => {
  return (
    <Col as={"div"} style={{ width: "350px", height: "500px" }}>
      <Card
        style={{ width: "100%", height: "100%" }}
        className="bg-dark text-white cardWithOverlay"
      >
        <Card.Img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={ImageUrl}
        />
        <Card.ImgOverlay>
          <div className="hoverText">
            <h2 className="cardTitle">{title}</h2>
            <p className="cardText">
              {subTitle}
            </p>
            <Link to={`/catalog/${_id}`} className="detailsBtn">View</Link>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};
