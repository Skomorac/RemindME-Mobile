import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasMinLength: false,
  });
  const [emailValid, setEmailValid] = useState(true);
  const navigation = useNavigation();

  const validatePassword = (password) => {
    setPasswordValid({
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasMinLength: password.length >= 8,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  const handleSignup = () => {
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!emailValid) {
      alert("Invalid email format");
      return;
    }
    // Add signup logic here
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formSection}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            placeholder="Email Address"
            style={[styles.input, emailValid ? null : { borderColor: "red" }]}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              validateEmail(text);
            }}
          />
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              validatePassword(text);
            }}
          />
          <TextInput
            placeholder="Repeat Password"
            style={styles.input}
            secureTextEntry
            value={repeatPassword}
            onChangeText={(text) => setRepeatPassword(text)}
          />
          <View style={styles.passwordRequirements}>
            <Text
              style={passwordValid.hasUpperCase ? styles.valid : styles.invalid}
            >
              At least one uppercase letter
            </Text>
            <Text
              style={passwordValid.hasLowerCase ? styles.valid : styles.invalid}
            >
              At least one lowercase letter
            </Text>
            <Text
              style={passwordValid.hasNumber ? styles.valid : styles.invalid}
            >
              At least one number
            </Text>
            <Text
              style={
                passwordValid.hasSpecialChar ? styles.valid : styles.invalid
              }
            >
              At least one special character
            </Text>
            <Text
              style={passwordValid.hasMinLength ? styles.valid : styles.invalid}
            >
              At least 8 characters
            </Text>
          </View>
          <Button
            title="Sign Up"
            onPress={handleSignup}
            color="#5A20E3"
            disabled={
              !passwordValid.hasUpperCase ||
              !passwordValid.hasLowerCase ||
              !passwordValid.hasNumber ||
              !passwordValid.hasSpecialChar ||
              !passwordValid.hasMinLength ||
              !emailValid
            }
          />
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already a user?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginButton}>Login here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343a40",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formSection: {
    width: "100%",
    backgroundColor: "#343a40",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  passwordRequirements: {
    marginBottom: 20,
    alignItems: "flex-start",
  },
  valid: {
    color: "green",
  },
  invalid: {
    color: "red",
  },
  loginContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
    color: "#6c757d",
  },
  loginButton: {
    fontSize: 16,
    color: "#ffffff",
    marginLeft: 5,
  },
});

export default SignupScreen;
