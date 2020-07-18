import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPostCommentsWithId, postComment } from '../../lib/api';
import { addTimestamps } from '../../lib/helpers';
import { validateUsername, validateCommentText } from '../../lib/validator';

export default function PostPage({ posts }) {
  const { postId } = useParams();
  const history = useHistory();
  const post = usePost(posts, postId, history);
  const comments = useComments(post, postId);
  const [userName, setUserName] = useState(null);
  const [userComment, setUserComment] = useState(null);
  const [userNameError, setUserNameError] = useState('');
  const [userCommentError, setUserCommentError] = useState('');

  async function handleSubmit(e) {
    const userNameError = validateUsername(userName);
    const userCommentError = validateCommentText(userComment);

    if (userNameError || userCommentError) {
      e.preventDefault();
      setUserNameError(userNameError);
      setUserCommentError(userCommentError);
    } else {
      try {
        await postComment({
          post: postId,
          username: userName,
          text: userComment
        });
      } catch (error) {
        console.error('could not submit the comment');
      }
    }
  }

  useEffect(() => {
    if (userName !== null) {
      setUserNameError(validateUsername(userName));
    }
  }, [userName]);

  useEffect(() => {
    if (userComment !== null) {
      setUserCommentError(validateCommentText(userComment));
    }
  }, [userComment]);

  function handleUsernameChange(e) {
    setUserName(e.currentTarget.value);
  }

  function handleUserCommentChange(e) {
    setUserComment(e.currentTarget.value);
  }

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
          <section>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username" className={userNameError && 'Error'}>
                Username {userNameError}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={userName || ''}
                onChange={handleUsernameChange}
              />
              <label htmlFor="text" className={userCommentError && 'Error'}>
                Text {userCommentError}
              </label>
              <textarea
                type="text"
                id="text"
                name="text"
                value={userComment || ''}
                onChange={handleUserCommentChange}
              ></textarea>
              <button>Submit</button>
            </form>
          </section>
        </section>
      </footer>
    </article>
  );
}

PostPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

// get our state post by ID
function usePost(posts, postId, history) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = posts && posts.find((p) => p._id === postId);
    if (post) {
      setPost(post);
    } else {
      history.push('/');
    }
  }, [postId, posts, history]);

  return post;
}

// Fetch post comments and return the state
function useComments(post, postId) {
  const [comments, setComments] = useState([]);

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

  return comments;
}
