import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets';
import Body from 'body';


class App extends React.Component {
  render() {
    console.log(tweets)
    let listOfTweets = tweets.tweets.map((tweet) => {
      return <Body tweet={tweet} />
    });

    return (
      <div>
        {listOfTweets}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element);//

console.log("tweet react");