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
      <View style={styles.View_1_3} />
      <View style={styles.View_1_4}>
        <View style={styles.View_1_5}>
          <Text style={styles.Text_1_5}>Fonts</Text>
        </View>
        <View style={styles.View_1_6}>
          <Text style={styles.Text_1_6}>Aa</Text>
        </View>
        <View style={styles.View_1_7}>
          <Text style={styles.Text_1_7}>Lato</Text>
        </View>
        <View style={styles.View_1_8}>
          <View style={styles.View_1_9}>
            <Text style={styles.Text_1_9}>ExtraBold</Text>
          </View>
          <View style={styles.View_1_10}>
            <Text style={styles.Text_1_10}>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_1_11}>
          <View style={styles.View_1_12}>
            <Text style={styles.Text_1_12}>Bold</Text>
          </View>
          <View style={styles.View_1_13}>
            <Text style={styles.Text_1_13}>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_1_14}>
          <View style={styles.View_1_15}>
            <Text style={styles.Text_1_15}>SemiBold</Text>
          </View>
          <View style={styles.View_1_16}>
            <Text style={styles.Text_1_16}>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_1_17}>
          <View style={styles.View_1_18}>
            <Text style={styles.Text_1_18}>Medium</Text>
          </View>
          <View style={styles.View_1_19}>
            <Text style={styles.Text_1_19}>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_1_20}>
          <View style={styles.View_1_21}>
            <Text style={styles.Text_1_21}>Regular</Text>
          </View>
          <View style={styles.View_1_22}>
            <Text style={styles.Text_1_22}>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_23}>
        <View style={styles.View_1_24}>
          <Text style={styles.Text_1_24}>Colors</Text>
        </View>
        <View style={styles.View_1_25}>
          <Text style={styles.Text_1_25}>Primary</Text>
        </View>
        <View style={styles.View_1_26} />
        <View style={styles.View_1_27}>
          <Text style={styles.Text_1_27}>#192126</Text>
        </View>
        <View style={styles.View_1_28} />
        <View style={styles.View_1_29}>
          <Text style={styles.Text_1_29}>#BBF246</Text>
        </View>
        <View style={styles.View_1_30}>
          <Text style={styles.Text_1_30}>Secondary</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58b6cec5-f4b8-422b-ba76-4c2e7fd1d9f6"
          }}
          style={styles.ImageBackground_1_31}
        />
        <View style={styles.View_1_32}>
          <Text style={styles.Text_1_32}>#8B8F92</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e54f361-38a1-4fc7-963f-a8f5c38ab8d5"
          }}
          style={styles.ImageBackground_1_33}
        />
        <View style={styles.View_1_34}>
          <Text style={styles.Text_1_34}>#5E6468</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c67a1ed9-a8e9-493a-b5a6-aba2b8daba02"
          }}
          style={styles.ImageBackground_1_35}
        />
        <View style={styles.View_1_36}>
          <Text style={styles.Text_1_36}>#384046</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/725bc580-fffb-4ca7-94c0-b3cbcb7425cf"
          }}
          style={styles.ImageBackground_1_37}
        />
        <View style={styles.View_1_40}>
          <Text style={styles.Text_1_40}>#A48AED</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b7e2779-4a57-46f0-8bcd-001cf30fb5da"
          }}
          style={styles.ImageBackground_1_41}
        />
        <View style={styles.View_1_44}>
          <Text style={styles.Text_1_44}>#ED4747</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9e6555a-40fc-4031-8a41-dd684006327a"
          }}
          style={styles.ImageBackground_1_45}
        />
        <View style={styles.View_1_48}>
          <Text style={styles.Text_1_48}>#FCC46F</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/978390b7-d486-469f-ad08-36811f16415f"
          }}
          style={styles.ImageBackground_1_49}
        />
        <View style={styles.View_1_52}>
          <Text style={styles.Text_1_52}>#95CCE3</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("164%") },
  View_1_3: {
    width: wp("100%"),
    height: hp("164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_4: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%")
  },
  View_1_5: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_5: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 48,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4,
    textTransform: "capitalize"
  },
  View_1_6: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_6: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 96,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 4.8,
    textTransform: "none"
  },
  View_1_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_1_7: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_8: {
    width: wp("42%"),
    height: hp("13%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_9: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_9: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_10: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_10: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_11: {
    width: wp("42%"),
    height: hp("13%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_12: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_12: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_13: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_13: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_14: {
    width: wp("40%"),
    height: hp("13%"),
    top: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_15: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_15: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_16: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_16: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_17: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107%")
  },
  View_1_18: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_18: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_19: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_19: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_20: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("128%")
  },
  View_1_21: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_21: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_22: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_22: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_1_23: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("128%"),
    minHeight: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("9%")
  },
  View_1_24: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_24: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 48,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.4,
    textTransform: "capitalize"
  },
  View_1_25: {
    width: wp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_25: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.6,
    textTransform: "uppercase"
  },
  View_1_26: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(25, 33, 38, 1)"
  },
  View_1_27: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_1_27: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_28: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("28%"),
    backgroundColor: "rgba(187, 242, 70, 1)"
  },
  View_1_29: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_1_29: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1_30: {
    width: wp("9%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_30: {
    color: "rgba(25, 33, 38, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2.6,
    textTransform: "uppercase"
  },
  ImageBackground_1_31: {
    width: wp("7%"),
    height: hp("15%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_32: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_1_32: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_33: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("76%")
  },
  View_1_34: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_1_34: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_35: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("76%")
  },
  View_1_36: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_1_36: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_37: {
    width: wp("7%"),
    height: hp("19%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_40: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("124%"),
    justifyContent: "flex-start"
  },
  Text_1_40: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_41: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("103%")
  },
  View_1_44: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("124%"),
    justifyContent: "flex-start"
  },
  Text_1_44: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_45: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("103%")
  },
  View_1_48: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("124%"),
    justifyContent: "flex-start"
  },
  Text_1_48: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_49: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("103%")
  },
  View_1_52: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("124%"),
    justifyContent: "flex-start"
  },
  Text_1_52: {
    color: "rgba(22, 30, 41, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
