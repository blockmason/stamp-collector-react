import '@babel/polyfill';

import Layout from '/components/layout';
import React from 'react';
import Stamp from '/components/stamp';
import StampList from '/components/stamp-list';
import Toast from '/components/toast';

import { connect } from 'react-redux';
import createRedux from '/redux';
import mount from '/utilities/mount';
import ownStamp from '/redux/actions/own-stamp';

const LiveStamp = connect(() => ({}), (dispatch, props) => ({
  onOwn: () => dispatch(ownStamp({ stamp: props.value }))
}))(Stamp);

const LiveStampList = connect((state) => ({
  children: state.main.stamps.map((stamp) => <LiveStamp key={stamp.id} value={stamp}/>)
}))(StampList);

const ErrorToast = connect((state) => ({
  error: state.main.error
}), (dispatch) => ({
  onDismiss: () => dispatch({ error: undefined, type: 'ERROR' })
}))(Toast);

const Redux = createRedux();

mount(<Redux>
  <Layout>
    <LiveStampList/>
    <ErrorToast/>
  </Layout>
</Redux>);
