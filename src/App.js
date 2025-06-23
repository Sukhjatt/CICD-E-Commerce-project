
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
function App() {
  return (
    <Router>
    
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element = {<Shop/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/mens' element = {<ShopCategory category = "men"/>}></Route>
      <Route path='/women' element = {<ShopCategory category= "women"/>}></Route>
      <Route path='/products' element = {<Products/>}></Route>
      <Route path=':productId' element = {<Products/>}></Route>
      <Route path='/cart' element = {<Cart/>}></Route>
   </Routes>
   
    </Router>
  );
}

export default App;
