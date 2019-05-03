import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const Name = styled.div`
  background-color: #f8f8f8;
  border-color: #f0f0f0;
  border-style: solid;
  border-width: 0 0 1px;
  font-size: 1.5em;
  line-height: 2em;
  padding: 0 16px;
`;

const Artwork = styled.img`
  flex: 1;
  width: 100%;
`;

const Fact = styled.div`
  padding: 8px;
`;

const OwnAction = styled.button`
  margin: 8px;
`;

const Owner = styled.div`
  font-family: monospace;
  font-size: 12px;
  padding: 8px;
  background-color: #f8f8f8;
  border-color: #f0f0f0;
  border-style: solid;
  border-width: 1px 0 0;
`;

const StyledStamp = styled.div`
  border-color: #f0f0f0;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
`;

const Stamp = ({ onOwn, value: { fact, name, owner, picture } }) => <StyledStamp>
  <Name>{name}</Name>
  <Artwork src={`https://raw.githubusercontent.com/blockmason/link-workshop-tor/master/activity4/collectible-stamps-app-link/src/${picture}`}/>
  <Fact>{fact}</Fact>
  <OwnAction onClick={onOwn}>Own</OwnAction>
  <Owner>{owner}</Owner>
</StyledStamp>;

const { func, shape, string } = PropTypes;

Stamp.propTypes = {
  onOwn: func.isRequired,
  value: shape({
    fact: string.isRequired,
    name: string.isRequired,
    owner: string,
    picture: string.isRequired
  }).isRequired
};

export default Stamp;
