import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NavBar from './components/NavBar';
import './App.css';
/*Attention*/
import SpotItGame from './pages/games/spotit/SpotItGame';
/*Memory*/
import MemorySequence from './pages/games/MemorySequence/MemorySequence';
/*Bahasa Indonesia*/
import Transportasi from './pages/games/Quiz/Transportasi';
/*IPA*/
import AnggotaTubuh from './pages/games/Quiz/Anggota Tubuh';
import BagianTumbuhan from './pages/games/Quiz/Bagian Tumbuhan';
import HewanSekitar from './pages/games/Quiz/Hewan Sekitar';
import HewanTernak from './pages/games/Quiz/Hewan Ternak';
import HewanLiar from './pages/games/Quiz/Hewan Liar';
import Maze from './pages/games/Maze';
/*Math*/
import Pertambahan from './pages/games/Mathgame/Pertambahan';
import Pengurangan from './pages/games/Mathgame/Pengurangan';
import Perkalian from './pages/games/Mathgame/Perkalian';
import Pembagian from './pages/games/Mathgame/Pembagian';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="game" element={<Layout />}>
                    <Route path="spotit" element={<SpotItGame name="Spot It" />} />
                    <Route path="memory-sequence" element={<MemorySequence name="Memory Sequence" />} />
                    <Route path="transportasi" element={<Transportasi name="Transportasi" />} />
                    <Route path="anggota-tubuh" element={<AnggotaTubuh name="Anggota Tubuh" />} />
                    <Route path="bagian-tumbuhan" element={<BagianTumbuhan name="Bagian Tumbuhan" />} />
                    <Route path="hewan-sekitar" element={<HewanSekitar name="Hewan Sekitar" />} />
                    <Route path="hewan-ternak" element={<HewanTernak name="Hewan Ternak" />} />
                    <Route path="hewan-liar" element={<HewanLiar name="Hewan Liar" />} />
                    <Route path="maze" element={<Maze name="Maze" />} />
                    <Route path="pertambahan" element={<Pertambahan name="Pertambahan" />} />
                    <Route path="pengurangan" element={<Pengurangan name="Pengurangan" />} />
                    <Route path="perkalian" element={<Perkalian name="Perkalian" />} />
                    <Route path="pembagian" element={<Pembagian name="Pembagian" />} />
                    {/* Add more game routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
