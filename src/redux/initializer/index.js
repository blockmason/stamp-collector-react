import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import listStamps from '/redux/actions/list-stamps';

class Initializer extends React.Component {
  static get propTypes() {
    const { func, node } = PropTypes;

    return {
      children: node,
      onInitialize: func.isRequired
    };
  }
  componentDidMount() {
    this.props.onInitialize();
  }

  render() {
    return this.props.children;
  }
}

export default connect(() => ({
}), (dispatch) => ({
  onInitialize: () => dispatch(listStamps())
}))(Initializer);
