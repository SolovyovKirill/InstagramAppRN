import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens } from "../screens/Screens";
import { HomeScreen } from "../../screens/HomeScreen";
import { SearchScreen } from "../../screens/SearchScreen";
import { IconSvgBottomHome } from "../../assets/bottomTab/IconSvgBottomHome";
import { IconSvgBottomSearch } from "../../assets/bottomTab/IconSvgBottomSearch";
import { IconSvgBottomHomeActive } from "../../assets/bottomTab/IconSvgBottomHomeActive";

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
              return focused ? <IconSvgBottomHomeActive/> : <IconSvgBottomHome/>
          }
        }}
      />
      <Tab.Screen
        name={Screens.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({}) => {
            return <IconSvgBottomSearch/>
          }
        }}
      />
      <Tab.Screen
        name={Screens.REELS}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <IconSvgBottomHomeActive/> : <IconSvgBottomHome/>
          }
        }}
      />
      <Tab.Screen
        name={Screens.NOTIFICATION}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <IconSvgBottomHomeActive/> : <IconSvgBottomHome/>
          }
        }}
      />
      <Tab.Screen
        name={Screens.PROFILE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? <IconSvgBottomHomeActive/> : <IconSvgBottomHome/>
          }
        }}
      />
    </Tab.Navigator>

  );
};
