import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Product from './components/order/Product';
import ProductList from './components/ProductList';
import { data } from "./data"


function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList data ={data}/>
      <Footer/>
      
    </div>
  );
}

export default App;
