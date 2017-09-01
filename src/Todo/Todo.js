import React from "react";
import glam from 'glamorous-primitives';

const { View } = glam;

const Input = glam.text({
  fontSize: 120,
  fontWeight: 'lighter',
  color: '#ccc',
});

const Button = glam.text({
  color: '#ccc',
  textTransform: 'uppercase',
});

export default function Todo() {
  return (
    <View
      height='500px'
      alignItems="center"
      justifyContent="center"
      padding={10}
    >
      <View
        flex={1}
        justifyContent="center"
      ><Input>+</Input></View>
      <Button>Big Thing</Button>
    </View>
  );
}
