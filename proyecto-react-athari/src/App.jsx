import './index.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Productos from './components/Productos';


function App() {



  return (
    <div className="container-fluid">
        <Navbar />
        <ItemListContainer greeting = {"No se encontraron productos"}/>
        <Productos />
        <Footer />

    </div>
  );
}

export default App;
