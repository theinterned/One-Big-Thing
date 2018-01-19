import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from './';

storiesOf('TextInput', module)
  .add('default', () => (
    <TextInput value="A text input" fontSize="2em" />
  ))
  .add('with passed styles object', () => (
    <TextInput value="A text input" { ...{ fontSize: "2em" }} />
  ));
