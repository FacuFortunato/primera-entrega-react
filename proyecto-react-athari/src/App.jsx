import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';


function App() {



  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer greeting = {"No se encontraron productos"}/>} />
          <Route path={'/category/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
        
        <Productos />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
