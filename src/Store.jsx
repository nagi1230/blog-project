import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getUsers } from './Features/Dashboard.slice';



// const appReducer = combineReducers({
//     users: getUsers.reducer,
// });
// export default appReducer


const rootReducer = combineReducers({
    users: getUsers.reducer,
});

// Configure the store
const store = configureStore({
    reducer: rootReducer,
});

export default store;