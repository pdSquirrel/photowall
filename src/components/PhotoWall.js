import React from 'react';
import Photo from './Photo';
import propTypes from 'prop-types';

const PhotoWall = props => {
  return (
    <div className="photo-grid">
      {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
    </div>
  );
}

PhotoWall.propTypes = {
  posts: propTypes.array.isRequired,
  onRemovePhoto: propTypes.func.isRequired
}

export default PhotoWall;
