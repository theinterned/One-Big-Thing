import React from 'react';
import { storiesOf } from '@storybook/react';
import glamorous from 'glamorous';
import primitive from 'glamorous-primitives';
import TextInput from './';

const GlamInput = glamorous(TextInput)(
  {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.2em',
    backgroundColor: 'pink',
    borderWidth: '1px',
    borderColor: 'red'
  },
  ({ italic }) => ({
    fontStyle: italic ? 'italic' : 'normal'
  })
);

const PrimitiveInput = primitive(TextInput, {
  forwardProps: ['value', 'italic']
})(({ italic }) => ({
    fontStyle: italic ? 'italic' : 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.2em',
    backgroundColor: 'pink',
    borderWidth: '1px',
    borderColor: 'red'
  }));

storiesOf('primitives/TextInput', module)
  .add('default', () => <TextInput value="A text input" fontSize="2em" />)
  .add('with passed styles object', () => (
    <TextInput value="A text input" css={{ fontSize: '2em' }} />
  ))
  .add('Styled with glamorous', () => (
    <div>
      <GlamInput value="Glam Input" />
      <GlamInput value="Italic Glam Input" italic />
    </div>
  ))
  .add('Styled with glamorous-primitives — I\'ve got the value passing through using glamorous-primitives, but not the styles', () => (
    <div>
      <PrimitiveInput value="Glam Input" />
      <PrimitiveInput value="Italic Glam Input" italic />
    </div>
  ));
