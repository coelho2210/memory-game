import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../constants/colors/colors";
import DefaultLabel from "../common/DefaultLabel";

const DefaultButton = (props) => {
  const handleDisableButtonStyle = props.disabled
    ? { ...styles.disabledButton }
    : { ...styles.button };

  return (
    <TouchableOpacity
      key={props.key}
      style={{ ...handleDisableButtonStyle, ...props.style }}
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={props.disabled}
    >
      <DefaultLabel style={{ ...styles.buttonText, ...props.textStyle }}>
        {props.children}
      </DefaultLabel>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabledButton: {
    width: "40%",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: colors.alabaster,
  },
  button: {
    width: "40%",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: colors.aeroBlue,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default DefaultButton;
