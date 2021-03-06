import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPostCommentsWithId, postComment } from '../../lib/api';
import { addTimestamps } from '../../lib/helpers';
import { validateUsername, validateCommentText } from '../../lib/validator';
import Loading from '../Loading';

export default function PostPage({ posts }) {
  const { postId } = useParams();
  const post = usePost(posts, postId);
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
          text: userComment,
          date: new Date()
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

  return !post ? (
    <Loading />
  ) : (
    <article className="PostPage">
      <header>
        <h1>
          <span className="Italic">{post.title}</span>
          <p className="Date">Posted: {post.timestamp}</p>
        </h1>
      </header>
      <section className="PostText">
        <p>{post.text}</p>
      </section>
      <footer>
        <section className="PostComments">
          <h2>Comments</h2>
          {comments.length > 0 ? (
            <ul>
              {comments.map((c) => (
                <li key={c._id}>
                  <article className="PostComment">
                    <h3>{c.username}</h3>
                    <div>
                      <p className="CommentText">{c.text}</p>
                      <p className="CommentDate">{c.timestamp}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            'No Comments'
          )}
          <section className="CommentFormSection">
            <form
              className={`CommentForm ${
                (userNameError || userCommentError) && 'FormError'
              }`}
              onSubmit={handleSubmit}
            >
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
              <button>Add Comment</button>
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
function usePost(posts, postId) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const post = posts && posts.find((p) => p._id === postId);
    if (post) {
      setPost(post);
    }
  }, [postId, posts]);

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
          setComments(comments);
        } else {
          setComments([]);
        }
      }
    };
    fetch();
  }, [postId, post]);

  return comments;
}
