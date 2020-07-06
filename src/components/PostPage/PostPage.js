import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPostCommentsWithId } from '../../lib/api';
import moment from 'moment';

export default function PostPage({ posts }) {
  const { postId } = useParams();
  const history = useHistory();
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = posts && posts.find((p) => p._id === postId);
    if (post) {
      setPost(post);
    } else {
      history.push('/');
    }
  }, [postId, posts, history]);

  useEffect(() => {
    const fetch = async () => {
      if (post) {
        const comments = await fetchPostCommentsWithId(postId);

        if (!comments.error) {
          addTimestamps(comments);
        }

        setComments(comments || []);
      }
    };
    fetch();
  }, [postId, post]);

  return !post ? null : (
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
        <section>
          <h2>Comments</h2>
          <ul>
            {comments.map((c) => (
              <li key={c._id}>
                <article>
                  <h3>{c.username}</h3>
                  <div>
                    <p>{c.text}</p>
                    <p>{c.timestamp}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </footer>
    </article>
  );
}

PostPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

// add timestamps to state array (which have date prop)
// doesn't modify the state if it has an invalid type
function addTimestamps(dataArr) {
  if (dataArr instanceof Array) {
    dataArr.forEach((data) => {
      if (data.date) {
        return (data.timestamp = moment(data.date).calendar());
      }
    });
  }
}
