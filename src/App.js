
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from "./components/Feed/Feed"
import VideoDetail from "./components/VideoDetail/VideoDetail"
import Search from "./components/Search/Search"
import './App.css';
import ChannelDetail from './components/ChannelDetail/ChannelDetail';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchterm" element={<Search />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
