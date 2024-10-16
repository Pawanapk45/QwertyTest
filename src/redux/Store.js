import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./featurs/todo/Todoslice";
import counterReducer from "./featurs/counterSlice/CounterSlice";
import formReducer from "./featurs/formSlice/FormSlice";
import cartReducer from "./featurs/cartSlice/CartSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: TodoReducer,
        form: formReducer,
        cart: cartReducer,
    }
})

export default store;

// import { configureStore } from '@reduxjs/toolkit'
// import { counterSlice } from './featurs/counterSlice/CounterSlice'


// export const store = configureStore({
//   reducer: {
//     counter : counterSlice,
//   }
// })
// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./featurs/counterSlice/CounterSlice"; // Import your counter reducer

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,  
//   },
// });

// export default store;

// create store
// wrap app component Provider
// create Slice
// regigster in store



