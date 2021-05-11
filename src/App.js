import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import {useState} from "react";
import requests from "./requests";

function App() {
  // this is to store the selected option
  // the first cateegory it gets by default the loads, is request.fetchtrending.
  //initial value
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">

      <Header />
    {/*   Header at the top */}
        <Nav setSelectedOption={setSelectedOption}/>
    {/*    Navigation */}
    {/* passing selected option to the results*/}
        <Results selectedOption={selectedOption} />
    {/*  Results  */}
    </div>
  );
}

export default App;



//API KEYS
//c9e4c565ab881a8efbfab72184d6ebef

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWU0YzU2NWFiODgxYThlZmJmYWI3MjE4NGQ2ZWJlZiIsInN1YiI6IjYwNTM4Mjc4YmQ5OTBjMDAyOGRlZTQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjIm0uKuVnPlUYceMp2rxFirBPikJeJ1RHpdUrELp34