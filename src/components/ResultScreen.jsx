import React from 'react';
import PropTypes from 'prop-types';

const ResultScreen = ({ data }) => (
  <div className="block-item result">{data}</div>
);

ResultScreen.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ResultScreen;
