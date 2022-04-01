import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from "./ComponentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <div className="comment">
        <a className="avatar" href="/">
          <img src="" />
        </a>
        <div className="content">
          <a className="author" href="/">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
      <ComponentDetail author="Jeff" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
