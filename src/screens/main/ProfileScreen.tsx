import React, { useEffect, useState } from "react";
import { AgEnum, Text } from "../../components/ui/Text";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../../styles/Colors";
import { Button } from "../../components/ui/Button";
import { DataHelper } from "../../helpers/DataHelper";
import { launchImageLibrary } from "react-native-image-picker";

interface IPhoto {
  uri: string;
}

const exAvatar = "https://pbs.twimg.com/profile_images/1498641868397191170/6qW2XkuI_400x400.png";

export const ProfileScreen = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const setPhoto = () => {
    const array = [...Array(6)].map((_) => ({ uri: exAvatar }));
    setPhotos(array);
  };

  const addPhoto = async () => {
    const result = await launchImageLibrary({ mediaType: "mixed" });

    if (result.assets) {
      const addedPhotos = result.assets?.map(i => ({ uri: i.uri! })) || [];
      setPhotos((prevState) => [...prevState, ...addedPhotos]);

      const formData = new FormData();

      const sendFileData = result.assets.map(item => ({
        type: item.type,
        name: item.fileName,
        uri: item.uri
      }));

      formData.append("file", sendFileData);
    }
  };

  useEffect(() => {
    setPhoto();
  }, []);

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ marginTop: 12 }} align={"center"} Ag={AgEnum.SUBTITLE}>kiryl_salauyou</Text>
        <TouchableOpacity
          style={[styles.historyItem, styles.historyItemNotActive]}>
          <Image style={styles.history}
                 source={{ uri: exAvatar }} />
        </TouchableOpacity>

        <Text Ag={AgEnum.SUBTITLE}>Developer</Text>

        <Button title={"Загрузить фото"} onPress={addPhoto} />

      </View>
      <View style={styles.photoContainer}>
        {photos?.map((item, index: number) => (
          <TouchableOpacity key={index}>
            <Image style={styles.smallImage}
                   source={{ uri: item.uri }} />
          </TouchableOpacity>
        ))}
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  history: {
    height: 96,
    width: 96,
    borderRadius: 96 / 2,
    borderWidth: 3,
    borderColor: "white"
  },
  historyItemContainer: {
    marginRight: 16
  },
  historyItem: {
    height: 96,
    width: 96,
    borderRadius: 96 / 2
    // borderWidth: 3
  },
  historyItemActive: {
    borderColor: Colors.red
  },
  historyItemNotActive: {
    borderColor: Colors.gray
  },
  smallImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.33,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003
  },
  photoContainer: {
    marginTop: 32,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
