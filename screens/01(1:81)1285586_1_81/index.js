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
      <View style={styles.View_1_82} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/474c3a7c-f9cb-4208-84e6-5b09e6780c00"
        }}
        style={styles.ImageBackground_1_83}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/608a9383-c532-44ab-ad29-c331483eee00"
        }}
        style={styles.ImageBackground_1_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cae7d1d-201b-4b25-945e-7467f5e4c5fd"
        }}
        style={styles.ImageBackground_1_89}
      />
      <View style={styles.View_1_92}>
        <Text style={styles.Text_1_92}>www.nickelfox.com</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9acadd1e-3b72-4412-b8c4-90a29f5ad34f"
        }}
        style={styles.ImageBackground_1_93}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e496c19-86c7-4440-be51-557271a4484f"
        }}
        style={styles.ImageBackground_1_94}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3427bdf8-33d0-4d4f-8548-cc9bdde2fd2b"
        }}
        style={styles.ImageBackground_1_95}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("164%") },
  View_1_82: {
    width: wp("100%"),
    height: hp("164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(187, 242, 70, 1)"
  },
  ImageBackground_1_83: {
    width: wp("49%"),
    height: hp("107%"),
    top: hp("-47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18%")
  },
  ImageBackground_1_86: {
    width: wp("49%"),
    height: hp("107%"),
    top: hp("-15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_1_89: {
    width: wp("49%"),
    height: hp("107%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_1_92: {
    width: wp("16%"),
    top: hp("155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "center"
  },
  Text_1_92: {
    color: "rgba(25, 32, 38, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  ImageBackground_1_93: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("118%"),
    minHeight: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("33%"),
    resizeMode: "cover"
  },
  ImageBackground_1_94: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("118%"),
    minHeight: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  ImageBackground_1_95: {
    width: wp("25%"),
    height: hp("118%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
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
