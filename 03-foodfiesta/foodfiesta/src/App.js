import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodJoke from "./FoodJoke";
import FoodFact from "./FoodFact";
import SearchRecipe from "./SearchRecipe";
import RandomRecipe from "./RandomRecipe";
import FoodInfo from "./FoodInfo";
import Header from "./Header";
import RecipeResult from "./RecipeResult";
import Login from "./pages/login-page/login";
import { auth } from "./firebase";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Navbar user={this.state.currentUser} />
        <div className="app">
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/RecipeResult/:id">
              <RecipeResult />
            </Route>
            <Route path="/FoodJoke">
              <FoodJoke />
            </Route>
            <Route path="/FoodFact">
              <FoodFact />
            </Route>
            <Route path="/SearchRecipe">
              <SearchRecipe />
            </Route>
            <Route path="/RandomRecipe">
              <RandomRecipe />
            </Route>
            <Route path="/FoodInfo">
              <FoodInfo />
            </Route>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
