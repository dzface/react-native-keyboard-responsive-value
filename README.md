# react-native-keyboard-responsive-value

## Getting started

```bash
npm i react-native-keyboard-responsive-value
```
#### Description
This library is available in React Native.
Simply use the flexible value() function to set the value when the keyboard is not present and the value when the keyboard appears as a parameter to return the second parameter value when the keyboard appears.
Parameters and return values can be numeric and stringed.
It's my first time making it, and I think it will be lacking a lot.
If there is a problem, please leave a problem in the github issue.
Thank you.

#### Example

```js
import {Text, TextInput, View } from 'react-native';
import flexibleValue from 'react-native-keyboard-responsive-value';

export default function App() {
  const fontSize = flexibleValue(100, 30);
  return (
    <View>
      <TextInput placeholder='Click here'/>
      <Text style={{fontSize}}>Flexible Value</Text>
    </View>
  );
}
```

