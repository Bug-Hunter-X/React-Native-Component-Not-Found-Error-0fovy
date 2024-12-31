This is the corrected version of App.js that includes the import statement and component usage corrected. Note that the component 'MyComponent' must be defined in a file that's accessible through the import path used.

```javascript
import React from 'react';
import { Text, View } from 'react-native';
import MyComponent from './MyComponent'; // Correct import path

const App = () => {
  return (
    <View>
      <MyComponent />
    </View>
  );
};

export default App;
```
And the corresponding MyComponent.js:

```javascript
import React from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  return (
    <View>
      <Text>My Component</Text>
    </View>
  );
};

export default MyComponent;
```