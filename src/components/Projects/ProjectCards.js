import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

function ProjectCards(props) {
  const handleGithubClick = (e) => {
    e.preventDefault();
    if (props.onGithubClick) {
      props.onGithubClick();
    }
  };

  const handleDemoClick = (e) => {
    e.preventDefault();
    if (props.onDemoClick) {
      props.onDemoClick();
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button 
          variant="primary" 
          onClick={handleGithubClick}
          title={props.isBlog ? "Blog" : "GitHub"}
        >
          <BsGithub />
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            onClick={handleDemoClick}
            style={{ marginLeft: "10px" }}
            title="Get APK"
          >
            <BsBoxArrowUpRight />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
