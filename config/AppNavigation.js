import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Account from '../screens/Account';
import Feed from '../screens/Feed';
import Organizations from '../screens/Organizations';
import Organization from '../screens/Organization';

const header = (title = 'OrgHub', hideBoarder = false) => {
  return {
    headerBackTitle: null,
    headerTintColor: '#3EABEF',
    title,
    headerTitleStyle: {
      color: '#000',
      fontFamily: 'Roboto-Medium'
    },
    headerStyle: {
      borderBottomWidth: hideBoarder ? 0 : 1
    }
  }
}

const organizationsTab = StackNavigator({
  Organizations: {
    screen: Organizations,
    path: '/',
    navigationOptions: ({ navigation }) => (header()),
  },
  Organization: {
    screen: Organization,
    path: '/organization/:name',
    navigationOptions: ({ navigation }) => (header(`${navigation.state.params.name}`, true)),
  }
})

const feedTab = StackNavigator({
  Feed: {
    screen: Feed,
    path: '/',
    navigationOptions: ({ navigation }) => (header()),
  }
})

const accountTab = StackNavigator({
  Account: {
    screen: Account,
    path: '/',
    navigationOptions: ({ navigation }) => (header()),
  }
})

export default TabNavigator(
  {
    FeedTab: {
      screen: feedTab,
      path: '/feed',
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='ios-home'
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    OrganizationsTab: {
      screen: organizationsTab,
      path: '/feed',
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='ios-browsers'
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    AccountTab: {
      screen: accountTab,
      path: '/feed',
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name='ios-contact'
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#3EABEF',
      showLabel: false,
    },
  }
)