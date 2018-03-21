import React from 'react';

const Photo = props => {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
        <div className="button-container">
          <button class="remove-button">Remove</button>
        </div>
      </figcaption>
    </figure>
  );
};

export default Photo;
