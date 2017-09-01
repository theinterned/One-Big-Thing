import React from 'react';
import { Dimensions } from 'react-native-web';
import glam from 'glamorous-primitives';
import * as d from './styles/dimensions';
import { emerald, headerBorder, bodyBg, headerText } from './styles/colours';
import Todo from './Todo';

console.log(emerald);

const { height: windowHeight } = Dimensions.get('window');

const Screen = glam.view({
  height: windowHeight,
  backgroundColor: emerald,
  padding: d.gridUnit,
});

const Header = glam.view({
  flex: 0,
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: d.gridUnit,
  marginBottom: d.vUnit,
  borderBottomWidth: d.border100,
  borderBottomColor: headerBorder,
});

const Title = glam.text({
  color: headerText,
  fontWeight: 'bold',
});

const Things =  glam.view({
  flex: 1,
  padding: d.gridUnit,
  backgroundColor: bodyBg,
  borderRadius: d.borderRadius,
  padding: d.gridUnit,
});

const BigThing = glam.view({
  flex: 2,
});

const LittleThings = glam.view({
  flex: 1,
  flexDirection: 'row',
  borderTopColor: emerald,
  borderTopStyle: 'dotted',
  borderTopWidth: d.border200,
});

const App = () =>
  <Screen>
    <Header>
      <Title>One Big Thing</Title>
    </Header>
    <Things>
      <BigThing>
        <Todo></Todo>
      </BigThing>
      <LittleThings>
        <Todo little></Todo>
        <Todo little></Todo>
        <Todo little></Todo>
      </LittleThings>
    </Things>
  </Screen>;

export default App;
