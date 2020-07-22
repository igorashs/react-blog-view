import React from 'react';
import NewestPost from './NewestPost';
import RecentPostLists from './RecentPostList';
import PropTypes from 'prop-types';
import Loading from '../Loading';

export default function HomePage({ posts }) {
  return !posts ? (
    <Loading />
  ) : (
    <div className="Container">
      <NewestPost post={posts[0]} />
      <RecentPostLists posts={posts} />
    </div>
  );
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};
