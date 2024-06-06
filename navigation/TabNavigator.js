import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons"; // Import the Icon component

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Dashboard") {
            iconName = "grid";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#343a40" },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#6c757d",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5A20E3" },
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerStyle: { backgroundColor: "#5A20E3" },
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: { backgroundColor: "#5A20E3" },
          headerTintColor: "#ffffff",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
