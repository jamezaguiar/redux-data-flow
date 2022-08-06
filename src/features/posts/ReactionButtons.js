import React from 'react';
import { useDispatch } from 'react-redux';
import { postsActions } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          className="reactionButton"
          onClick={() => {
            dispatch(
              postsActions.reactionAdded({
                postId: post.id,
                reaction: name,
              })
            );
          }}
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};
