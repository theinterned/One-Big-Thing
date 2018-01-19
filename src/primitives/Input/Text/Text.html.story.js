import React from 'react';
import { storiesOf } from '@storybook/react';
import glamorous from 'glamorous';
import TextInput from './';


const GlamInput = glamorous(TextInput)(
  {
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: "1px",
    borderColor: "pink"
  },
  ({ isItalic }) => ({
    fontStyle: isItalic ? 'italic' : 'normal'
  })
);

storiesOf('TextInput', module)
  .add('default', () => (
    <TextInput value="A text input" fontSize="2em" />
  ))
  .add('with passed styles object', () => (
    <TextInput value="A text input" css={{ fontSize: "2em" }} />
  ))
  .add('Styled with glamorous', () => (
    <GlamInput value="Glam Input" />
  ));
