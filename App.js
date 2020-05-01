import React from 'react';

import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import './App.css';
import Category from './component/category'
import Product from './component/product'
import Admin from './component/adminarea'
import Shoes from './component/Shoes'
import Boots from './component/Boots'
import Footwear from './component/Footwear'
import Nike1 from './component/1'
import Polo from './component/2'
import Adidas from './component/3'
import LeeCooper from './component/4'
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
    <Route path="/" exact component={Home}/>
      <Route path="/category" component={Category}/>
      <Route path="/product" component={Product}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/shoes" component={Shoes}/>
      <Route path="/boots" component={Boots}/>
      <Route path="/footwear" component={Footwear}/>
      <Route path="/1" component={Nike1}/>
      <Route path="/2" component={Polo}/>
      <Route path="/3" component={Adidas}/>
      <Route path="/4" component={LeeCooper}/>
      </Switch>
    </div>
    </Router>
  );
}
const Home = () =>(
  <div>
    <Link  to="/">
  <li>home</li>
  </Link>
  <Link  to="/category">
  <li>category</li>
  </Link>
  <Link to="/product">
       <li>product</li>
   </Link>
   <Link to="/admin">
       <li>admin</li>
   </Link>
  <h1>home</h1>
 
  
  </div>
);
export default App;
