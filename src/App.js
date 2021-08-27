import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main, BlogPage, ProjectPage } from './pages'
import ScrollToTop from './utils/ScrollToTop'

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
