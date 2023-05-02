import React from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { DataHelper } from "../../helpers/DataHelper";

export const SearchScreen = () => {


  return (
    <ScrollView>
      <View style={styles.flexRow}>
        <View style={styles.topLeftContainer}>
          {[...Array(4)].map((_, index) => (
            <TouchableOpacity key={index}>
              <Image style={styles.smallImage} source={{ uri: "https://www.w3schools.com/howto/img_avatar2.png" }} />
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <Image style={styles.highImage} source={{ uri: "https://www.w3schools.com/howto/img_avatar2.png" }} />
        </View>
      </View>
      <View style={styles.centerContainer}>
        {[...Array(6)].map((_, index) => (
          <TouchableOpacity key={index}>
            <Image style={styles.smallImage}
                   source={{ uri: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" }} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.flexRow}>
        <View style={styles.bottomLeft}>
          <Image style={styles.bigImage}
                 source={{ uri: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" }} />
        </View>
        <View style={styles.bottomRight}>
          {[...Array(2)].map((_, index) => (
            <TouchableOpacity key={index}>
              <Image style={styles.smallImage}
                     source={{ uri: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" }} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "center"
  },
  smallImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.33,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003
  },
  topLeftContainer: {
    width: DataHelper.getWidth() * 0.667,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  highImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.66,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003
  },
  bigImage: {
    width: DataHelper.getWidth() * 0.663,
    height: DataHelper.getWidth() * 0.663,
    marginTop: DataHelper.getWidth() * 0.003,
    marginRight: DataHelper.getWidth() * 0.003
  },
  centerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  bottomLeft: {
    width: DataHelper.getWidth() * 0.66,
    height: DataHelper.getWidth() * 0.66,
    marginRight: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.006
  },
  bottomRight: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
});
