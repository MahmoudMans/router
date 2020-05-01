import React from 'react';
//import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function LeeCooper() {
    const productData = [
        {
          id: 1,
          name: "NIKE Liteforce Blue Sneakers",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
          status: "Available",
        },
        {
          id: 2,
          name: "Stylised Flip Flops and Slippers",
          description:
            "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
          status: "Out of Stock",
        },
        {
          id: 3,
          name: "ADIDAS Adispree Running Shoes",
          description:
            "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
          status: "Available",
        },
        {
          id: 4,
          name: "ADIDAS Mid Sneakers",
          description:
            "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
          status: "Out of Stock",
        },
      ];
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
   <Link to="/1">
       <li>NIKE Liteforce Blue Sneakers</li>
   </Link>
   <Link to="/2">
       <li>Stylised Flip Flops and Slippers</li>
   </Link>
   <Link to="/3">
       <li>ADIDAS Adispree Running Shoes</li>
   </Link>
   <Link to="/4">
       <li>LeeCooper</li>
   </Link>
   <h1>LeeCooper</h1>
   <br/>
   <li>description:
            "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.</li>
  <li>status: "Out of Stock"</li>
   </div>
  );
}

export default LeeCooper;