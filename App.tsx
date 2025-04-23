import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useState } from "react";

export default function App() {
  let [fontsLoaded] = useFonts({
    poppins_regular: Poppins_400Regular,
    poppins_bold: Poppins_700Bold,
  });

  // Get current time in England (London)
  const englandTime = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
  });

  // Get date: Day, Month, Year
  const englandDate = new Date().toLocaleDateString("en-GB", {
    timeZone: "Europe/London",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [viewMore, setViewMore] = useState(false);
  const [refresh, setRefresh] = useState(false);

  if (!fontsLoaded) return <ActivityIndicator></ActivityIndicator>;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("./assets/wallpaper.jpg")}
        style={styles.bgImage}
      >
        {/* upper view */}
        <View style={viewMore ? styles.upperViewViewMore : styles.upperView}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>England</Text>
            <Pressable onPress={() => setRefresh(!refresh)}>
              <Ionicons name="reload" size={36} color="white" />
            </Pressable>
          </View>
          {!viewMore && (
            <Text style={styles.upperViewText}>
              England, part of the United Kingdom, is rich in history, culture,
              and innovation. Home to landmarks like the Tower of London and
              Stonehenge, it birthed Shakespeare and The Beatles. Its capital,
              London, is a global hub for finance, arts, and politics. England
              blends medieval charm with modern energy, offering a unique mix of
              tradition and progress.
            </Text>
          )}
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => setViewMore(!viewMore)}
          >
            <Text style={styles.btnText}>{viewMore ? "Less" : "More"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lowerView}>
          <Text style={styles.time}>{englandTime}</Text>
          <Text style={styles.date}>{englandDate}</Text>
          <View style={styles.hr}></View>
          {viewMore && (
            <View>
              <Text style={styles.info}>Capital: London</Text>
              <Text style={styles.info}>Currency: Pound Sterling (GBP)</Text>
              <Text style={styles.info}>Area: ~130,279 square kilometers</Text>
              <Text style={styles.info}>Latitude: Approx. 52.3555° N</Text>
              <Text style={styles.info}>Longitude: Approx. 1.1743° W</Text>
              <Text style={styles.info}>
                National Anthem: God Save the King (shared with the UK)
              </Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  upperView: {
    height: "50%",
    marginHorizontal: 20,
    marginTop: 50,
  },
  upperViewViewMore: {
    flex: 0,
    marginHorizontal: 20,
    marginTop: 50,
  },
  upperViewText: {
    fontSize: 16,
    fontFamily: "poppins_regular",
    color: "white",
    textAlign: "justify",
  },
  lowerView: {
    flex: 1,
  },
  time: {
    color: "white",
    fontSize: 64,
    marginLeft: 20,
  },
  date: {
    color: "white",
    fontSize: 24,
    marginLeft: 20,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    height: 60,
  },
  headingText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  info: {
    color: "white",
    paddingVertical: 5,
    marginHorizontal: 20,
  },
  hr: {
    width: "90%",
    height: 5,
    backgroundColor: "white",
    marginHorizontal: "5%",
    marginVertical: 10,
  },
  btn: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "white",
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
  },
});
