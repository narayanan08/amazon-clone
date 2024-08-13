import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Checkout from './Checkout';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout/>}>
            {/* <h1>checkout</h1> */}
          </Route>
          <Route path="/login">
            {/* <h1>Login page</h1> */}
          </Route>
          
          {/* <Route path="/" element={<Header/>}/> */}
          <Route path="/" element={<Home/>}/> 
          <Route path="/product" element={<Product/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
