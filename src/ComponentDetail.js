import React from "react";

const ComponentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src="" />
      </a>
      <div className="content">
        <a className="author" href="/">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

export default ComponentDetail;
