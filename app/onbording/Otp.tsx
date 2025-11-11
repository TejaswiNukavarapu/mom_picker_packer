import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Otp = () => {
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
            fontSize: 22,
            fontWeight: 400,
            marginTop: 35,
          }}
        >
          Enter OTP
        </Text>
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 10 }}>
          OTP sent to below mobile number
        </Text>

        <Text style={{ fontSize: 14, fontWeight: 400 }}>
          +91 7234586546{" "}
          <Text style={{ marginLeft: 20, color: "#00A79B", fontWeight: 500 }}>
            Edit Mobile Number
          </Text>
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
          placeholder="X X X X X X X X X X"
        />
        <Text style={{ marginTop: 30, fontWeight: 400, textAlign: "center" }}>
          Wait for 60 seconds to{" "}
          <Text style={{ color: "#00A79B", fontWeight: 500 }}>Resend OTP</Text>
        </Text>
      </View>
      <View>
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
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Otp;
