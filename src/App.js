import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Order from './components/Order';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import Features from './components/Features';
import New from './components/New';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='products' element={<Products></Products>}>
          <Route path="features" element={<Features></Features>}></Route>
          <Route path="new" element={<New></New>}></Route>
        </Route>
        <Route path='*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
