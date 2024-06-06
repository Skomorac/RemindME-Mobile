import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to RemindME</Text>
        <Text style={styles.heroSubtitle}>
          The best way to manage your tasks effortlessly.
        </Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Login")}
          color="#5A20E3"
        />
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About RemindME</Text>
        <Text style={styles.sectionDescription}>
          RemindME is a simple and effective tool for task management, designed
          to help you stay organized and on top of your tasks. Have you ever
          experienced your wife telling you to buy something and you forgot? I
          have, and that's why this app was created. Log your wife in with the
          same credentials and allow her to dynamically change the shopping
          list, and enjoy peace at home :)
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>Easy Task Management</Text>
          <Text style={styles.featureText}>
            Quickly add, edit, and delete tasks.
          </Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>Predefined Tasks</Text>
          <Text style={styles.featureText}>
            Use predefined tasks for common activities.
          </Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>Responsive Design</Text>
          <Text style={styles.featureText}>
            Access your tasks on any device.
          </Text>
        </View>
      </View>

      {/* Call-to-Action Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.sectionTitle}>
          You want to try, just register, it is free!!!
        </Text>
        <Button
          title="Sign Up Now"
          onPress={() => navigation.navigate("Signup")}
          color="#5A20E3"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#343a40",
  },
  heroSection: {
    marginBottom: 20,
    backgroundColor: "#343a40",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    borderColor: "#ffffff",
    borderWidth: 5,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
  aboutSection: {
    marginBottom: 20,
    backgroundColor: "#343a40",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    borderColor: "#ffffff",
    borderWidth: 5,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffffff",
  },
  sectionDescription: {
    fontSize: 16,
    color: "#6c757d",
  },
  featuresSection: {
    marginBottom: 20,
    backgroundColor: "#343a40",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    borderColor: "#ffffff",
    borderWidth: 5,
  },
  featureItem: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#adb5bd",
  },
  featureText: {
    fontSize: 16,
    color: "#6c757d",
  },
  ctaSection: {
    marginBottom: 20,
    backgroundColor: "#343a40",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    borderColor: "#ffffff",
    borderWidth: 5,
  },
});

export default HomeScreen;
