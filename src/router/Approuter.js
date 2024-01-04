import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainui from '../pages/Mainui'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Playlist from '../pages/Playlist'
import Playlisttwo from "../pages/Playlisttwo";
export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainui />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/playlist" element={<Playlist />}/>
        <Route path="/playlisttwo" element={<Playlisttwo/>}/>
      </Routes>
    </BrowserRouter>
  );
}
