# react-native-keyboard-responsive-value

## Getting started

```bash
npm i react-native-keyboard-responsive-value
```
#### Description
This library is designed for React Native and provides an easy way to manage values when the keyboard is present or hidden.<br>
Simply use the flexible value() function, which takes two parameters: the first for when the keyboard is not visible and the second for when it appears.<br> 
The function will return the appropriate value based on the keyboard's state.<br>
Both numeric and string values are supported as parameters and return types.<br>
As this is my first attempt at creating a library, it may have some shortcomings. <br>
If you encounter any issues, please feel free to report them in the GitHub issues section.<br>

Thank you for your support!

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

