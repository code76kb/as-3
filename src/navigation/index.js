import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GenTabScreen from '../screens/GenTabScreen';

const Tab = createMaterialTopTabNavigator();
 
function Tabs() {
  return (
    <Tab.Navigator
    initialRouteName="best_offer"
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12,},
      tabBarItemStyle:{width:'auto'},
      tabBarIndicatorStyle:{backgroundColor:'orange',},
      tabBarStyle: { backgroundColor: 'white',},
      tabBarScrollEnabled:true,
      tabBarBounces:true
    }}>
      <Tab.Screen name="best_offer" component={GenTabScreen}  options={{ tabBarLabel: 'Best Offer for You' }} />
      <Tab.Screen name="popular" component={GenTabScreen}  options={{ tabBarLabel: 'Popular' }} />
      <Tab.Screen name="special_recharge" component={GenTabScreen} options={{ tabBarLabel: 'Special Recharge' }}/>
      <Tab.Screen name="top_recharge" component={GenTabScreen} options={{ tabBarLabel: 'Top Recharge' }}/>
    </Tab.Navigator>
  );
}

export  function TabNav(){
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}