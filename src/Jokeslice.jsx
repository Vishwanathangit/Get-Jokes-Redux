import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  joke: "Welcome! 👋 Enter a category above to get started with some amazing Chuck Norris jokes! 🎭",
  loading: false,
  error: null,
  categories: [],
  categoriesLoading: false
};

const fetchjokes = createAsyncThunk(
  "jokes/jokescategory",
  async function (category, { rejectWithValue }) {
    try {
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      return response.data.value;
    } catch (error) {
      console.error("Error fetching joke:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch joke");
    }
  }
);

const fetchCategories = createAsyncThunk(
  "jokes/fetchCategories",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get("https://api.chucknorris.io/jokes/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch categories");
    }
  }
);

const jokeslice = createSlice({
  name: "Joke",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchjokes.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("Loading joke...");
      })
      .addCase(fetchjokes.fulfilled, (state, action) => {
        state.loading = false;
        state.joke = action.payload;
        state.error = null;
      })
      .addCase(fetchjokes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Failed to fetch joke:", action.payload);
      })
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categoriesLoading = false;
        console.error("Failed to fetch categories:", action.payload);
      });
  }
});

export default jokeslice;

const { clearError } = jokeslice.actions;

export { fetchjokes, fetchCategories, clearError };