import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from '../HomePage';
import PostsPage from '../PostsPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchPublishedPosts } from '../../lib/api';

function App() {
  const posts = usePosts();

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
          <HomePage posts={posts} />
        </Route>
        <Route path="/posts" exact>
          <PostsPage posts={posts} />
        </Route>
        {/* <Route path="/post"><PostPage /></Route> */}
      </Switch>
    </Router>
  );
}

// fetch posts data and return posts state
function usePosts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      const posts = await fetchPublishedPosts();

      setPosts(posts);
    })();
  }, []);

  return posts;
}

export default App;
