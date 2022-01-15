// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import BlogContainer from "./BlogContainter";
import ProductContainer from "./ProductContainer";
import LoginPage from "./LoginPage";

function App() {

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => console.log(data.count));

    fetch("/items")
    .then(r => r.json())
    .then(r => console.log(r))
  }, []);

  return (
  
      <div className="App">
        <Navbar /> 
        <Switch>
          <Route path="/blogs">
            <BlogContainer />
          </Route>
          <Route path="/products">
            <ProductContainer />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
