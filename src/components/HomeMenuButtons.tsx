import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  imageSrc:any;
};
const HomeMenuButtons: React.FC<Props> = ({title, onPress, imageSrc}) => {

  return (
    <TouchableOpacity style={styles.menuBox} onPress={onPress}>
        <Image
            style={styles.menuIcon}
            source={imageSrc}></Image>
      <Text style={styles.menuBoxText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HomeMenuButtons;

const styles = StyleSheet.create({
  menuBox: {
    aspectRatio: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuBoxText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },

  menuIcon: {
    width: 120,
    height: 120,
    marginVertical:20
  },
});
