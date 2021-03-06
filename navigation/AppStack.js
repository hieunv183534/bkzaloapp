import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from '../screens/LoginScreen';
import NhanTin from '../screens/NhanTin';
import Chat from '../screens/ChatScreen';
import DanhBa from '../screens/DanhBa';
import KhamPha from '../screens/KhamPha';
import NhatKy from '../screens/NhatKy';
import BinhLuan from '../screens/BinhLuan';
import DangBai from '../screens/DangBai';
import TrangCaNhan from '../screens/TrangCaNhan';
import TrangCaNhan2 from '../screens/TrangCaNhan2';
import CaNhan from '../screens/CaNhan';
import CaiDat from '../screens/CaiDat';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MessagesScreen from '../screens/MessagesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ThongBao from '../screens/ThongBao';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Personal = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="CaNhan"
      component={CaNhan}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="CaiDat"
      component={CaiDat}
      options={{ title: 'Cài Đặt', headerShown: true }}
    />
    <Stack.Screen
      name="DangXuat"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const Messages = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="NhanTin"
      component={NhanTin}
      options={{
        headerShown: false,
        header: () => null,
      }}
    />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const FeedStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="NhatKy"
      component={NhatKy}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Nhật ký"
      component={BinhLuan}
    />
    <Stack.Screen
      name="DangBai"
      component={DangBai}
      options={{ title: 'Đăng Bài', headerShown: true }}
    />
    <Stack.Screen
      name="AddPostScreen"
      component={AddPostScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TrangCaNhan"
      component={TrangCaNhan}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TrangCaNhan2"
      component={TrangCaNhan2}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ThongBao"
      component={ThongBao}
      options={{ title: 'Thông báo', headerShown: true }}
    />
  </Stack.Navigator>
);

const MessageStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} options={{
      header: () => null
    }} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const DanhBaStack = ({ navigation }) => (
  <Stack.Navigator>
    {/* <Stack.Screen name="DanhBa" component={DanhBa} options={{
      header: () => null
    }} /> */}
    <Stack.Screen
      name="DanhBa"
      component={DanhBa}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NhanTin"
      component={NhanTin}
      options={{
        headerShown: false,
        header: () => null,
      }}
    />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        header: () => null,
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarShowIcon: true,
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'Settings') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      // })}
      //   tabBarIcon: ({ color, size }) => {
      //     const icons = {
      //       Home: 'home',
      //       Profile: 'account',
      //       Home: 'home',
      //       Profile: 'account',
      //       Home: 'home',
      //     };

      //     return (
      //       <MaterialCommunityIcons
      //         name={icons[route.name]}
      //         color={color}
      //         size={size}
      //       />
      //     );
      //   },
      // })}
      // tabBarOptions={{
      //   activeTintColor: '#2e64e5',
      // }}

      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Tin nhắn"
        component={Messages}
        options={({ route }) => ({
          header: () => null,
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Tin Nhắn',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/icon1.png')}
                style={{ width: 25, height: 25, tintColor: focused }}
              />
              <Text style={{ tintColor: focused ? "blue" : "black", fontSize: 10 }}>Tin Nhắn</Text>
            </View>
          ),
          // tabBarIcon: ({ tintColor }) => return(<Image source={require('./assets/icon1.png')} style={{width: 26, height: 26}} />);
        })
        }
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({ route }) => ({
          header: () => null,
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Tin Nhắn',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/icon2.png')}
                style={{ width: 25, height: 25, tintColor: focused }}
              />
              <Text style={{ tintColor: focused ? "blue" : "black", fontSize: 10 }}>Danh Bạ</Text>
            </View>
          ),
          // tabBarIcon: ({ tintColor }) => return(<Image source={require('./assets/icon1.png')} style={{width: 26, height: 26}} />);
        })
        }
      />
      {/* <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarLabel: 'Tin Nhắn',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })}
      /> */}
      {/* <Tab.Screen
        name="Danh Bạ"
        component={DanhBa}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarLabel: 'Danh Bạ',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })} 
      />*/}
      <Tab.Screen
        name="Khám Phá"
        component={KhamPha}
        options={({ route }) => ({
          header: () => null,
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Tin Nhắn',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/icon3.png')}
                style={{ width: 25, height: 25, tintColor: focused }}
              />
              <Text style={{ tintColor: focused ? "blue" : "black", fontSize: 10 }}>Khám Phá</Text>
            </View>
          ),
          // tabBarIcon: ({ tintColor }) => return(<Image source={require('./assets/icon1.png')} style={{width: 26, height: 26}} />);
        })
        }
      />
      {/*<Tab.Screen
        name="Danh Bạ"
        component={DanhBa}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Khám Phá"
        component={KhamPha}
        options={{headerShown: false}}
      /> */}
      {/* <Tab.Screen name="Nhật Ký" component={NhatKy} options={{headerShown:false,}}/>
      <Tab.Screen name="Cá Nhân" component={CaNhan} options={{headerShown:false,}}/> */}
      <Tab.Screen
        name="Home"
        component={FeedStack}
        // options={({ route }) => ({
        //   header: () => null,
        //   tabBarLabel: 'Nhật Ký',
        //   // tabBarVisible: route.state && route.state.index === 0,
        //   tabBarIcon: ({ color, size }) => (
        //     <MaterialCommunityIcons
        //       name="home-outline"
        //       color={color}
        //       size={size}
        //     />
        //   ),
        // })}
        options={({ route }) => ({
          header: () => null,
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Tin Nhắn',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/icon4.png')}
                style={{ width: 25, height: 25, tintColor: focused }}
              />
              <Text style={{ tintColor: focused ? "blue" : "black", fontSize: 10 }}>Nhật Ký</Text>
            </View>
          ),
          // tabBarIcon: ({ tintColor }) => return(<Image source={require('./assets/icon1.png')} style={{width: 26, height: 26}} />);
        })
        }
      />

      <Tab.Screen
        name="Profile"
        component={Personal}
        // options={{
        //   header: () => null,
        //   tabBarLabel: 'Cá nhân',
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="person-outline" color={color} size={size} />
        //   ),
        // }}
        options={({ route }) => ({
          header: () => null,
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Tin Nhắn',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/icon5.png')}
                style={{ width: 25, height: 25, tintColor: focused }}
              />
              <Text style={{ tintColor: focused ? "blue" : "black", fontSize: 10 }}>Cá Nhân</Text>
            </View>
          ),
          // tabBarIcon: ({ tintColor }) => return(<Image source={require('./assets/icon1.png')} style={{width: 26, height: 26}} />);
        })
        }
      />
    </Tab.Navigator >
  );
};

export default AppStack;
