import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './style/antdTest.scss';

const title = "Demo";
import { SwipeAction, List } from 'antd-mobile';


class ToastExample extends React.Component {
  render() {
    return (<List>
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
          {
            text: 'Delete',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' },
          },
        ]}
        left={[
          {
            text: 'Reply',
            onPress: () => console.log('reply'),
            style: { backgroundColor: '#108ee9', color: 'white' },
          },
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <List.Item
          extra="More"
          arrow="horizontal"
          onClick={e => console.log(e)}
        >
          Have left and right buttons
        </List.Item>
      </SwipeAction>
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        left={[
          {
            text: 'Reply',
            onPress: () => console.log('reply'),
            style: { backgroundColor: '#108ee9', color: 'white' },
          },
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <List.Item
          extra="More"
          arrow="horizontal"
          onClick={e => console.log(e)}
        >
          Only left buttons
        </List.Item>
      </SwipeAction>
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: 'Cancel',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
          {
            text: 'Delete',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <List.Item
          extra="More"
          arrow="horizontal"
          onClick={e => console.log(e)}
        >
          Only right buttons
        </List.Item>
      </SwipeAction>
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: 'short',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
          {
            text: 'long text',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <List.Item
          extra="More"
          arrow="horizontal"
          onClick={e => console.log(e)}
        >
          Different button width
        </List.Item>
      </SwipeAction>
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: 'button1',
            onPress: () => console.log('cancel'),
            style: { backgroundColor: '#ddd', color: 'white' },
          },
          {
            text: 'button2',
            onPress: () => console.log('delete'),
            style: { backgroundColor: '#F4333C', color: 'white' },
          },
        ]}
        onOpen={() => console.log('global open')}
        onClose={() => console.log('global close')}
      >
        <List.Item
          extra="More"
          arrow="horizontal"
          onClick={() => console.log('List.Item clicked!')}
        >
          List.Item with onClick
        </List.Item>
      </SwipeAction>
    </List>);
  }
}

const Index = withStyles(s)(ToastExample);

async function action({ path, query, hash }) {
  // console.log("path---",path, "query----",query, "hash-----", hash)
  return {
    chunks: ['chat.antdTest'],
    title,
    component: (
      <Layout hide={true}>
        <Index />
      </Layout>
    ),
  };
}

export default action;
