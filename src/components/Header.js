import React from 'react';
import  { Link } from 'react-router-dom';

// CSS Imports
import './Header.css'

// Images Import
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
  return (
    <header id='main-header'>
        <div className="header-content">
            <Link to="/">
                <img src={logo} alt="InstaClone" />
            </Link>
            <Link to="/new">
                <img src={camera} alt="Enviar Publicação"/>
            </Link>
        </div>
    </header>
  );
}
