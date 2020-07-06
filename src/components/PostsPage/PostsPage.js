import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PostsPage({ posts }) {
  return !posts ? (
    <h3>No Data Found :C</h3>
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
