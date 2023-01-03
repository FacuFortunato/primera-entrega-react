import './index.css';
import React /* { useEffect } */ from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';

/*
import productos from  './json/arrayProductos.json'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
*/

function App() {

  //se ejecuta una vez y se comenta este useEffect para que no se repitan los juegos en firebase
  /*
 useEffect(()=>{
  const db = getFirestore();
    const productosCollecction = collection(db, "items");
    productos.map((item)=> addDoc(productosCollecction, item))
  }, [])
  */

  return (

    <CartContextProvider>
      <div className="container-fluid">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={'/'} element={<ItemListContainer/>} />
            <Route path={'/cart'} element={<Cart/>} />
            <Route path={'/category/:id'} element={<ItemListContainer />} />
            <Route path={'/item/:id'} element={<ItemDetailContainer />} />
            <Route path={'*'} element={<Error404 />} />
          </Routes>
          

          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
