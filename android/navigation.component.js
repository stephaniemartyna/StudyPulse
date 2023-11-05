import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddEvent from './add-event';
import Calendar from './calender';
import Schedule from './schedule';
import Tasks from './tasks';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';



const { Navigator, Screen } = createBottomTabNavigator();


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      title="Calendar"
      icon={props => <Icon {...props} name="calendar-outline" />}
    />
      <BottomNavigationTab
      title="Add Event"
      icon={props => <Icon {...props} name="plus-outline" />}
    />
    <BottomNavigationTab
      title="Schedule"
      icon={props => <Icon {...props} name="clock-outline" />}
    />
    <BottomNavigationTab
      title="Tasks"
      icon={props => <Icon {...props} name="edit-2-outline" />}
    />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}>
    <Screen name="Calendar" component={Calendar} />
    <Screen name="Add Event" component={AddEvent} />
    <Screen name="Schedule" component={Schedule} />
    <Screen name="Tasks" component={Tasks} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
