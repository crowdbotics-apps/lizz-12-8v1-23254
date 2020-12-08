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
      <Text style={styles.Text_3}>This is screen 0</Text>
      <Button
        title="Press to go to screen 1"
        color="#ffc2f4"
        onPress={() => this.props.navigation.navigate("BlankScreen1183280")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_3: { fontSize: 24, color: "#4d6aff" },
  Button_5: {}
})
