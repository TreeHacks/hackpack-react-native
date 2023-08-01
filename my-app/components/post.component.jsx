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
