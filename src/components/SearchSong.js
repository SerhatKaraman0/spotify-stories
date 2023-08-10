import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';




function SearchSong({songObjects, setSongObjects, songList, setSongList, listInput, setListInput}) {
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
      setSongList(prevList => [...prevList, {songs: [...songObjects], listName: listInput}])
      setSongObjects([])
      setListInput("")
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
        <Form.Label>Name the list</Form.Label>
          <Form.Control type="text" placeholder="Cool List" 
          onChange={
            event => setListInput(event.target.value)}
          />
      </Form>
      </div>
    );
  }
  
export default SearchSong;  