import React from 'react';
import { render } from 'react-dom';

const components = {};
components.ActiveVideo = (element, props) => {
    return new Promise((resolve, reject) =>
      require.ensure([], (require) => {
        const Component = require('@sdp/active-video').ActiveVideo;
        if (typeof element !== 'undefined' && typeof props !== 'undefined') {
          render(<Component {...props} />, element)
        } else {
          resolve(Component);
        }
      }, 'ActiveVideo')
    ).catch((err) => {
      console.log(err); // eslint-disable-line
    });
};
export default components;
