// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import BlogContainer from "./BlogContainter";
import ProductContainer from "./ProductContainer";
import UserLoginProfile from "./UserLoginProfile"
import LogoutPage from "./LogoutPage";

function App() {
  //Stateful variables
  const [user, setUser] = useState(null);
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({})

  //Initial Fetches on Page load
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


//Event handlers and CRUD actions that change state

  //User Login
  function handleUserSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address, password }),
    })
      .then((res) => {
        if (res.ok) {
          {res.json().then((user) => setUser(user))}
        } else {
          {res.json().then((error) => displayLoginError(error))}
        }
      })
  }

  //New User Creation
  const handleSignUpSubmit = (e, formData) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch("/signup", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          setUser(user);
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  //User Display Info Edit
  function updateUser(formData, id){
    fetch(`/users/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(updatedUser => { 
      setUser(updatedUser)
    })
  }

  //Delete User
  function handleUserDelete(id){
    fetch(`/users/${id}`, {
        method: "DELETE",
        headers: {'Content-type':"application/json"}
    })
    .then(res => res.json())
    .then(() => setUser(null))
}

  //Login Display Error
  function displayLoginError(error){
    setLoginError(error)
    alert("Wrong Username or Password")
  }
  
  //User Logout
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
            <UserLoginProfile  deleteUser={handleUserDelete} updateUser={updateUser} user={user} setUser={setUser} setPassword={setPassword} setEmail={setEmail} handleUserSubmit={handleUserSubmit} handleSignUpSubmit={handleSignUpSubmit} loginError={loginError}/>
          </Route>
          <Route path="/userprofile">
          <UserLoginProfile  deleteUser={handleUserDelete} updateUser={updateUser} user={user} setUser={setUser} setPassword={setPassword} setEmail={setEmail} handleUserSubmit={handleUserSubmit} handleSignUpSubmit={handleSignUpSubmit} loginError={loginError}/>
          </Route>
          <Route path="/logout">
            <LogoutPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
