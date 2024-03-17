import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Register from './pages/RegisterPage/Register';
import Login from './pages/LoginPage/Login';
import Home from './pages/HomePage/Home';
import SingleMoviePage from './pages/SingleMoviePage/SingleMoviePage';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage';
import Nav from './Component/Nav/Nav';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [Click, setClick] = useState(false)
  const [open, setOpen] = useState(false)

  function onClick() {
    setOpen(!open)
  }


  function Clickkro() {
    setClick(!Click)
  }



  const location = useLocation();

  return (
    <>
      <AnimatePresence mode='wait'>
        <Nav onclick={onClick} open={open} />
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Login prop={onClick} open={open} />} />
          <Route path="/register" element={<Register prop={onClick} open={open} click={Click} />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/movies/:id" element={<SingleMoviePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
