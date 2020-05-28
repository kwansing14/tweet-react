import React from 'react';
import ReactDOM from 'react-dom';

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.tweet.user.name}</div>
        <div>{this.props.tweet.user.screen_name}</div>
        <div>{this.props.tweet.text}</div>
        <div>{this.props.tweet.retweet_count}</div>
        <div>{this.props.tweet.favorite_count}</div>
      </div>
    );
  }
}