import React from "react";
import { IconSvgLogo } from "../../assets/icons/IconSvgLogo";
import { IconSvgPlus } from "../../assets/icons/IconSvgPlus";
import { IconSvgFavourite } from "../../assets/icons/IconSvgFavourite";
import { IconSvgMessenger } from "../../assets/icons/IconSvgMessenger";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AgEnum, Text } from "../../components/ui/Text";
import { TextHelper } from "../../helpers/TextHelper";
import { PostCard } from "../../components/PostCard";
import { HistoryData } from "../../modules/history/HistoryData";
import { Colors } from "../../styles/Colors";
import { HistoryHelper } from "../../helpers/HistoryHelper";
import { IHistory } from "../../types/HistoryTypes";

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
          {HistoryHelper.getHistory(HistoryData).map((item: IHistory, index) => (
            <View style={[styles.historyItemContainer, index === 0 && { marginLeft: 8 }]} key={item.id}>
              <TouchableOpacity
                style={[styles.historyItem, item.active ? styles.historyItemActive : styles.historyItemNotActive]}>
                <Image style={styles.history}
                       source={{ uri: item.avatar }} />
              </TouchableOpacity>
              <Text Ag={AgEnum.SUBTITLE}>{TextHelper.getUserHistoryName(item.name) + ".."}</Text>
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
  historyItemContainer: {
    marginRight: 16
  },
  historyItem: {
    height: 66,
    width: 66,
    borderRadius: 60,
    borderWidth: 3
  },
  historyItemActive: {
    borderColor: Colors.red
  },
  historyItemNotActive: {
    borderColor: Colors.gray
  }
});
