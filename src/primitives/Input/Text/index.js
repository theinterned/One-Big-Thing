import Platform from 'primitives/Platform';
import { default as TextHTML } from './Text.html';

let TextInput;

switch (Platform.OS) {
  case 'web':
    TextInput = TextHTML;
    break;
  default:
}

export default TextInput;
