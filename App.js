// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from './src/HomeScreen';
// // import NotificationScreen from './src/NotificationScreen';
// // import SignIn from './src/SignIn';
// // import GoogleSignIn from './src/SignIn';
// // import TodoPart from './src/TodoPart';

import { RootTagContext } from "react-native";

// // const Stack = createNativeStackNavigator();

// // const App = () => {
// //   return (
// // <NavigationContainer>
// //     <Stack.Navigator>
// //         eScreen" component={HomeScreen} /> */}
// //         <Stack.Screen name="Todo Parts" component={TodoPart} />
// //         <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
// //         n In" component={SignIn} /> */}
// //         gle Sign In" component={GoogleSignIn} /> */}
// //     </Stack.Navigator>
// // </NavigationContainer>
// //   )
// // }

// // export default App

// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from './src/HomeScreen';
// // import NotificationScreen from './src/NotificationScreen';
// // import SignIn from './src/SignIn';
// // import GoogleSignIn from './src/SignIn';
// // import TodoPart from './src/TodoPart';
// // import { Provider } from "react-redux";
// // import { store } from './src/redux/Store';

// // const App = ()=> {
// //   return (
// //     <Provider store={store}>
// //        <View>
// //         <TodoPart />
// //        </View>
// //     </Provider>
// // );

// // }
// // export default App;

// // import React from "react";
// // import { View, Text } from "react-native";

// // const App = () => {
// //   return (
// //     <View>
// //       <Text>HEllo world</Text>
// //     </View>
// //   )
// // }

// // export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from "react-redux";
// import { store } from './src/redux/Store';
// import HomeScreen from './src/HomeScreen';
// import NotificationScreen from './src/NotificationScreen';
// import SignIn from './src/SignIn'; // Assuming you have SignIn here
// import GoogleSignIn from './src/GoogleSignIn'; // Separate component for GoogleSignIn
// import TodoPart from './src/TodoPart';
// import NumCounter from './src/NumCounter';
// import Screen from './src/Screen';
// import TodoList from './src/TodoList';
// import Form from './src/Form';
// import foofList from './src/screens/foodList';
// import Cart from './src/screens/cart';
// import ApiScreen from './src/ApiScreen';
// import AxiosScreen from './src/AxiosScreen';
// import PostData from './src/PostData';
// import AxiosLiveData from './src/AxiosLiveData';
// import NoteItem from './src/Note';
// import FoodList from './src/screens/foodList';
// import NotesDetail from './src/NotesDetail';
// import AddNote from './src/AddNote';
// import DrawerHome from './src/DrawerHome';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   // const Drawer = createDrawerNavigator();
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
     
//           {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
         
//           <Stack.Screen name="Screen" component={Screen} />
//           <Stack.Screen name="TodoList" component={TodoList} />
        
//           <Stack.Screen name="NumCounter" component={NumCounter} />
//           <Stack.Screen name="From" component={Form} />
//           <Stack.Screen name="foodList" component={foofList} />
//           <Stack.Screen name="CartItem" component={Cart}/>
//           <Stack.Screen name="ApiScreen" component={ApiScreen}/>
//           <Stack.Screen name="AxiosScreen" component={AxiosScreen}/>
//           <Stack.Screen name="LiveData" component={AxiosLiveData}/>
//           <Stack.Screen name="AddNote" component={AddNote} options={{ headerShown: false }}/>
//           <Stack.Screen name="PostData" component={PostData}/>
//           <Stack.Screen name="FoodList" component={FoodList}/>
//           <Stack.Screen name="NotesDetail" component={NotesDetail}/>
//           <Stack.Screen name="NoteItem" component={NoteItem} options={{ headerShown: false }} />
//         </Stack.Navigator>
        
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;



import * as React from 'react';
import { Button, View,Text ,Image} from 'react-native';
import { createDrawerNavigator ,DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'; 
import AddNote from './src/AddNote';
import NoteItem from './src/Note';
import NotesDetail from './src/NotesDetail';
import { TouchableOpacity } from "react-native-gesture-handler";
import SignIn from './src/screens/Signin'


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Drawer Header */}
     <View style={{flexDirection: 'row',alignItems:'center'}}>
     <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXqErjmTym0abU5uzCaaxnHCVm0SakEAiyvg&s',
            }}
            style={{width: 60, height: 70,marginHorizontal:20}}
          />
        </View>
        <View>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Charlie</Text>
          <Text style={{color:'black',}}>Web developer</Text>
        </View>
     </View>

     
      <DrawerItemList {...props} />

      {/* Add custom items */}
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => alert('Custom Item Pressed')}>
          <Text style={{ color: '#333', fontSize: 18 }}></Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};



export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f0f0f0', 
        },
        drawerActiveTintColor: '#e91e63', 
        drawerInactiveTintColor: '#333',  
        drawerActiveBackgroundColor: '#ffe4e1',
        drawerInactiveBackgroundColor: '#ffffff', 
        drawerLabelStyle: {
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen name="NoteItem" component={NoteItem} />
      <Drawer.Screen name="NotesDetail" component={NotesDetail} />
      <Drawer.Screen name="AddNote" component={AddNote} />
      <Drawer.Screen name="Signout" component={SignIn} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

