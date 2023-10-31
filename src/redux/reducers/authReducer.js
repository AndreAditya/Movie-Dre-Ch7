import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    token: localStorage.getItem("token") || null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            if (action.payload) {
                localStorage.setItem("token", action.payload)
            } else {
                localStorage.removeItem("token");
            }

            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setToken, setIsLoggedin, setUser } = authSlice.actions;

// Export the global state, so the variable in the initialState will be available in any component
export default authSlice.reducer;
