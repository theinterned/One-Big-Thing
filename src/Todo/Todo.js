import React from "react";
import PropTypes from 'prop-types';
import glam from 'glamorous-primitives';
import { emptyText } from '../styles/colours';

const { View } = glam;
const textColour = empty => empty ? emptyText : null;

const Input = glam.text(
  {
    fontWeight: 'lighter',
  },
  ({ little, empty }) => ({
    fontSize: little ? 60 : 120,
    color: textColour(empty),
  })
);

const Button = glam.text(
  {
    flex: 1,
    color: emptyText,
    textTransform: 'uppercase',
  },
  ({ empty }) => ({
    color: textColour(empty),
  })
);

export default function Todo({
  children = null,
  little = false,
  prompt = little ? 'Little Thing' : 'Big Thing',
  empty = children === null,
}) {
  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding={10}
    >
      <View
        flex={8}
        justifyContent="center"
      ><Input little={little} empty={empty}>+</Input></View>
      <Button empty={empty}>{ prompt }</Button>
    </View>
  );
}

Todo.propTypes = {
  children: PropTypes.node,
  little: PropTypes.bool,
  prompt: PropTypes.string.isRequired,
  empty: PropTypes.bool,
}
