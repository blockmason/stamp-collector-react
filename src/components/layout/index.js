import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const Panel = styled.div`
  align-items: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  background-color: #303030;
  color: #f0f0f0;
  padding: 16px;
`;

const Content = styled.div`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Layout = ({ children }) => <Panel>
  <Header>Toronto Landmarks Collectible Stamps</Header>
  <Content>{children}</Content>
</Panel>;

const { node } = PropTypes;

Layout.propTypes = {
  children: node.isRequired
};

export default Layout;
