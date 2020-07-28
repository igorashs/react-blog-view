import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NewestPost({ post }) {
  return (
    <article className="NewestPost">
      <header>
        <h1>
          New: <span className="Italic">{post.title}</span>
          <p className="Date">Date: {post.timestamp}</p>
        </h1>
      </header>
      <section>
        <p>{post.text.slice(0, 3000)}</p>
      </section>
      <footer>
        <Link to={`/posts/${post._id}`}>
          <span>Continue Reading</span>
        </Link>
      </footer>
    </article>
  );
}

NewestPost.propTypes = {
  post: PropTypes.object
};
