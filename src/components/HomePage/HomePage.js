import React from 'react';
import NewestPost from './NewestPost';
import RecentPostLists from './RecentPostList';
import PropTypes from 'prop-types';

export default function HomePage(props) {
  return (
    <div className="Container">
      <NewestPost />
      <RecentPostLists />
      <p>{props.posts ? props.posts[0].title : 'Loading'}</p>
    </div>
  );
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};
