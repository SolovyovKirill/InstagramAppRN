import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { AgEnum, Text } from "./ui/Text";
import { IconSvgMore } from "../assets/icons/IconSvgMore";
import { IconSvgComment } from "../assets/icons/IconSvgComment";
import { IconSvgFavourite } from "../assets/icons/IconSvgFavourite";
import { IconSvgShare } from "../assets/icons/IconSvgShare";
import { IconSvgBookmark } from "../assets/icons/IconSvgBookmark";

export const PostCard = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <Image style={styles.avatar}
                 source={{ uri: "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60" }} />
          <Text style={{ marginLeft: 9 }} Ag={AgEnum.SUBTITLE}>salauyou_kiryl</Text>
        </View>
        <TouchableOpacity>
          <IconSvgMore />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image}
               source={{ uri: "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60" }} />
      </View>

      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <IconSvgFavourite />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 14 }}>
            <IconSvgComment />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 11 }}>
            <IconSvgShare />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <IconSvgBookmark />
        </TouchableOpacity>
      </View>
      <Text style={{ marginLeft: 12 }} Ag={AgEnum.SUBTITLE_STRONG}>
        100 Likes
      </Text>

      <View>
        <Text numberOfLines={2} style={{marginLeft: 12}} Ag={AgEnum.SUBTITLE}>
          <Text Ag={AgEnum.SUBTITLE_STRONG}>
            salauyou_kiryl{" "}
          </Text>
          Hello everyone! Hello everyone! Hello everyone! Hello everyone! Hello everyone! Hello everyone! Hello everyone!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 9
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2
  },
  imageContainer: {},
  image: {
    width: "100%",
    height: 375
  }
});
