import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LeaderboardRoot } from './features/leaderboard/LeaderboardRoot';
import { AboutRoot } from './features/about/AboutRoot'
function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="flex lg:flex-grow items-center">
            <ul className="flex flex-col ml-auto lg:flex-row">
              <li className="nav-item">
                <Link className="px-3 py-2" to="/">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="px-3 py-2" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutRoot />
          </Route>
          <Route path="/">
            <LeaderboardRoot />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
