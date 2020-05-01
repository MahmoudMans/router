import React from 'react';
//import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Admin() {
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
   <h1>Welcome admin</h1>
      </div>
  );
}

export default Admin;