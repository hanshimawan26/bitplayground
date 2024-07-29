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
import Uang from './pages/games/Quiz/Uang';
import FasilitasUmum from './pages/games/Quiz/Fasilitas Umum';
import Profesi from './pages/games/Quiz/Profesi';
import Pakaian from './pages/games/Quiz/Pakaian';
import PeralatanRumahTangga from './pages/games/Quiz/Peralatan Rumah Tangga';
/*IPA*/
import AnggotaTubuh from './pages/games/Quiz/Anggota Tubuh';
import BagianTumbuhan from './pages/games/Quiz/Bagian Tumbuhan';
import HewanSekitar from './pages/games/Quiz/Hewan Sekitar';
import HewanTernak from './pages/games/Quiz/Hewan Ternak';
import HewanLiar from './pages/games/Quiz/Hewan Liar';
import Maze from './pages/games/Maze';
import MerawatTubuh from './pages/games/Quiz/Merawat Tubuh';
import Buah from './pages/games/Quiz/Buah';
/*Math*/
import Pertambahan from './pages/games/Mathgame/Pertambahan';
import Pengurangan from './pages/games/Mathgame/Pengurangan';
import Perkalian from './pages/games/Mathgame/Perkalian';
import Pembagian from './pages/games/Mathgame/Pembagian';
import Bentuk2Dimensi from './pages/games/Quiz/Bentuk 2 Dimensi';
import Bentuk3Dimensi from './pages/games/Quiz/Bentuk 3 Dimensi';

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
                    <Route path="uang" element={<Uang name="Uang" />} />
                    <Route path="fasilitas-umum" element={<FasilitasUmum name="Fasilitas Umum" />} />
                    <Route path="profesi" element={<Profesi name="Profesi" />} />
                    <Route path="pakaian" element={<Pakaian name="Pakaian" />} />
                    <Route path="peralatan-rumah-tangga" element={<PeralatanRumahTangga name="Peralatan Rumah Tangga" />} />

                    <Route path="anggota-tubuh" element={<AnggotaTubuh name="Anggota Tubuh" />} />
                    <Route path="bagian-tumbuhan" element={<BagianTumbuhan name="Bagian Tumbuhan" />} />
                    <Route path="hewan-sekitar" element={<HewanSekitar name="Hewan Sekitar" />} />
                    <Route path="hewan-ternak" element={<HewanTernak name="Hewan Ternak" />} />
                    <Route path="hewan-liar" element={<HewanLiar name="Hewan Liar" />} />
                    <Route path="merawat-tubuh" element={<MerawatTubuh name="Merawat Tubuh" />} />
                    <Route path="buah" element={<Buah name="Buah" />} />

                    <Route path="maze" element={<Maze name="Maze" />} />
                    
                    <Route path="pertambahan" element={<Pertambahan name="Pertambahan" />} />
                    <Route path="pengurangan" element={<Pengurangan name="Pengurangan" />} />
                    <Route path="perkalian" element={<Perkalian name="Perkalian" />} />
                    <Route path="pembagian" element={<Pembagian name="Pembagian" />} />
                    <Route path="bentuk-2-dimensi" element={<Bentuk2Dimensi name="Bentuk 2 Dimensi" />} />
                    <Route path="bentuk-3-dimensi" element={<Bentuk3Dimensi name="Bentuk 3 Dimensi" />} />
                    {/* Add more game routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
