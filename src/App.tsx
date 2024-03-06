import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//import json file and assign to variable jsonData
import jsonData from './CollegeBasketballTeams.json';

//set the interface for Teams, import all headers even if not used right now,
// good practice to have all set if wanted to be used later
interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

//set the header for the page
function HeaderIntro() {
  return (
    <header>
      <h1>March Madness Prep</h1>
      <h2>-</h2>
      <h2>NCAA Men's Basketball Teams</h2>
    </header>
  );
}

//component for importing data and formatting the output
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <br></br>
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
        <br></br>
      </div>
    );
  }
}

//function for gathering the data for each team for outputting
function TeamList() {
  return (
    <div>
      {/*Pull json data using the variable jsonData and the table name to map*/}
      {jsonData.teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  //declare variable for switchin the vie of all teams on/off
  const [showTeamList, setShowTeamList] = useState(false);

  //function for checking when the button is to show or hide TeamList()
  const toggleTeamList = () => {
    setShowTeamList(!showTeamList);
  };

  return (
    <div className="App">
      <HeaderIntro />
      <br></br>
      <div>
        {/* Button to toggle showing TeamList */}
        <button onClick={toggleTeamList}>
          {showTeamList ? 'Hide All Teams' : 'Show All Teams'}
        </button>

        {/* Conditionally render TeamList based on showTeamList state */}
        {showTeamList && <TeamList />}
      </div>
    </div>
  );
}

export default App;
