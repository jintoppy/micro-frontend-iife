/* global window document */

/**
UCM3 - Active Video
**/
import React from 'react';
import PropTypes from 'prop-types';
import { Arrow } from '@sdp/shared-ui';
import './styles';

const ActiveVideo = () => {
  return (
    <div>
      Active Video Component Modified Again
      <Arrow />
    </div>
  )
}

ActiveVideo.propTypes = {
  title: PropTypes.string
}

export default ActiveVideo;
