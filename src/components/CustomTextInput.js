import { TextInput, StyleSheet } from 'react-native';

// style
import { Palette } from '../Theme/Palette';

const CustomTextInput = ({ value, onChange, keyboardType, placeholder, returnKeyType }) => (
    <TextInput 
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={styles.container}
        returnKeyType={returnKeyType}
    />
)

const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderColor: Palette.primary,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '50%',
      textAlign: 'center',
    },
  });

export default CustomTextInput;
