// components/Post.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';


class Post extends Component {

  handleClick = () => {
    const { deletePost, post, history } = this.props;
    deletePost(post.id);
    history.push('/'); 
  }

  render() {
    const { post } = this.props;

    if (post) {
      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <button onClick={this.handleClick}>Delete Post</button>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
