import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


// export const INCREMENT = 'increment';


// const counterSlice = createSlice({
//     name:'counter',
//     initialState:initialCounterState,
//     reducers:{
//         increment(state){
//             state.counter++;
//         },
//         decrement(state){
//             state.counter--;
//         },
//         // increase(state,action){
//         //     state.counter = state.counter + action.amount;
//         // },
//         increase(state,action){
//             state.counter = state.counter + action.payload;
//         },
//         toggleCounter(state){
//             state.showCounter = !state.showCounter;
//         }

//     }
// });

// const counterReducer = (state=initialState,action)=>{
//     if(action.type===INCREMENT){
//         return{
//             counter:state.counter+1,
//             showCounter:state.showCounter
//         };
//     }
//     if(action.type==='increases'){
//         return{
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type==='decrement'){
//         return{
//             counter:state.counter-1,
//             showCounter:state.showCounter
//         };
//     }
//     if(action.type==='toggle'){
//         return{
//             showCounter:!state.showCounter,
//             counter:state.counter
//         }
//     }
//     return state;

// };
// const store = configureStore({reducer:counterReducer});

// const initialAuthState = {
//     isAuthenticated:false
// }

// const authSlice = createSlice({
//     name:'authentication',
//     initialState:initialAuthState,
//     reducers:{
//         login(state){
//             state.isAuthenticated = true;
//         },
//         logout(state){
//             state.isAuthenticated = false;
//         }
//     }
// })
const store = configureStore({
    // reducer:counterSlice.reducer
    reducer:{counter:counterReducer, auth:authReducer},
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
