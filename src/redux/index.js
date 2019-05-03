import Initializer from './initializer';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';

import { createStore } from 'redux';
import middleware from './middleware';
import reducers from './reducers';

const createRedux = () => {
  const store = createStore(reducers(), middleware());

  const Redux = ({ children }) => <Provider store={store}>
    <Initializer>
      {children}
    </Initializer>
  </Provider>;

  const { node } = PropTypes;

  Redux.propTypes = {
    children: node
  };

  return Redux;
};

export default createRedux;
