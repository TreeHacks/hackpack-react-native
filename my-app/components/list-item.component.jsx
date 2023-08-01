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