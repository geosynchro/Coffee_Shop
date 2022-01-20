// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import BlogContainer from "./BlogContainter";
import ProductContainer from "./ProductContainer";
import UserLoginProfile from "./UserLoginProfile"
import LogoutPage from "./LogoutPage";
import ShoppingCart from "./ShoppingCart"

function App() {
  //Stateful variables
  const [user, setUser] = useState(null);
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({})
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [cartItems, setCartItems] = useState([])

  //Initial Fetches on Page load
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
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

// Add item to cart
  function handleAddCartItem(newCartItem){
    fetch('/carts', {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(newCartItem)
    })
    .then(res => res.json())
    .then(newCartItem => {setUser({...user, carts: [...user.carts, newCartItem]})})
  }


  //Remove Item from cart
  function handleCartItemDelete(id){
    fetch(`/carts/${id}`, {
      method: 'DELETE',
      headers: {'Content-type':'application/json'},
    })
    .then(res => res.json())
    .then(() => setUser({...user, carts: user.carts.filter(cartItem => cartItem.id !== id)}))
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

  const itemsToDisplay = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).filter((item) => {
    if (category === "all") return true
    return item.item_category.category_name === category
  })
  

  return (
  
      <div className="App">
        <Navbar user={user} onLogin={setUser} onLogout={onLogout}/> 
        <Switch>
          <Route path="/blogs">
            <BlogContainer />
          </Route>
          <Route path="/products">
            <ProductContainer addCartItem={handleAddCartItem} items={itemsToDisplay} setItems={setItems} search={search} setSearch={setSearch} setCategory={setCategory} user={user}/>
          </Route>
          <Route path="/cart">
            <ShoppingCart items={items} user={user} deleteFromCart={handleCartItemDelete}/>
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
