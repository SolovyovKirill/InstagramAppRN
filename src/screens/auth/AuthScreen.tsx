import React from "react";
import { StyleSheet, View } from "react-native";
import { AgEnum, Text } from "../../components/ui/Text";
import { Input } from "../../components/ui/Input";
import { Colors } from "../../styles/Colors";

export const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text align={"center"} style={styles.title} Ag={AgEnum.H1}>
        Instagram
      </Text>
      <View style={{marginTop: 32}}>
        <Input inputKey={''} error={''} placeholder={'username'}></Input>
        <Input inputKey={''} error={''} placeholder={'password'} marginTop={0}></Input>
      </View>
    </View>
  );
};


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: Colors.white
  },
  title: {
    marginTop: 64
  }

});
