import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function MainContent({songObjects, setSongObjects}) {
    function deleteSong(index){
      const updatedSongs = [...songObjects]
      updatedSongs.splice(index, 1)
      setSongObjects(updatedSongs)
    }
    return (
      <div className="cards">
        <Row xs={1} md={2} className="g-4">
        {songObjects.map((songObj, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={songObj.album.images[1].url} />
              <Card.Body>
                <Card.Title><a href={songObj.external_urls.spotify} target="_blank">{songObj.name}</a></Card.Title>
                <Card.Text>
                  {songObj.description}
                </Card.Text>
                <Button variant="danger" onClick={
                  () => deleteSong(idx)
                }>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    );
  }

export default MainContent;