import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  return (
    <div>
      <Row>
        <Col>
          <span>
            {value >= 1 ? (
              <FaStar style={ratingStarStyle} />
            ) : value >= 0.5 ? (
              <FaStarHalf style={ratingStarStyle} />
            ) : (
              <FaRegStar style={ratingStarStyle} />
            )}
          </span>
          <span>
            {value >= 2 ? (
              <FaStar style={ratingStarStyle} />
            ) : value >= 1.5 ? (
              <FaStarHalf style={ratingStarStyle} />
            ) : (
              <FaRegStar style={ratingStarStyle} />
            )}
          </span>
          <span>
            {value >= 3 ? (
              <FaStar style={ratingStarStyle} />
            ) : value >= 2.5 ? (
              <FaStarHalf style={ratingStarStyle} />
            ) : (
              <FaRegStar style={ratingStarStyle} />
            )}
          </span>
          <span>
            {value >= 4 ? (
              <FaStar style={ratingStarStyle} />
            ) : value >= 3.5 ? (
              <FaStarHalf style={ratingStarStyle} />
            ) : (
              <FaRegStar style={ratingStarStyle} />
            )}
          </span>
          <span>
            {value >= 5 ? (
              <FaStar style={ratingStarStyle} />
            ) : value >= 4.5 ? (
              <FaStarHalf style={ratingStarStyle} />
            ) : (
              <FaRegStar style={ratingStarStyle} />
            )}
          </span>
        </Col>
        <Col className="pr-0 text-end">
          <span className="text-end">{text && text}</span>
        </Col>
      </Row>
    </div>
  );
};

const ratingStarStyle = {
  color: "#FFA500",
};

export default Rating;
