import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Leaderboard } from './features/leaderboard/Leaderboard';
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
              <li className="nav-item">
                <Link className="px-3 py-2" to="/users">Users</Link>
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
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <Leaderboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}



export default App;
