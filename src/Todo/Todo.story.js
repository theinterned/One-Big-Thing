import React from 'react';
import { storiesOf } from '@storybook/react';
import Todo from './';

storiesOf('Todo', module)
  .add('empty', () => (
    <Todo />
  ))
  .add('with something to do', () => (
    <Todo>I have ONE job</Todo>
  ))
  .add('done', () => (
    <Todo done>I did what needed to be done</Todo>
  ));
