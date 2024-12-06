import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconAD from 'react-native-vector-icons/AntDesign';

type Props = {
  iconName?: string;
  value: string;
  placeHolder?: string;
  onChangeText?: (text:string) => void;
  rightIconName?: string;
  onPressFunc?: () => void;
  secureTextEntry?: boolean
};

const LoginInput: React.FC<Props> = ({
  iconName,
  value,
  placeHolder,
  onChangeText,
  rightIconName,
  onPressFunc,
  secureTextEntry
}) => {
  return (
    <View style={styles.textInputContainer}>
      {iconName ? (
        <IconFA
          name={iconName}
          size={27}
          color="grey"
          style={{marginHorizontal: 15}}
        />
      ) : (
        <></>
      )}
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      />
      {rightIconName ? (
        <TouchableOpacity onPress={onPressFunc}>
          <IconAD
            name={rightIconName}
            size={27}
            color="grey"
            style={{marginHorizontal: 15}}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: '#333030',
    marginVertical: 15,
    borderRadius: 20,
    paddingVertical: 10,
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'white',
  },

  icon: {
    width: 20,
    resizeMode: 'contain',
    tintColor: 'grey',
    marginHorizontal: 15,
  },
});
