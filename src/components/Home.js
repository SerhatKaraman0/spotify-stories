import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import NavBar from './NavBar';
import MainContent from './MainContent';
import SearchSong from './SearchSong';
import Profile from './Profile';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function Home() {
  const [songObjects, setSongObjects] = useState([]);
  const [songList, setSongList] = useState([]);
  const [listInput, setListInput] = useState("");

  return (
    <div className="App">
      <NavBar />
      <MainContent songObjects={songObjects} setSongObjects={setSongObjects}/>
      <SearchSong songObjects={songObjects} setSongObjects={setSongObjects} songList={songList} setSongList={setSongList} listInput={listInput} setListInput={setListInput}/>
      <Profile songList={songList} setSongList={setSongList}/>
      <Footer />
      
    </div>
  );
}


export default Home;
