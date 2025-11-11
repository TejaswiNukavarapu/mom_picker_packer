import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Operations = () => {
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
          <Text style={{ color: "#00A79B", fontSize: 38, fontWeight: 500 }}>
            mompharmacy
          </Text>
          <Text style={{ fontWeight: 500, fontSize: 24 }}>
            Operations Onboarding
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            marginTop: 20,
          }}
        >
          Let's get started
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Log In or Sign Up
        </Text>
        <Text style={{ marginTop: 30, fontSize: 16, fontWeight: 400 }}>
          Enter your valid 10 digit mobile number
        </Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "green",
            backgroundColor: "#00A79B1A",
            marginTop: 30,
            borderRadius: 8,
            width: 280,
            height: 40,
            padding: 6,
            fontSize: 18,
          }}
          placeholder="+91 X X X X X X X X X X"
        />
      </View>
      <View>
        <Text>
          By clicking ,I accept the{" "}
          <text style={{ color: "#00A79B", textDecorationLine: "underline" }}>
            terms of services
          </text>{" "}
          and{" "}
        </Text>
        <Text style={{ color: "#00A79B", textDecorationLine: "underline" }}>
          privacy policy
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "white",
              padding: 10,
              textAlign: "center",
              borderRadius: 30,
              backgroundColor: "#00A79B",
              width: 300,
              height: 40,
              marginTop: 10,
            }}
          >
            Get
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Operations;
