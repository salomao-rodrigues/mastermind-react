import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <div>
    <div><Link to="solo">Solo</Link></div>
    <div><Link to="vs-friends">Play Friends</Link></div>
    <div><Link to="rules">Game Rules</Link></div>
  </div>
);

export default MainMenu;
