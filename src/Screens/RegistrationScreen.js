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
    <View style={styles.mainContainer}>
      <ImageBackground source={bgdImage} style={styles.bgdImage}>
        <View style={styles.container}>
          <View style={styles.form}>
            <View style={styles.avatar}>
              <TouchableOpacity></TouchableOpacity>
            </View>
            <Text style={styles.text}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              placeholder={"Логін"}
              placeholderTextColor={"#BDBDBD"}
            />
            <TextInput
              style={styles.input}
              placeholder={"Адреса електронної пошти"}
              placeholderTextColor={"#BDBDBD"}
            />
            <TextInput
              style={styles.input}
              placeholder={"Пароль"}
              placeholderTextColor={"#BDBDBD"}
            />
            <TouchableOpacity style={styles.buttonSubmit}>
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Button title="Вже є акаунт? Увійти" color={"#1B4371"}></Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: "center",
  },
  bgdImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  form: {
    // position: "relative",
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
