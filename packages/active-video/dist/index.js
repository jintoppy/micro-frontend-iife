var ActiveVideo = (function (exports, React, sharedUi) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  /* global window document */

  var ActiveVideo = function ActiveVideo() {
    return React.createElement("div", null, "Active Video Component Modified Again", React.createElement(sharedUi.Arrow, null));
  };

  exports.ActiveVideo = ActiveVideo;

  return exports;

}({}, React, sharedUi));
