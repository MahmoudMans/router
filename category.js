import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

function Category() {
    
  return (
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
   <Link to="/shoes">
        <li>Shoes</li>
      </Link>
      <Link to="/boots">
        <li>Boots</li>
      </Link>
      <Link to="/footwear">
        <li>Footwear</li>
      </Link>
  </div>
    
  );
}


export default Category;