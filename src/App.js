import React from 'react';
import glam from 'glamorous-primitives';

const { Text } = glam;

const Screen = glam.view({
  alignItems: 'center',
  backgroundColor: '#50e2c1',
  padding: 10,
});

const Header = glam.view({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: 10,
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(0,0,0,0.25)',
});

const Body =  glam.view({
  width: '100%',
  flexDirection: 'row',
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
