/** @jsx React.DOM */

// Page Not Found
// ================
// A basic 404 page

"use strict";


var React = require("react");

var Accounts = React.createClass({
    render: function() {
      return (
        <h1>{"Page not found"}</h1>
      );
    }
});

module.exports = Accounts;
