import React from "react";
import { StyleSheet, View } from "react-native";
import { AgEnum, Text } from "../../components/ui/Text";

export const AuthScreen = () => {
  return (
    <View>
      <Text align={"center"} style={styles.title} Ag={AgEnum.H1}>
        Instagram
      </Text>
    </View>
  );
};


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1
  },
  title: {
    marginTop: 64
  }

});
