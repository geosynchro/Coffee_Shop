// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import BlogContainer from "./BlogContainter";
import ProductContainer from "./ProductContainer";
// import LoginPage from "./LoginPage";
import UserLoginProfile from "./UserLoginProfile"

function App() {
  const [user, setUser] = useState(null);
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/items")
    .then(r => r.json())
    .then(r => console.log(r))

  }, []);

  
  function handleUserSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address, password }),
    })
      .then((r) => r.json())
      .then((user) => setUser(user));
  }

  function onLogout() {
    setUser(null);
  }

  return (
  
      <div className="App">
        <Navbar user={user} onLogin={setUser} onLogout={onLogout}/> 
        <Switch>
          <Route path="/blogs">
            <BlogContainer />
          </Route>
          <Route path="/products">
            <ProductContainer />
          </Route>
          <Route path="/login">
            <UserLoginProfile user={user} setUser={setUser} setPassword={setPassword} setEmail={setEmail} handleUserSubmit={handleUserSubmit}/>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
