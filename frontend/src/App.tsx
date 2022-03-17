//import React from 'react';
import NavBar from './components/NavBar/index';
import Listing from 'pages/Listing/index';
import Form from 'pages/Form/index';

// utilizando a dependencia "react-router-dom": 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
            <NavBar />{/* O MENU NAVBAR VAI APARECER EM TODAS AS PAGINAS */}

            <Routes>
                  <Route path="/" element={<Listing />}></Route>
                 
                  <Route path="/form">
                      <Route path=":movieId" element={<Form />}></Route>
                      {/* ':movieId' é o nome do path variable */}
                  </Route>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
