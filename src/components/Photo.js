import React from 'react';
import propTypes from 'prop-types';

const Photo = props => {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
        <div className="button-container">
          <button className="remove-button" onClick={() => {
            props.onRemovePhoto(post);
          }}>Remove</button>
        </div>
      </figcaption>
    </figure>
  );
};

Photo.propTypes = {
  post: propTypes.object.isRequired,
  onRemovePhoto: propTypes.func.isRequired
}

export default Photo;
