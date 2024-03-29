import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import { TdmProfileRoot } from './features/tdm-profile/TdmProfileRoot';
import { LeaderboardRoot } from './features/leaderboard/LeaderboardRoot';
import { AboutRoot } from './features/about/AboutRoot';
import { ThemeButton } from './app/ThemeButton';
import { initialLoadTheme } from './app/ThemeSlice';
import { useDispatch } from 'react-redux';
import ToggleButton from './app/auth/ToggleButton';
import ProfileButton from './app/auth/Profile';


function App() {

  const dispatch = useDispatch();
  dispatch(initialLoadTheme());

  return (
    <div className="bg-sand dark:bg-darkgrey min-h-screen">
      
      <HashRouter>
        <div>
          <nav>
            <div className="flex lg:flex-grow items-center">
              <ul className="flex flex-col dark:text-lemon ml-auto lg:flex-row ">
                <li className="nav-item">
                  <Link className="px-3 py-2 hover:underline" to="/">[Leaderboard]</Link>
                </li>
                <li className="nav-item">
                  <Link className="px-3 py-2 hover:underline" to="/about">[About]</Link>
                </li>
                <li className="nav-item">
                  <ThemeButton />
                </li>
                <li className="nav-item">
                  <ToggleButton />
                </li>
                <li className="nav-item">
                  <ProfileButton />
                </li>
              </ul>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/profile/:id">
              <TdmProfileRoot />
            </Route>
            <Route path="/about">
              <AboutRoot />
            </Route>
            <Route path="/">
              <LeaderboardRoot />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
