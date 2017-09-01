import React from 'react';
import { Dimensions } from 'react-native-web';
import glam from 'glamorous-primitives';
import { emerald, headerBorder, bodyBg, headerText } from './styles/colours';
import Todo from './Todo';

console.log(emerald);

const { height: windowHeight } = Dimensions.get('window');

const Screen = glam.view({
  alignItems: 'stretch',
  alignContent: 'stretch',
  height: windowHeight,
  backgroundColor: emerald,
  padding: 10,
});

const Header = glam.view({
  flexDirection: 'row',
  flex: 0,
  justifyContent: 'space-around',
  padding: 10,
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: headerBorder,
});

const Title = glam.text({
  color: headerText,
  fontWeight: 'bold',
});

const Body =  glam.view({
  flex: 1,
  justifyContent: 'space-around',
  padding: 10,
  backgroundColor: bodyBg,
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
  borderTopColor: emerald,
  borderTopStyle: 'dotted',
  borderTopWidth: 2,
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
