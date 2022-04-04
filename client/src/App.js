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
import ViewItem from "./ViewItem";
import BlogPage from "./BlogPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ItemEditPage from "./ItemEditPage";
const promise = loadStripe("pk_test_51KLvPyKHXpK19GyRm6yB1mChzK4EUgUR7Ux5wE2bmanIxC7H3gfXk9xN4z3TG5cyHGqSSipGraMYjFLav568t4Fd00zNkZ9pt2");

function App() {
  //Stateful variables
  const [user, setUser] = useState(null);
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState({})
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [itemView, setItemView] = useState({})
  const [reviews, setReviews] = useState([])
  const [blog, setBlog] = useState({})

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
      .then(r => setItems(r))
  }, [])


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

  //Show singular item page
  function viewItemPage(id){
      fetch(`/items/${id}`)
      .then(res => res.json())
      .then(res => {
        setItemView(res)
        setReviews(res.reviews)
      })
  }

  //Posting new review
  function reviewSubmit(newReview){
    fetch('/reviews', {
    method: "POST",
    headers: {"Content-type" : "application/json"},
    body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(newReview => setReviews([newReview, ...reviews]))
  }

  //Blog fetch
  // function viewBlogPage(id){
  //   fetch(`/blogs/${id}`)
  //   .then(res => res.json())
  //   .then(res => {
  //     setBlog(res)
  //   })
  // }

  //Comment Submit
  function commentSubmit(newComment){
    fetch('/comments', {
    method: "POST",
    headers: {"Content-type" : "application/json"},
    body: JSON.stringify(newComment)
    })
    .then(res => res.json())
    .then(newComment => setBlog({...blog, comments : [...blog.comments, newComment]}))
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
        <Elements stripe={promise}>
          <Navbar user={user} onLogin={setUser} onLogout={onLogout}/> 
          <Switch>
            <Route path="/blogs">
              <BlogContainer />
            </Route>
            <Route path="/products">
              <ProductContainer viewItemPage={viewItemPage} addCartItem={handleAddCartItem} items={itemsToDisplay} setItems={setItems} search={search} setSearch={setSearch} setCategory={setCategory} user={user}/>
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
            <Route path="/viewitem">
              <ViewItem itemView={itemView} reviews={reviews} user={user} reviewSubmit={reviewSubmit}/>
            </Route>
            <Route path="/viewblog/:id">
              <BlogPage  user={user} commentSubmit={commentSubmit}/>
            </Route>
            <Route path="/itemedit">
              <ItemEditPage itemView={itemView} reviews={reviews} user={user} reviewSubmit={reviewSubmit}/>
            </Route>
            <Route path="/">
              <Homepage items={items} viewItemPage={viewItemPage}/>
            </Route>
          </Switch>
        </Elements>
        {/* <Footer /> */}
      </div>
  );
}

export default App;
