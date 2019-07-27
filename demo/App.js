/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation"

import Login from "./src/screens/Login"
import Home from "./src/screens/Home"
import WorkerSignup from "./src/screens/WorkerSignup"
import ScoreFactors from "./src/screens/ScoreFactors"
import Diagnosis from "./src/screens/Diagnosis"
import PendingLabs from "./src/screens/PendingLabs"
import PendingVisit from "./src/screens/PendingVisit"
import OpenCase from "./src/screens/OpenCase"
import CloseCase from "./src/screens/CloseCase"

const AppNavigator = createStackNavigator ({
  Login: {screen: Login},
  Home: {screen: Home},
  WorkerSignup: {screen: WorkerSignup},
  ScoreFactors: {screen: ScoreFactors},
  Diagnosis: {screen: Diagnosis},
  PendingLabs: {screen: PendingLabs},
  PendingVisit: {screen: PendingVisit},
  OpenCase: {screen: OpenCase},
  CloseCase: {screen: CloseCase},
  
}, {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,  // Set the animation duration time as 0 !!
      },
    }),
});
  
const AppNav = createAppContainer(AppNavigator);

export default AppNav;


