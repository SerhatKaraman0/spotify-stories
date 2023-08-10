import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import SearchSong from './components/SearchSong';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [songObjects, setSongObjects] = useState([]);
  const [songList, setSongList] = useState([]);
  const [listInput, setListInput] = useState("");

  return (
    <div className="App">
      <NavBar />
      <MainContent songObjects={songObjects} setSongObjects={setSongObjects}/>
      <SearchSong songObjects={songObjects} setSongObjects={setSongObjects} songList={songList} setSongList={setSongList} listInput={listInput} setListInput={setListInput}/>
      <Profile songList={songList} setSongList={setSongList}/>
    </div>
  );
}


export default App;
