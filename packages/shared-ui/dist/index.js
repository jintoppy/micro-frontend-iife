var sharedUi = (function (exports, React) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  /**
    UCX10 - Arrow
  **/

  var Arrow = function Arrow() {
    return React.createElement("div", null, "Arrow Component modified");
  };

  exports.Arrow = Arrow;

  return exports;

}({}, React));
