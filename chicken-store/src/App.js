/*
ChickenList path="/"

ChickenDetail.js path="/chicken-detail"

npm i react-router-dom
*/
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ChickenList from "./component/ChickenList";
import React from "react";
import ChickenDetail from "./component/ChickenDetail";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/ChickenList" element={<ChickenList/>} />
                <Route path="/chicken-detail" element={<ChickenDetail/>} />
                
            </Routes>

        </Router>
    )
}

export default App;