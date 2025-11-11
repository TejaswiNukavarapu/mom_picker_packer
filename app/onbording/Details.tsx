import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Details = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const genders = ["Male", "Female", "Other"];

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
            fontSize: 20,
            fontWeight: 400,
            marginTop: 35,
          }}
        >
          Add your details
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

        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ marginTop: 30, fontWeight: 400, textAlign: "center" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 100,
              }}
            >
              <Text> select yoyr Gender</Text>

              {/* <Text style={{color:"#00A79B" ,padding:8,borderWidth:2,borderRadius:8,borderColor:"#00A79B"}}>Male</Text> */}

              <FlatList
                data={genders}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => setSelectedGender(item)}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingVertical: 12,
                      borderBottomWidth: 1,
                      borderColor: "#ddd",
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{item}</Text>
                    {/* Show tick only if selected */}
                    {selectedGender === item ? (
                      <Text style={{ fontSize: 18, color: "green" }}>✓</Text>
                    ) : (
                      <Text> </Text>
                    )}
                  </TouchableOpacity>
                )}
              />
            </View>
          </Text>
          <Text></Text>
        </View>
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

export default Details;
