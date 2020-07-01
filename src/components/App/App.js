import React from 'react';
import './App.css';
import HomePage from '../HomePage';
import PostsPage from '../PostsPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  // const [posts, setPosts] = useState(null);

  return (
    <Router>
      <header className="App_Header">
        <nav className="App_Nav">
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/posts" exact>
          <PostsPage />
        </Route>
        {/* <Route path="/post"><PostPage /></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
