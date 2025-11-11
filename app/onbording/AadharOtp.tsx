import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AadharOtp = () => {
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
          <Text style={{ fontWeight: 400, fontSize: 24 }}>
            Operations Onboarding
          </Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 400,
            marginTop: 20,
          }}
        >
          Enter OTP
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 300 }}>
          OTP sent to your aadhar
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 300 }}>
          mobile number
        </Text>

        <Text
          style={{
            marginTop: 30,
            fontSize: 16,
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          234456778944
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: "#00A79B",
            textAlign: "center",
          }}
        >
          Edit Aadhar Number
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
        <Text style={{ marginTop: 30 }}>
          Wait for 60 seconds to{" "}
          <Text style={{ color: "#00A79B" }}>Resend OTP</Text>
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
              backgroundColor: "#00A79B1A",
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

export default AadharOtp;
