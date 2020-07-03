import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from '../HomePage';
import PostsPage from '../PostsPage';
import PostPage from '../PostPage';
import Status from './Status';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchPublishedPosts, fetchServerStatus } from '../../lib/api';
import moment from 'moment';

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
          <PostPage />
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
    (async () => {
      const posts = await fetchPublishedPosts();
      addTimestamps(posts);
      sortByDate(posts);
      setPosts(posts);
    })();
  }, []);

  return posts;
}

// fetch server status and return status state
function useIsOnline() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await fetchServerStatus();

      setIsOnline(status.error ? false : true);
    })();
  });

  return isOnline;
}

// add timestamps to state array (which have date prop)
function addTimestamps(dataArr) {
  dataArr.forEach((data) => (data.timestamp = moment(data.date).calendar()));
}

// sort the state array by date
function sortByDate(dataArr) {
  dataArr.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }

    if (a.date < b.date) {
      return 1;
    }

    return 0;
  });
}

export default App;
