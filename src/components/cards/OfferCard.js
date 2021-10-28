import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const OfferCard = ({ title, description, image, button_type, link_to }) => {
  return (
    <Card style={{ width: "18rem", marginBottom: 20, padding: "1.125rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      {button_type === "link" ? (
        <a href={link_to} target="_blank" rel="noreferrer">
          More info about conference
        </a>
      ) : (
        <Button variant="outline-success" href={link_to} target="_blank">
          Contact for modification
        </Button>
      )}
      <Card.Img variant="bottom" src={image} />
    </Card>
  );
};

export default OfferCard;
