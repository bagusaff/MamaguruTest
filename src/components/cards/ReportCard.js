import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ReportCard = ({ data }) => {
  return (
    <Card className="text-center" style={{ marginBottom: "1rem" }}>
      <Card.Header className="text-muted">
        Session {data._session_no} -- {data.session_date}
      </Card.Header>
      <Card.Body>
        <Card.Img
          variant="top"
          src={`http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=${data.image_id}`}
          style={{ width: "20rem" }}
        />
        <Card.Title>{data.activity_id}</Card.Title>
        <Card.Text>{data.summary}</Card.Text>
        <Card.Text className="text-muted font-italic">
          Co-Teaching partner {data.teaching_partner}
        </Card.Text>
        <Button variant="info" style={{ color: "#fff" }}>
          Download Report
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Next Activity/Improvement Plan : {data.next_activity}
      </Card.Footer>
    </Card>
  );
};

export default ReportCard;
