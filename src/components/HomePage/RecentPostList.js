import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RecentPostList({ posts }) {
  return (
    <aside>
      <header>
        <h2>Recent Posts</h2>
      </header>
      <section>
        <ul>
          {posts &&
            posts.map((post) => (
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
      </section>
      <Link to="/posts">View All</Link>
    </aside>
  );
}

RecentPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};
