import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screens } from "../screens/Screens";
import { HomeScreen } from "../../screens/main/HomeScreen";
import { SearchScreen } from "../../screens/main/SearchScreen";
import { IconSvgBottomHome } from "../../assets/bottomTab/IconSvgBottomHome";
import { IconSvgBottomSearch } from "../../assets/bottomTab/IconSvgBottomSearch";
import { IconSvgBottomHomeActive } from "../../assets/bottomTab/IconSvgBottomHomeActive";
import { IconSvgBottomReels } from "../../assets/bottomTab/IconSvgBottomReels";
import { IconSvgBottomShop } from "../../assets/bottomTab/IconSvgBottomShop";
import { IconSvgFavourite } from "../../assets/icons/IconSvgFavourite";
import { ReelsScreen } from "../../screens/main/ReelsScreen";
import { NotificationScreen } from "../../screens/main/NotificationScreen";
import { ProfileScreen } from "../../screens/main/ProfileScreen";

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
        component={ReelsScreen}
        options={{
          tabBarIcon: ({}) => {
            return <IconSvgBottomReels/>
          }
        }}
      />
      <Tab.Screen
        name={Screens.NOTIFICATION}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({}) => {
            return <IconSvgFavourite/>
          }
        }}
      />
      <Tab.Screen
        name={Screens.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({}) => {
            return <IconSvgBottomSearch/>
          }
        }}
      />
    </Tab.Navigator>

  );
};
