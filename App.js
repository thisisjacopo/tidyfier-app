//* IMPORTS
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./app/screens/LandingScreen";
import Signup from "./app/screens/Signup";
import SignupProvider from "./app/context/SignupContext";

//* VARIABLES
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SignupProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </SignupProvider>
  );
}
