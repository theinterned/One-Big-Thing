import React from 'react';
import { Dimensions } from 'react-native-web';
import glam from 'glamorous-primitives';
import Todo from './Todo';

const { height: windowHeight } = Dimensions.get('window');
const green = '#50e2c1';

const Screen = glam.view({
  alignItems: 'stretch',
  alignContent: 'stretch',
  height: windowHeight,
  backgroundColor: green,
  padding: 10,
});

const Header = glam.view({
  flexDirection: 'row',
  flex: 0,
  justifyContent: 'space-around',
  padding: 10,
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(0,0,0,0.1)',
});

const Body =  glam.view({
  flex: 1,
  justifyContent: 'space-around',
  padding: 10,
  backgroundColor: '#fff',
  borderRadius: 3,
  padding: 10,
});

const BigThing = glam.view({
  flex: 2,
});

const LittleThings = glam.view({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'stretch',
  alignContent: 'stretch',
  borderTopColor: green,
  borderTopStyle: 'dotted',
  borderTopWidth: 2,
});

const Title = glam.text({
  color: '#fff',
  fontWeight: 'bold',
});

const App = () =>
  <Screen>
    <Header>
      <Title>One Big Thing</Title>
    </Header>
    <Body>
      <BigThing>
        <Todo>Do it</Todo>
      </BigThing>
      <LittleThings>
        <Todo little></Todo>
        <Todo little></Todo>
        <Todo little></Todo>
      </LittleThings>
    </Body>
  </Screen>;

export default App;
