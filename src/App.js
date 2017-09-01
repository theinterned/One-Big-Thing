import React from 'react';
import { Dimensions } from 'react-native-web';
import glam from 'glamorous-primitives';

const { height: windowHeight } = Dimensions.get('window');

const { Text } = glam;

const Screen = glam.view({
  alignItems: 'stretch',
  alignContent: 'stretch',
  height: windowHeight,
  backgroundColor: '#50e2c1',
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
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-around',
  padding: 10,
  backgroundColor: '#fff',
  borderRadius: 3,
  padding: 10,
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
      <Text>Do it</Text>
    </Body>
  </Screen>;

export default App;
