import React from 'react';
import Crud from './src/screens/lab8/CRUD';


const App = () => {
  return(
    <Crud></Crud>
  );
};
// import Splash from './src/screens/auth/Splash';
// import SignUP from './src/screens/auth/SignUP';
// import SignIn from './src/screens/auth/SignIn';
// import Home from './src/screens/app/home';
// import Favorites from './src/screens/app/Favorites';
// import Profile from './src/screens/app/Profile';
// import { NavigationContainer } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tabs = () => (
//   <Tab.Navigator
//     screenOptions={({route}) => ({
//       tabBarIcon: ({focused}) => {
//         let icon;
//         if (route.name === 'Home') {
//           icon = focused
//             ? require('./src/assets/tabs/home_active.png')
//             : require('./src/assets/tabs/home.png');
//         } else if (route.name === 'Profile') {
//           icon = focused
//             ? require('./src/assets/tabs/profile_active.png')
//             : require('./src/assets/tabs/profile.png');
//         } else if (route.name === 'Favorites') {
//           icon = focused
//             ? require('./src/assets/tabs/bookmark_active.png')
//             : require('./src/assets/tabs/bookmark.png');
//         }

//         return <Image style={{width: 24, height: 24}} source={icon} />;
//       },
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarStyle: {borderTopColor: '#DADADA'},
//     })}>
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Favorites" component={Favorites} />
//     <Tab.Screen name="Profile" component={Profile} />
//   </Tab.Navigator>
// );



//  const App = () => {
//   const isSignedIn = true;
//   return ( 
//     <NavigationContainer>
//       <Stack.Navigator>
//       {isSignedIn ? (
//           <>
//             <Stack.Screen
//               name="Tabs" component={Tabs}options={{headerShown: false}}/>
//           </>
//         ) : (
//           <> 
        
//         {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
//         <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
//         <Stack.Screen name="SignUP" component={SignUP} options={{headerShown:false}}/> */}
//          </>
//         )} 
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// };

export default App;
