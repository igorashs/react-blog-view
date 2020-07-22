import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../Loading';

export default function PostsPage({ posts }) {
  return !posts ? (
    <Loading />
  ) : (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <Link to={`/posts/${post._id}`}>
            <article>
              <h3>{post.title}</h3>
              <p>{post.timestamp}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};
