import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Leaderboard } from './features/leaderboard/Leaderboard';
import { LeaderboardPaginator } from './features/leaderboard/Paginator'
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
            <About />
          </Route>
          <Route path="/">
            <Leaderboard />
            <LeaderboardPaginator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <div className="container mx-auto">
      <h2 className="text-5xl m-10">About</h2>
      <p>Site is under construction still. Check back later for new updates</p>
    </div>
}

export default App;
