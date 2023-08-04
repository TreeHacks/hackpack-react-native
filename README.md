# hackpack-react-native

### Overview

In this hackpack we will go over the basics of React Native and Expo to build a simple mobile application. React Native is a framework that allows you to build native mobile applications using JavaScript and React. Expo is a toolchain built around React Native that allows you to easily build, run, and deploy React Native applications. Expo also provides a number of APIs that allow you to access native device functionality such as the camera, accelerometer, and location.

### Setup

1. Install Node.js and npm
   - Node.js is a JavaScript runtime that allows you to run JavaScript outside of the browser. npm is a package manager for JavaScript that allows you to easily install and manage JavaScript libraries.
   - You can download Node.js and npm [here](https://nodejs.org/en/download/).
   - To check if you have Node.js and npm installed, run the following commands in your terminal:
     ```
     node -v
     npm -v
     ```
   - For this hackpack, we will be using Node.js version 16.19.1 and npm version 9.6.7.

<br/>

2. Install Expo CLI
   - Expo CLI is a command line tool that allows you to easily build, run, and deploy React Native applications.
   - To install Expo CLI, run the following command in your terminal:
     ```
     npm install -g expo-cli
     ```
   - To install Expo SDK, which is a collection of libraries that provide access to native device functionality, run the following command in your terminal (we'll be using version 48 for this hackpack)
     ```
       npm install expo@48 -g
     ```

Note: You may find that newer packages may have less support across the community libraries and may not be compatible with the latest version of Node.js. If you run into any issues, try using an older version.

### Creating a New Project

1. To create a new project, run the following command in your terminal:

   ```
   npx create-expo-app my-app
   ```

   This will create a new directory called my-project with all the files you need to get started.

2. To run the application, run the following command in your terminal:
   ```
   cd my-app
   npm start
   ```
   With Expo, you can directly run your application on your phone. To do so, download the Expo app on your phone. Once you have the Expo app, you can scan the QR code that appears in your terminal. Alternatively, you can press 'a' in your terminal to run the application in an Android emulator ([instructions](https://docs.expo.dev/workflow/android-studio-emulator/)) or 'i' to run the application in an iOS simulator ([instructions](https://docs.expo.dev/workflow/ios-simulator/)).

Notes: There will be several additional files in the my-project directory that tell Expo how to build and run your application. You can ignore these files for now.

### Hello World

1. Open the App.js file in your text editor of choice. You should see the following code:

```jsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

2. Replace the Text component with the following:
   ```
   <Text>Hello World!</Text>
   ```
3. You should see the text "Hello World!" appear in the Expo app on your phone or emulator through live reloading.

![](/hackpack-assets/hello_world.png)

### Styling

It's a little bland right now. Let's add some styling to make it look a little nicer.

1. First, let's take a look at the following code:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

The styles object contains a number of properties that describe how a component should be styled. Each property contains a number of key-value pairs. The key is the name of the style property aka the class, and the value is the value of the style property. For example, the backgroundColor property sets the background color of the component. The value of the backgroundColor property is '#fff', which is a hex code that represents white. Notice how these properties are camelCased versions of CSS properties.

2. Let's change the background color of the container to blue. Change the backgroundColor property to '#0000ff'. You should see the background color of the container change to blue.

Notes: Flexbox is a layout system that allows you to easily position elements in a container. The flex property specifies how much space an element should take up relative to other elements in the container. The alignItems property specifies how to align elements along the cross axis. The justifyContent property specifies how to align elements along the main axis. Here is a [guide](https://reactnative.dev/docs/flexbox) that goes over the basics of flexbox.

### Components

1. Now let's create a component in a new `components/` folder named `button.component.jsx`. These are like lego blocks that you can use to build your application. Let's create a button component.

```jsx
import { TouchableOpacity, Text } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity onPress={() => console.log('Button Pressed!')}>
      <Text>Click Me!</Text>
    </TouchableOpacity>
  );
};

export default Button;
```

2. Export the Button component from App.js and import it into App.js. You should see the button appear in the Expo app on your phone or emulator.

```jsx
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button />
      <StatusBar style='auto' />
    </View>
  );
}
```

3. Although, the button works, we can't customize it as there are no properties that we can pass into the component. Let's some props, namely title, onPress, and style. This will allow us to dynamically change the title, onPress function, and style of the button.

```jsx
const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};
```

4. Now, we can customize the button in App.js.

```jsx
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Button
        title='Click Me!'
        onPress={() => console.log('Button Pressed!')}
        style={styles.button}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});
