import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_97} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6de6ab3a-eed4-444a-8ae9-c503fbd6031a"
        }}
        style={styles.ImageBackground_1_98}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34e8f940-a186-43d2-aab7-df9d2473551e"
        }}
        style={styles.ImageBackground_1_102}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff865fab-d7ba-4dce-86df-7457e04a167a"
        }}
        style={styles.ImageBackground_1_103}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b12c8914-2189-47c1-b6b1-3570286d9b2e"
        }}
        style={styles.ImageBackground_1_104}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/197c251b-57a8-4b44-b1c3-9ea138e6c3c3"
        }}
        style={styles.ImageBackground_1_105}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3a2371f-2ce0-4d26-a896-8c4e0a3718bc"
        }}
        style={styles.ImageBackground_1_106}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("164%") },
  View_1_97: {
    width: wp("100%"),
    height: hp("164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(187, 242, 70, 1)"
  },
  ImageBackground_1_98: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("191%"),
    minHeight: hp("191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-21%")
  },
  ImageBackground_1_102: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("163%"),
    minHeight: hp("163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15%"),
    top: hp("-40%"),
    resizeMode: "cover"
  },
  ImageBackground_1_103: {
    width: wp("57%"),
    height: hp("163%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    resizeMode: "cover"
  },
  ImageBackground_1_104: {
    width: wp("57%"),
    height: hp("163%"),
    top: hp("-62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    resizeMode: "cover"
  },
  ImageBackground_1_105: {
    width: wp("57%"),
    height: hp("163%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    resizeMode: "cover"
  },
  ImageBackground_1_106: {
    width: wp("57%"),
    height: hp("163%"),
    top: hp("-57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
