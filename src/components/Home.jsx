import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="contactUs">contact us</Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Home);
