import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Permissions() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 50, padding: 20, alignItems: "center" }}>
        <TouchableOpacity>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "center" }}
          >
            <MaterialIcons name="phone-android" size={44} color="#00A79B" />{" "}
            <Text style={{ fontWeight: 500, fontSize: 18 }}>
              we need the following{" "}
            </Text>
            <Text style={{ fontWeight: 500, fontSize: 18 }}>
              {" "}
              Permissions to serve you better
            </Text>
          </View>
        </TouchableOpacity>
        {/* location */}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 10,
              marginBottom: 8,
              marginTop: 25,
            }}
          >
            <EvilIcons name="location" size={34} color="#00A79B" />
            <Text style={{ fontWeight: 500, fontSize: 20 }}>Location</Text>
          </View>
          <Text>we need this permission to find</Text>
          <Text>surface location and allocate orders</Text>
        </View>

        {/* camera */}
        <TouchableOpacity>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 10,
                flexShrink: 1,
                marginTop: 25,
              }}
            >
              <FontAwesome6 name="camera" size={24} color="#00A79B" />
              <Text style={{ fontWeight: 500, fontSize: 20 }}>Camera</Text>
            </View>
            <Text>We need this permission to scan </Text>
            <Text>QR codes and take pictures</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          padding: 10,
          borderRadius: 30,
          backgroundColor: "#00A79B",
          width: 300,
          height: 40,
          color: "white",
          textAlign: "center",
        }}
      >
        Let's get started
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
