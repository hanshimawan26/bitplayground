import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NavBar from './components/NavBar';
import './App.css';
import SpotItGame from './pages/games/spotit/SpotItGame';
import Transportasi from './pages/games/Transportasi';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="game" element={<Layout />}>
                    <Route path="spotit" element={<SpotItGame name="Spot It" />} />
                    <Route path="transportasi" element={<Transportasi name="Transportasi" />} />
                    {/* Add more game routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
