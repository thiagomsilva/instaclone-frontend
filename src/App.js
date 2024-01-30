import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components Import
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
