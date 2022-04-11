import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors/colors';

const DefaultLabel = (props) => {
  return (
    <Text
      key={props.key}
      style={{ ...styles.textContainer, ...props.style }}
      allowFontScaling={false}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 15,
    color: colors.absoluteZeroBlue,
  },
});

export default DefaultLabel;