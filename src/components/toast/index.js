import styled, { keyframes } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-32px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledToast = styled.div`
  animation: 250ms ${slideDown} ease-in-out 1;
  background: linear-gradient(to bottom, #c00000 0%, #b00000 100%);
  border-color: #a00000;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  cursor: pointer;
  padding: 16px;
  position: absolute;
  left: 0;
  margin: 64px 16px 0;
  right: 0;
  top: 0;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);

  :hover,
  :active {
    background: linear-gradient(to bottom, #b00000 0%, #a00000 100%);
  }

  :hover:active {
    background: linear-gradient(to bottom, #a00000 0%, #900000 100%);
  }
`;

const Toast = ({ error, onDismiss }) => {
  if (error) {
    return <StyledToast onClick={onDismiss}>{error.message}</StyledToast>;
  }
  return null;
};

const { func, shape, string } = PropTypes;

Toast.propTypes = {
  error: shape({
    message: string.isRequired
  }),
  onDismiss: func.isRequired
};

export default Toast;
