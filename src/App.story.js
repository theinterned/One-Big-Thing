import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App';

storiesOf('App', module)
  .add('empty', () => (
    <App />
  ))
  .add('with one big thing to do', () => (
    <App todos={[
      { todo: 'My main thing', done: false }
    ]} />
  ))
  .add('with one big thing done', () => (
    <App todos={[
      { todo: 'My main thing', done: true }
    ]} />
  ))
  .add('with three things to do', () => (
    <App todos={[
      { todo: 'My main thing', done: false },
      { todo: 'Sign the contracts', done: false },
      { todo: 'Email vendors', done: false },
    ]} />
  ))
  .add('with a mix of done and not done', () => (
    <App todos={[
      { todo: 'My main thing', done: true },
      { todo: 'Sign the contracts', done: false },
      undefined,
      { todo: 'Email vendors', done: true },
    ]} />
  ));
