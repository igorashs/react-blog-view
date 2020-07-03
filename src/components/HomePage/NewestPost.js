import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NewestPost({ post }) {
  return (
    <article>
      <header>
        <h1>
          New: <span className="Italic">{post.title}</span>
        </h1>
      </header>
      <section>
        <p>{post.text}</p>
      </section>
      <footer>
        <p>Date: {post.timestamp}</p>
        <Link to={`/posts/${post._id}`}>Continue Reading</Link>
      </footer>
    </article>
  );
}

NewestPost.propTypes = {
  post: PropTypes.object
};
