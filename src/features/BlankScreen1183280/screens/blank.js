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
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Text style={styles.Text_3}>This is screen 1</Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen0183279")}
      >
        <Text>Select this text to go to screen 0</Text>
      </TouchableOpacity>
      <Text>Select below button to show an alert</Text>
      <Button
        title="Shows an alert"
        color="#b39eff"
        onPress={() => alert("Custom message!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_3: {
    fontSize: 32,
    color: "#22dd41",
    fontFamily: "PlayfairDisplay-BoldItalic",
    lineHeight: 32
  },
  Text_4: {},
  Text_5: {},
  Button_7: {}
})
