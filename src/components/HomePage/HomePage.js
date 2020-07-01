import React from 'react';
import NewestPost from './NewestPost';
import RecentPostLists from './RecentPostList';

export default function HomePage(props) {
  return (
    <div className="Container">
      <NewestPost />
      <RecentPostLists />
    </div>
  );
}
