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
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/plant_lnFvaGo.jpg"
        }}
      />
      <View style={styles.View_6}>
        <View>
          <Button
            title="Like"
            color="#aeec3c"
            style={styles.Button_47}
            onPress={() => alert("Pressed!")}
          />
        </View>
        <View>
          <Button
            title="Like"
            color="#aeec3c"
            style={styles.Button_48}
            onPress={() => alert("Pressed!")}
          />
        </View>
      </View>
      <Text>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_4: {},
  Image_5: {},
  View_6: { width: "100%", flexDirection: "row" },
  View_7: {},
  Button_47: { fontSize: 22, fontFamily: "Montserrat-Regular" },
  View_8: {},
  Button_48: { fontSize: 22, fontFamily: "Montserrat-Regular" },
  Text_9: {}
})
