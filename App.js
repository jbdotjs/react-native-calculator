import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";

import tailwind from "tailwind-rn";
import Digit from "./components/Digit";
import TopSection from "./components/TopSection";

export default function App() {
  const baseDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const specialDigits = [".", "+/-"];
  const topOperations = ["C", "÷", "x"];
  const rightSideDigits = ["<--", "-", "+", "( )", "="];

  const [paranCount, setParanCount] = useState(0);

  const [selectedDigits, setSelectedDigits] = useState("");

  return (
    <View style={tailwind("py-10 bg-red-200")}>
      <View
        style={tailwind(
          "w-full flex flex-col items-center h-full justify-start"
        )}
      >
        <TopSection selectedDigits={selectedDigits} />
        <View style={tailwind("flex flex-row")}>
          <View
            style={[
              tailwind(
                "flex w-2/3 items-center justify-center flex-row flex-wrap"
              ),
            ]}
          >
            {topOperations.map((digit, index) => (
              <Digit
                paranCount={paranCount}
                setParanCount={setParanCount}
                bg="bg-purple-100"
                textColor="text-indigo-300"
                darker={true}
                setSelectedDigits={setSelectedDigits}
                selectedDigits={selectedDigits}
                key={index}
                dark={true}
                digit={digit}
              />
            ))}
            {baseDigits.map((digit, index) => (
              <Digit
                paranCount={paranCount}
                setParanCount={setParanCount}
                bg="bg-pink-100"
                textColor="text-red-200"
                darker={false}
                setSelectedDigits={setSelectedDigits}
                selectedDigits={selectedDigits}
                key={index}
                dark={true}
                digit={digit}
              />
            ))}
            {specialDigits.map((digit, index) => (
              <Digit
                paranCount={paranCount}
                setParanCount={setParanCount}
                bg="bg-pink-50"
                textColor="text-red-200"
                darker={false}
                setSelectedDigits={setSelectedDigits}
                selectedDigits={selectedDigits}
                key={index}
                dark={true}
                digit={digit}
              />
            ))}
          </View>
          <View>
            {rightSideDigits.map((digit, index) => (
              <Digit
                paranCount={paranCount}
                setParanCount={setParanCount}
                bg="bg-indigo-100"
                textColor="text-indigo-300"
                setSelectedDigits={setSelectedDigits}
                selectedDigits={selectedDigits}
                key={index}
                dark={true}
                digit={digit}
              />
            ))}
          </View>
        </View>
        {/* <View></View> */}
      </View>

      {/* <FlatList
        data={goals}
        renderItem={itemData => (
          <View style={tailwind('p-2 border-2 w-1/2 my-1 border-green-100')}>
            <Text style={tailwind('')}>{itemData.item.value}</Text>
          </View>
        )}
        keyExtractor={(item,index)=>item.id}
      /> */}
      {/* <ScrollView contentContainerStyle={tailwind('items-center')} style={tailwind('w-full')}>
        {goals.map((goal, index) => (
          <View key={index} style={tailwind('p-2 border-2 w-1/2 my-1 border-green-100')}>
            <Text style={tailwind('')}>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 50,
//     flex: 1,
//     backgroundColor: '#ccc',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// });
