import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetailScreen = ({ title, imageSource, score }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imageSource} />
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetailScreen;
