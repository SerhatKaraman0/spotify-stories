import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import { Route ,Outlet, Link } from "react-router-dom";
import ShowList from './pages/ShowList';
import './App.css';



function App() {
  const [songObjects, setSongObjects] = useState([]);
  const [songList, setSongList] = useState([]);


  return (
    <div className="App">
      <NavBar />
      <MainContent songObjects={songObjects} setSongObjects={setSongObjects}/>
      <SearchSong songObjects={songObjects} setSongObjects={setSongObjects} songList={songList} setSongList={setSongList}/>
      <Profile songList={songList} setSongList={setSongList}/>
    </div>
  );
}

function NavBar(){
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Spotify Stories</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Account</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><a href="https://www.instagram.com/serhat___krmn/" target="_blank">Instagram</a></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <a href="https://www.reddit.com/user/s3rh4tk" target="_blank">Reddit</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><a href='https://github.com/SerhatKaraman0' target="_blank">Github</a></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <a href='https://open.spotify.com/user/dpvyxnuzhnpxyj6p79tgalghn?si=3d15185bdd704e0a' target="_blank">Spotify</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

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

function SearchSong({songObjects, setSongObjects, songList, setSongList}) {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [descInput, setDescInput] = useState("");
  

  async function search(){
    const songParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    const songResponse = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', songParams)
    const songData = await songResponse.json()

    if (songData.tracks.items.length > 0) {
      const trackObj = songData.tracks.items[0];
      setSongObjects(prevTracks => [...prevTracks, {...trackObj, description: descInput}])
      setSearchInput("")
      setDescInput("")
    } else {
      alert("No results found")
    }
    console.log(songObjects)
  }

  function addList(){
    setSongList(prevList => [...prevList, songObjects])
    setSongObjects(prevList => [])
  }

  useEffect(() => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + process.env.REACT_APP_CLIENT_ID + '&client_secret=' + process.env.REACT_APP_CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
  }, [])

  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Song Name (More accurate when you search with the artist)</Form.Label>
        <Form.Control type="text" placeholder="Metallica - One" 
        onChange={
          event => setSearchInput(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add description to the song</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Best song I've ever heard.."
        onChange={
          event => setDescInput(event.target.value)
        }
        />
      </Form.Group>
      <Button variant="primary" onClick={search}>Add the song</Button>{' '}
      <Button variant="success" onClick={addList}>Add list to profile</Button>{' '}
    </Form>
    </div>
  );
}

function Profile({ songList, setSongList }){
  function deleteList(index){
    const updatedList = [...songList]
    updatedList.splice(index, 1)
    setSongList(updatedList)
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
            <Card.Img variant="top" src={songObj[0].album.images[1].url} />
            <Card.Body>
              <Card.Title><Link to="ShowList">List {idx+1}</Link></Card.Title>
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

export default App;
