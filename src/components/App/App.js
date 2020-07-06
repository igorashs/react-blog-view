import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from '../HomePage';
import PostsPage from '../PostsPage';
import PostPage from '../PostPage';
import Status from './Status';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchPublishedPosts, fetchServerStatus } from '../../lib/api';
import { addTimestamps, sortByDate } from '../../lib/helpers';

function App() {
  const posts = usePosts();
  const isOnline = useIsOnline();

  return (
    <Router>
      <header className="App_Header">
        <nav className="App_Nav">
          <ul>
            <li>
              <Link to="/">-Blog-</Link>
            </li>
            <li>
              <Link to="/posts">-Posts-</Link>
            </li>
          </ul>
        </nav>
        <Status status={isOnline} />
      </header>

      <Switch>
        <Route path="/" exact>
          <HomePage posts={posts && posts.slice(0, 5)} />
        </Route>
        <Route path="/posts" exact>
          <PostsPage posts={posts} />
        </Route>
        <Route path="/posts/:postId" exact>
          <PostPage posts={posts} />
        </Route>
        <Route path="/">
          <HomePage posts={posts} />
        </Route>
      </Switch>
    </Router>
  );
}

// fetch posts data and return posts state
function usePosts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const posts = await fetchPublishedPosts();

      if (!posts.error) {
        addTimestamps(posts);
        sortByDate(posts);
        setPosts(posts);
      } else {
        console.error('Failed to fetch the data, Try to fetch again in 5sec');
        setTimeout(fetch, 5000);
      }
    };

    fetch();
  }, []);

  return posts;
}

// fetch server status and return status state
function useIsOnline() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const status = await fetchServerStatus();

      if (status.error) {
        console.error('Failed connection to API, Try to reconnect in 10sec');
        setIsOnline(false);
        setTimeout(fetch, 10000);
      } else {
        setIsOnline(true);
      }
    };

    fetch();
  });

  return isOnline;
}

export default App;
