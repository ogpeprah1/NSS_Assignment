# NSS Assignment 

**Setting Up and Running the Application**

**Prerequisites**
Ensure you have the following installed on your machine:

Node.js (v14 or later)
npm (v6 or later) or yarn

**Installation**
Clone the Repository

**Install necessary dependencies**
npm install

**Running the Application**
Start the Development Server
Using npm:
npm start

**Structure of Redux Slices**

Overview
Redux slices are a way to modularize your Redux state management by grouping together related state and actions. Each slice contains:

Initial state
Reducers for updating state
Asynchronous actions (thunks) for handling side effects
Example: userSlice
Structure

State: The initial state of the user slice, containing loading, user, and error.
Async Thunks: Asynchronous actions using createAsyncThunk to handle side effects such as API requests.

Reducers: Functions to handle state changes based on dispatched actions.


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const req = await axios.post(`${BASE_URL}/api/signin`, userCredentials);
    const res = req.data["data"];
    console.log(res);
    localStorage.setItem("user", JSON.stringify(res));
    return res;
  }
);

// User slice definition
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Access Denied! Invalid Credentials";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;

**Usage in the Application**

Store Setup: Combine slices into a root reducer and configure the store.

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

Provider Setup: Wrap your application with the Provider component to make the Redux store available to your components.


Dispatching Actions: Use useDispatch and useSelector hooks in your components to dispatch actions and access state.
