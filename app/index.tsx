import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

const properties = [
  {
    id: '1',
    title: '4bhk house',
    city: 'Gorakhpur',

    price: '₹30 L',
  },
  {
    id: '2',
    title: '3bhk apartment',
    city: 'Delhi',
    price: '₹75 L',
  },
  {
    id: '3',
    title: '5bhk penthouse',
    city: 'Bangalore',
    price: '₹99 L',
  },
  {
    id: '4',
    title: '2bhk apartment',
    city: 'Hyderabad',
    price: '₹60 L',
  },
  {
    id: '5',
    title: '3bhk villa',
    city: 'Kolkata',
    price: '₹85 L',
  },
]

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 16 }}>
        <Text>Subscribe to RoadsideCoder</Text>
        <TextInput placeholder="Search city..." placeholderTextColor={"#999"} style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 8,
          padding: 10,

          marginTop: 12
        }}>

        </TextInput>
        <TouchableOpacity
          onPress={() => { alert("searching...") }}
          style={{
            backgroundColor: "#2563EB",
            padding: 12,
            borderRadius: 8,
            marginTop: 10,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={{ padding: 16 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.title}</Text>
            <Text style={{ color: "#666" }}>{item.city}</Text>
            <Text style={{ color: "#2563EB" }}>{item.price}</Text>
          </View>
        )} />
    </SafeAreaView>
  );
}
