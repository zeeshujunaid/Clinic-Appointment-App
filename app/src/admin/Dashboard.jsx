import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import baseurl from "../../../services/config";
import Header from "../../components/Header";
export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`${baseurl}/api/auth/getUser`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users || []);
      })
      .catch((error) => {
        console.log("FETCH ERROR:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ marginTop: 40 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Header />  
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        All Users
      </Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderBottomWidth: 1,
              borderColor: "#ccc",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.fullname}
            </Text>
            <Text>Email: {item.email}</Text>
            <Text>Role: {item.role}</Text>
          </View>
        )}
      />
    </View>
  );
}
