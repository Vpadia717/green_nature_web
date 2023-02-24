import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Home />} />
        </Routes>
    </BrowserRouter>
);
export default App