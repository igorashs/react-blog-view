import React from 'react';
import NewestPost from './NewestPost';
import RecentPostLists from './RecentPostList';
import PropTypes from 'prop-types';

export default function HomePage(props) {
  return (
    <div className="Container">
      {props.posts && <NewestPost post={props.posts[0]} />}
      {props.posts && <RecentPostLists posts={props.posts} />}
    </div>
  );
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};
