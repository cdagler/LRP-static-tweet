import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Tweet = React.createClass({
  render: function() {
    return (
      <div className="tweet">
        <Avatar/>
        <div className="content">
          <NameWithHandle/>
          <Message/>
        </div>
      </div>
    );
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <img src="https://www.gravatar.com/avatar/cdagler"
      className="avatar"
      alt="avatar"/>
    );
  }
});

var Message = React.createClass({
  render: function() {
    return (
      <div className="message">
        This is less then 140 characters.
      </div>
    );
  }
});

var NameWithHandle = React.createClass({
  render: function() {
    return (
      <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
      </span>
    );
  }
});

ReactDOM.render(
  <Tweet/>,
  document.getElementById('root')
);
