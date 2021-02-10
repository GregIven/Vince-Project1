import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MainContentContainer from './Containers/MainContentContainer';
import AddFieldTest from './Components/AddFieldTest';
import NewTest1 from './Components/NewTester';
import Todo from './Components/Todo';

function App() {
  return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/MainContentContainer">Main Content</Link>
            </li>
            <li>
              <Link to="/AddFieldTest">Test Field</Link>
            </li>
            <li>
              <Link to="/NewTest1">New Test 1</Link>
            </li>
            <li>
              <Link to="/Todo">Todo</Link>
            </li>
          </ul>
        </nav>
      
  
        <Switch>
          <Route path="/Todo">
            <Todo />
          </Route>
          <Route path="/NewTest1">
            <NewTest1 />
          </Route>
          <Route path="/AddFieldTest">
            <AddFieldTest />
          </Route>
          <Route path="/MainContentContainer">
            <MainContentContainer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

export default App;
