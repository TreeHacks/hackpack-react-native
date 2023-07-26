import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
