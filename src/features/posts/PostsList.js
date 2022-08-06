import React from 'react';
import { useSelector } from 'react-redux';
import { Post } from './Post';
import { selectAllPosts } from './postsSlice';

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <h2>Posts</h2>
      {orderedPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};
