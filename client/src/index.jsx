import RelatedAndOutfitApp from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Route exact path="/:id" component={RelatedAndOutfitApp} />
    <Route exact path="/" component={RelatedAndOutfitApp} />
  </Router>
  , document.getElementById('RelatedAndOutfit'));