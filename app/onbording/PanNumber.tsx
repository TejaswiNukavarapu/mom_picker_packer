import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const PanNumber = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <View>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "#00A79B",
              fontSize: 38,
              fontWeight: 500,
            }}
          >
            mompharmacy
          </Text>
          <Text style={{ fontWeight: 400, fontSize: 24, textAlign: "center" }}>
            Operations Onboarding
          </Text>
        </View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 400,
            marginTop: 34,
            textAlign: "center",
          }}
        >
          Enter your PAN Number
        </Text>

        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "green",
            backgroundColor: "#00A79B1A",
            marginTop: 25,
            borderRadius: 8,
            width: 300,
            height: 40,
            padding: 6,
            fontSize: 18,
          }}
          placeholder="X X X X X X X X X X"
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              color: "white",
              padding: 10,
              textAlign: "center",
              borderRadius: 30,
              backgroundColor: "#00A79B1A",
              width: 300,
              height: 40,
              marginTop: 10,
              fontSize: 16,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PanNumber;
