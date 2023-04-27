import React from "react";
import { IconSvgLogo } from "../assets/icons/IconSvgLogo";
import { IconSvgPlus } from "../assets/icons/IconSvgPlus";
import { IconSvgFavourite } from "../assets/icons/IconSvgFavourite";
import { IconSvgMessenger } from "../assets/icons/IconSvgMessenger";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AgEnum, Text } from "../components/ui/Text";
import { TextHelper } from "../helpers/TextHelper";
import { PostCard } from "../components/PostCard";

export const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <IconSvgLogo />
        <View style={styles.topContainerIcons}>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <IconSvgPlus />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <IconSvgFavourite />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <IconSvgMessenger />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <ScrollView style={{ marginTop: 12 }} horizontal={true} showsHorizontalScrollIndicator={false}>
          {[...Array(10)].map((_, index) => (
            <View style={[styles.historyItemContainer, index === 0 && { marginLeft: 8 }]} key={index}>
              <TouchableOpacity style={styles.historyItem}>
                <Image style={styles.history}
                       source={{ uri: "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png" }} />
              </TouchableOpacity>
              <Text Ag={AgEnum.SUBTITLE}>{TextHelper.getUserHistoryName("salauyou_kiryl") + ".."}</Text>
            </View>
          ))}
        </ScrollView>
        {[...Array(10)].map((_, index) => (
          <PostCard key={index} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 6
  },
  topContainerIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  history: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    borderWidth: 3,
    borderColor: "white"
  },
  historyItem: {
    height: 66,
    width: 66,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "red"
  },
  historyItemContainer: {
    marginRight: 16
  }

});
