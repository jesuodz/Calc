import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Display = ({ display }) => {
  const displayVal = display.toString();
  return (
    <div className="input-container">
      <input id="display" value={displayVal} name="display" disabled />
    </div>
  )
};

Display.propTypes = {
  display: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  display: state.display
});

export default connect(mapStateToProps, null)(Display);
