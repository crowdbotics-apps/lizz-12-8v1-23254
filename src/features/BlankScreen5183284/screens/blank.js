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
      <Text>Sample text content</Text>
      <Image source={{ uri: "https://via.placeholder.com/150" }} />
      <View style={styles.View_8}>
        <View style={styles.View_9}>
          <Button
            title="Like"
            color="#ccd9ff"
            onPress={() => alert("Pressed!")}
          />
          <Text style={styles.Text_31}>Sample text content</Text>
        </View>
        <View style={styles.View_10}>
          <Button
            title="Like"
            color="#ccd9ff"
            onPress={() => alert("Pressed!")}
          />
        </View>
      </View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_3: {},
  Image_4: {},
  View_8: { width: "100%", flexDirection: "row" },
  View_9: {
    width: "50%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  Button_28: {},
  Text_31: {
    fontSize: 18,
    fontFamily: "Nunito-Regular",
    textTransform: "uppercase"
  },
  View_10: { width: "50%" },
  Button_29: {},
  Button_33: {}
})
