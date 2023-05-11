import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AgEnum, Text } from "../../components/ui/Text";
import { Input } from "../../components/ui/Input";
import { Colors } from "../../styles/Colors";
import { Button } from "../../components/ui/Button";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

enum EAuthForm {
  USERNAME = "username",
  PASSWORD = "password"
}

export const AuthScreen = () => {
  const { watch, setValue, register, formState: { errors }, handleSubmit } = useForm();

  const handleChange = (value: string, name: string) => {
    setValue(name, value);
  };

  const saveUserToken = async (token: string) => {
    try {
      console.log('Save 123')
      await AsyncStorage.setItem("@token", token);
    } catch (e) {
      console.log('Error', e)
    }
  };

  const sendData = (data: any) => {
    if (data.password.length > 5) {
      saveUserToken("TOKENASDASD");
    }
  };

  useEffect(() => {
    register(EAuthForm.USERNAME, { required: true });
    register(EAuthForm.PASSWORD, { required: true, minLength: 6 });
  }, []);


  return (
    <View style={styles.container}>
      <Text align={"center"} style={styles.title} Ag={AgEnum.H1}>
        Instagram
      </Text>
      <View style={{ marginTop: 32 }}>
        <Input value={watch(EAuthForm.USERNAME)}
               inputKey={EAuthForm.USERNAME}
               onChangeText={handleChange}
               error={""}
               placeholder={"username"}></Input>
        <Input value={watch(EAuthForm.PASSWORD)}
               inputKey={EAuthForm.PASSWORD}
               onChangeText={handleChange}
               error={""}
               placeholder={"password"}
               marginTop={0}></Input>

        <Button title={"Login"} onPress={
          handleSubmit(sendData)} />
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
