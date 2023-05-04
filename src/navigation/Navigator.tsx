import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./stack/MainStack";
import { AuthStack } from "./stack/AuthStack";

export const Navigator = () => {

  const isAuth = false;

  return (
    <NavigationContainer>
      {isAuth ? <MainStack /> : <AuthStack />}

    </NavigationContainer>
  );
};
