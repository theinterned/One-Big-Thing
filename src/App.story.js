import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App';

const bigThing = { todo: 'Create slide deck for the big meeting' }
const thingTwo = { todo: 'Sign the contracts' }
const thingThree = { todo: 'Email vendors' }

storiesOf('App', module)
  .add('empty', () => (
    <App />
  ))
  .add('with one big thing to do', () => (
    <App todos={[
      bigThing,
    ]} />
  ))
  .add('with one big thing done', () => (
    <App todos={[
      { ...bigThing, done: true }
    ]} />
  ))
  .add('with three things to do', () => (
    <App todos={[
      bigThing,
      thingTwo,
      thingThree,
    ]} />
  ))
  .add('with a mix of done and not done', () => (
    <App todos={[
      { ...bigThing, done: true },
      thingTwo,
      undefined,
      { ...thingThree, done: true },
    ]} />
  ));
