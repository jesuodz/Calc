import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Display extends Component {
  render() {
    return (
      <div className="input-container">
        <input id="display" value={null} name="display" disabled />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   result: state.result
// });

// export default connect(mapStateToProps, null)(Display);
export default Display;