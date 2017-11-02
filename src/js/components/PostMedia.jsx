import PropTypes from 'prop-types';
import React from 'react';

class PostMedia extends React.Component {
  render() {
    const url = this.props.post.url;
    const urlbits = url.split('.');
    const extension = urlbits[urlbits.length - 1].toLowerCase();
    const allowedFileTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

    if (!allowedFileTypes.includes(extension)) {
      return null;
    }

    return (
      <img className="post-image" src={url} alt={this.props.post.title} />
    );
  }
}

PostMedia.propTypes = {
  post: PropTypes.object,
};

export default PostMedia;
