import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/button.component';

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
