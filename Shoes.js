import React from 'react';
import {Link} from 'react-router-dom';


function Shoes() {
    
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
      <h1>Shoes</h1>
  </div>
  );
}

export default Shoes;