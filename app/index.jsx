import { Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="my-3">Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity className="bg-red-500 px-6 py-3 rounded-md">
         <Text className="text-white">
            Click Me
         </Text>
      </TouchableOpacity>
    </View>
  );
}
