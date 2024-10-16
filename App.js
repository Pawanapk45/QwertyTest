// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from './src/HomeScreen';
// // import NotificationScreen from './src/NotificationScreen';
// // import SignIn from './src/SignIn';
// // import GoogleSignIn from './src/SignIn';
// // import TodoPart from './src/TodoPart';

// // const Stack = createNativeStackNavigator();

// // const App = () => {
// //   return (
// // <NavigationContainer>
// //     <Stack.Navigator>
// //         {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
// //         <Stack.Screen name="Todo Parts" component={TodoPart} />
// //         <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
// //         {/* <Stack.Screen name="Sign In" component={SignIn} /> */}
// //         {/* <Stack.Screen name="Google Sign In" component={GoogleSignIn} /> */}
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

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import { store } from './src/redux/Store'; 

import HomeScreen from './src/HomeScreen';
import NotificationScreen from './src/NotificationScreen';
import SignIn from './src/SignIn'; // Assuming you have SignIn here
import GoogleSignIn from './src/GoogleSignIn'; // Separate component for GoogleSignIn
import TodoPart from './src/TodoPart';
import NumCounter from './src/NumCounter';
import Screen from './src/Screen';
import TodoList from './src/TodoList';
import Form from './src/Form';
import foofList from './src/screens/foodList';
import Cart from './src/screens/cart';
import ApiScreen from './src/ApiScreen';
import AxiosScreen from './src/AxiosScreen';
import PostData from './src/PostData';
import AxiosLiveData from './src/AxiosLiveData';
import NoteItem from './src/Note';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Define your screens here */}
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          {/* <Stack.Screen name="Notifications" component={NotificationScreen} /> */}
          {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
          {/* <Stack.Screen name="GoogleSignIn" component={GoogleSignIn} /> */}
          <Stack.Screen name="Screen" component={Screen} />
          <Stack.Screen name="TodoList" component={TodoList} />
          {/* <Stack.Screen name="TodoPart" component={TodoPart} /> */}
          <Stack.Screen name="NumCounter" component={NumCounter} />
          <Stack.Screen name="From" component={Form} />
          <Stack.Screen name="foodList" component={foofList} />
          <Stack.Screen name="CartItem" component={Cart}/>
          <Stack.Screen name="ApiScreen" component={ApiScreen}/>
          <Stack.Screen name="AxiosScreen" component={AxiosScreen}/>
          <Stack.Screen name="LiveData" component={AxiosLiveData}/>
          <Stack.Screen name="PostData" component={PostData}/>
          <Stack.Screen name="NoteItem" component={NoteItem} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, FlatList } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // JSON Server से डेटा fetch करना
//     axios
//       .get('http://10.0.2.2:3000/users')  // लोकल JSON सर्वर से डेटा प्राप्त करना
//       .then(response => {
//         setData(response.data);  // प्राप्त डेटा को स्टेट में सेट करना
//         setLoading(false);  // लोडिंग false करना
//       })
//       .catch(error => {
//         console.log('Error fetching data:', error);
//         setLoading(false);  // एरर के केस में लोडिंग false कर देना
//       });
//   }, []);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />; // लोडिंग के दौरान स्पिनर दिखाना
//   }

//   return (
//     <View>
//       <FlatList
//         data={data}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.title}</Text>
//             <Text>{item.views}</Text>
//           </View>
//         )}
//       />
//     </View>// "id": "1", "title": "a title", "views": 100
//   );
// };

// export default App;
