import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const VerifyAadhar = () => {
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
            fontWeight: 500,
            marginTop: 35,
          }}
        >
          Verify Aadhar with OTP
        </Text>
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 5 }}>
          usually takes 2 minutes
        </Text>

        <Text style={{ fontSize: 14, fontWeight: 400, marginTop: 15 }}>
          Enter your aadhar number
        </Text>

        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "green",
            backgroundColor: "#00A79B1A",
            marginTop: 10,
            borderRadius: 8,
            width: 280,
            height: 40,
            padding: 6,
            fontSize: 18,
          }}
          placeholder="XXXX XXXX XXXX"
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
            }}
          >
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default VerifyAadhar;
