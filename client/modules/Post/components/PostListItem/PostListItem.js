import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
// import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div>
      <h3>
        <Link>
          {props.post.title}
        </Link>
      </h3>
      <p><FormattedMessage id="by" /> {props.post.name}</p>
      <p>{props.post.content}</p>
      <p><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></p>
      <hr />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
