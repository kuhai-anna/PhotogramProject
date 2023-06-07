import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import bgdImage from "../image/bgd-photo.jpeg";

export const RegistrationScreen = () => {
  return (
    <View>
      <ImageBackground
        source={bgdImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={style.container}>
          <View style={style.form}>
            <View style={style.avatar}></View>
            <Text style={style.text}>Реєстрація</Text>
            <TextInput
              style={style.input}
              placeholder={"Логін"}
              placeholderTextColor={"#BDBDBD"}
            ></TextInput>
            <TextInput
              style={style.input}
              placeholder={"Адреса електронної пошти"}
              placeholderTextColor={"#BDBDBD"}
            ></TextInput>
            <TextInput
              style={style.input}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
            ></TextInput>
            <TouchableOpacity style={style.buttonSubmit}>
              <Text style={style.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Button title="Вже є акаунт? Увійти" color={"#1B4371"}></Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    // костиль
    top: "-14%",
    left: "38%",
    // transform: [{ translateX: -60 }, { translateY: 60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  form: {
    position: "relative",
    paddingTop: 92,
    width: "100%",
    height: 549,
    padding: 16,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    marginBottom: 32,
    fontSize: 40,
    fontWeight: 500,
    color: "#212121",
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
    padding: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontSize: 16,
  },
  buttonSubmit: {
    marginTop: 43,
    marginBottom: 16,
    height: 51,
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    borderColor: "#FF6C00",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
