import React from "react";
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import primitive from 'glamorous-primitives';
import TextInput from 'primitives/Input/Text'
import { emptyText } from '../styles/colours';

const { View } = primitive;
const textColour = empty => empty ? emptyText : null;

const Input = glamorous(TextInput)(
  {
    width: "100%",
    fontWeight: 'lighter',
    textAlign: 'center',
    borderWidth: 0,
  },
  ({ little, empty, done }) => ({
    fontSize: empty ? (little ? 60 : 120) : (little ? 20 : 40),
    color: textColour(empty || done),
    textDecorationLine: done ? 'line-through' : 'none',
  })
);

const Button = primitive.text(
  {
    flex: 1,
    color: emptyText,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 14,
  },
  ({ empty, done }) => ({
    color: textColour(empty || done),
  })
);

export default function Todo({
  children = null,
  empty = children === null,
  todo = empty ? '+' : children,
  little = false,
  done = false,
  prompt = empty ? (little ? 'Little Thing' : 'Big Thing') : '✔ Done',
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
      ><Input little={little} empty={empty} done={done}>{ todo }</Input></View>
      <Button empty={empty} done={done}>{ prompt }</Button>
    </View>
  );
}

Todo.propTypes = {
  children: PropTypes.node,
  empty: PropTypes.bool,
  little: PropTypes.bool,
  done: PropTypes.bool,
  prompt: PropTypes.string,
}