```

5. Now, let's make a counter that tracks the number of times the button is pressed. First, let's create a state variable, count, using the useState hook and display that in the text component. The useState hook takes in an initial value and returns a state variable and a function to update the state variable. We can use the state variable to keep track of the count and the function to update the count. Whenever, a state is updated, the component is re-rendered, meaning that the component is rendered again with the updated state.

```jsx
// Add this import
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count} clicks</Text>
      <Button
        title='Click Me!'
        onPress={() => {
          setCount(count + 1);
          console.log('Button Pressed!');
        }}
        style={styles.button}
      />
      <StatusBar style='auto' />
    </View>
  );
}
```

![](/hackpack-assets/button_counter.png)

### Screens

1. Now that we have a component, let's move on to screens. Screens are components that are like pages in a website. We can use the Button component that we created earlier in a screen. We can manage screens and navigating between them using React Navigation. Let's install React Navigation.

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

2. Now, let's create a new screen in a new `screens/` folder named `home.screen.jsx`. This will be the home screen of our app. Let's create a home screen component. Note, that we are using the StatusBar component from Expo to set the status bar style (light or dark) so that it is visible on the screen.

```jsx
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <StatusBar style='auto' />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // Styles
});
```

3. In App.js, let's define the navigation stack. The navigation stack is a stack of screens that we can navigate between. We can use the createStackNavigator function to create a stack navigator. The createStackNavigator function takes in a configuration object that contains the screens in the stack. We can use the component property to specify the component to render for each screen. We can also use the options property to specify the title of the screen.

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Add this import
import HomeScreen from './screens/home.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

4. We can also add a button to the home screen. Let's add a button to the home screen. Notice that we can pass in the navigation prop to the component. This allows us to navigate to other screens. We can use the navigate function to navigate to a screen. The navigate function takes in the name of the screen to navigate to, as defined in the createStackNavigator function. In this case, we can navigate to the Details screen by passing in 'Details' as the first argument to the navigate function.

```jsx
import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      />
    </View>
  );
};
```

5. Now, let's create a details screen. Let's create a new screen in a new `screens/` folder named `details.screen.jsx`. This will be the details screen of our app. Let's create a details screen component.

```jsx
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  // Styles
});
```

6. In App.js, let's add the Details screen to the navigation stack and define the initial route to be the Home screen. Make sure to reload the app to update the navigation stack.

```jsx
import DetailsScreen from './screens/details.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

7. Now, we can navigate between the home screen and the details screen. However, we want to be able to go back to the home screen from the details screen. We can do this by adding a button to the details screen.

```jsx
import Button from '../components/button.component';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
        style={styles.button}
      />
    </View>
  );
};
```

![](/hackpack-assets/navigation.gif)

### Lists

1. Now, let's create a list of items. Let's create a new component in a called `list-item.component.jsx`. This will be the list item component of our app. Let's create a list item component.

```jsx
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  // Styles
});
```

2. Now, let's use the list item component in the home screen. Let's create a list of items and map over the list to render the list items. Note, that we are using the key prop to specify a unique key for each list item. This is required by React to keep track of the list items.

```jsx
import ListItem from '../components/list-item.component';

const HomeScreen = ({ navigation }) => {
  const list = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {list.map((item, index) => (
        <ListItem
          title={item}
          key={index}
        />
      ))}
    </View>
  );
};
```

3. What if the `ListItem` is too large to fit on the screen? We can use the `Flatlist` component to render a list of items. The `Flatlist` component takes in a configuration object that contains the list of items to render. We can use the data property to specify the list of items to render. We can also use the renderItem property to specify the component to render for each item. We can also use the keyExtractor property to specify a unique key for each item.

```jsx
import { FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const list = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => <ListItem title={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
```

### Networking

1. Now, let's fetch data from a server. Let's create a new component called `post.component.jsx` to display a post.

```jsx
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  // Styles
});
```

2. Now, let's use the post component in the home screen. Let's fetch posts from the [JSON Placeholder API](https://jsonplaceholder.typicode.com/). We can use the `fetch` function to fetch data from a server. We can use the `then` function to get the response from the server. We can use the `json` function to convert the response to a JSON object. We can use the `catch` function to catch any errors. Note, that we are using the `useEffect` hook to fetch the data when the component mounts. `useEffect` is used to perform side effects in a component, in other words, react to changes in the component through states or props.

```jsx
import { useState, useEffect } from 'react';

import Post from '../components/post.component';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FlatList 
        data={posts}
        renderItem={({ item }) => <Post title={item.title} body={item.body} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    // Styles
  },
  flatlistContent: {
    // Styles
  },
});

``` 

# Congratulations! 🎉

You've finished the react-native hackpack! Now, you can build your own react-native apps!

### License

MIT

# About HackPacks 🌲

HackPacks are built by the [TreeHacks](https://www.treehacks.com/) team and contributors to help hackers build great projects at our hackathon that happens every February at Stanford. We believe that everyone of every skill level can learn to make awesome things, and this is one way we help facilitate hacker culture. We open source our hackpacks (along with our internal tech) so everyone can learn from and use them! Feel free to use these at your own hackathons, workshops, and anything else that promotes building :)

If you're interested in attending TreeHacks, you can apply on our [website](https://www.treehacks.com/) during the application period.

You can follow us here on [GitHub](https://github.com/treehacks) to see all the open source work we do (we love issues, contributions, and feedback of any kind!), and on [Facebook](https://facebook.com/treehacks), [Twitter](https://twitter.com/hackwithtrees), and [Instagram](https://instagram.com/hackwithtrees) to see general updates from TreeHacks.
