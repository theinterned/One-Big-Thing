import React from 'react';
import { storiesOf } from '@storybook/react';
import Todo from './';

storiesOf('Todo', module)
  .add('empty', () => (
    <Todo />
  ))
  .add('with a thing to do', () => (
    <Todo>I have ONE job</Todo>
  ))
  .add('done', () => (
    <Todo done>I did what needed to be done</Todo>
  ))
  .add('little empty thing', () => (
    <Todo little />
  ))
  .add('little thing to do', () => (
    <Todo little>I have ONE job</Todo>
  ))
  .add('little done thing', () => (
    <Todo little done>I did what needed to be done</Todo>
  ));
