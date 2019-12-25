import React from 'react';
import PropTypes from 'prop-types';

export default function ObjectDestructuring() {
  return (
    <React.Fragment>
      <ComponentOne message="it's a message!" />
    </React.Fragment>
  );
}

function ComponentOne({ message }) {
  return (
    <div>{message}</div>
  );
}

ComponentOne.propTypes = {
  message: PropTypes.string.isRequired,
};
