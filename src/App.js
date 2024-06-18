import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NavBar from './components/NavBar';
import './App.css';
import SpotItGame from './pages/games/spotit/SpotItGame';
import Transportasi from './pages/games/Transportasi';
import AnggotaTubuh from './pages/games/Anggota Tubuh';
import BagianTumbuhan from './pages/games/Bagian Tumbuhan';
import HewanSekitar from './pages/games/Hewan Sekitar';
import HewanTernak from './pages/games/Hewan Ternak';
import HewanLiar from './pages/games/Hewan Liar';
import Maze from './pages/games/Maze';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="game" element={<Layout />}>
                    <Route path="spotit" element={<SpotItGame name="Spot It" />} />
                    <Route path="transportasi" element={<Transportasi name="Transportasi" />} />
                    <Route path="anggota-tubuh" element={<AnggotaTubuh name="Anggota Tubuh" />} />
                    <Route path="bagian-tumbuhan" element={<BagianTumbuhan name="Bagian Tumbuhan" />} />
                    <Route path="hewan-sekitar" element={<HewanSekitar name="Hewan Sekitar" />} />
                    <Route path="hewan-ternak" element={<HewanTernak name="Hewan Ternak" />} />
                    <Route path="hewan-liar" element={<HewanLiar name="Hewan Liar" />} />
                    <Route path="maze" element={<Maze name="Maze" />} />
                    {/* Add more game routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
