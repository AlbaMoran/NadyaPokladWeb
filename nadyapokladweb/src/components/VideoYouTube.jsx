import { Container, Row } from "react-bootstrap";

export function VideoYouTube({ url, title, id }) {

  return (

    <Container className="video-container">
      <Row >
        <a href={url} target={"_blank"}  >
          <iframe src={url} title={title} width="300" height="255" allowFullScreen></iframe>
        </a>
      </Row>

      <Row className="video-container">
        <>{title}</>
      </Row>
    </Container>

  );
}


