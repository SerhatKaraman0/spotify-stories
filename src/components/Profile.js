import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Profile({ songList, setSongList}){
    const [count, setCount] = useState(1)

    function deleteList(index){
      const updatedList = [...songList]
      updatedList.splice(index, 1)
      setSongList(updatedList)
    }
    
    function generateListName(index) {
      return songList[index].listName !== "" ? songList[index].listName : "Some random list " + (count + index);
    }
    return (
      <div>
        <h2 style={{textAlign:'center'}} >Profile</h2><br/>
        <div>
        <div className="cards">
        <Row xs={1} md={2} className="g-4">
        {songList.map((songObj, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={songObj?.songs[0]?.album?.images[1]?.url} />
              <Card.Body>
              <Card.Title>{generateListName(idx)}</Card.Title>
              <Button variant="danger" onClick={
                  () => deleteList(idx)
                }>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
          
        ))}
      </Row>
      </div>
        </div>
      </div>
    );
  }

export default Profile;