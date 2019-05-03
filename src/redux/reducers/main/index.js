import { link } from '@blockmason/link-sdk';
import stamps from '/api/stamps.json';

const project = link({
  clientId: '<REPLACE_ME>',
  clientSecret: '<REPLACE_ME>'
});

const DEFAULT_STATE = {
  owner: '0x0000111122223333444455556666777788889999',
  project,
  stamps
};

export default (initialState = DEFAULT_STATE) => (state = initialState, action) => {
  if (action.type === 'LIST_STAMPS') {
    return { ...state, stamps: action.stamps };
  }

  if (action.type === 'ERROR') {
    return { ...state, error: action.error };
  }

  return state;
};
