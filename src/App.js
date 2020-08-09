import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Nav from "./components/Nav";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import "./components/styles/Style.css";
// import AboutComp from "./components/AboutComp";
// import CardContainer from "./components/CardContainer";
// import ContactButtons from "./components/ContactButtons";

function App() {

  return (
    <div>
      <Router basename="/"></Router> 
      <Router>
        <Nav/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Route exact path="/" component={About}></Route>
              <Route exact path="/portfolio" component={Portfolio}></Route>
              <Route exact path="/contact" component={Contact}></Route> 
            </div>
          </div>
          <Footer/>
        </div>
      </Router> 
      </div>
  );
}

export default App;