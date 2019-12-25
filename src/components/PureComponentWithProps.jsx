import React from 'react';
import PropTypes from 'prop-types';

export default function PureComponentWithProps() {
  return (
    <React.Fragment>
      <div>This is a pure component with props</div>
      <ComponentThatTakesProps message="it's a message!" />
    </React.Fragment>
  );
}

function ComponentThatTakesProps(props) {
  return (
    <div>{props.message}</div>
  );
}

ComponentThatTakesProps.propTypes = {
  message: PropTypes.string.isRequired,
};
