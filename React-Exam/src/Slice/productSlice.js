import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3000/Shope";

export const FetchData = createAsyncThunk("Shop/FetchData", async () => {
  const res = await axios.get(api);
  return res.data;
});

export const DeleteData = createAsyncThunk("Shop/DeleteData", async (id) => {
  await axios.delete(`${api}/${id}`);
  return id;
});

export const AddData = createAsyncThunk("Shop/AddData", async (newItem) => {
  const res = await axios.post(api, newItem);
  return res.data;
});

const initialState = {
  Shop: [],
  status: "neutral",
  error: null,
};

const DataSlice = createSlice({
  name: "Shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(FetchData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(FetchData.fulfilled, (state, action) => {
      state.status = "success";
      state.Shop = action.payload; 
    });
    builder.addCase(FetchData.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });


    builder.addCase(DeleteData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(DeleteData.fulfilled, (state, action) => {
      state.status = "success";
      state.Shop = state.Shop.filter((item) => item.id !== action.payload);
    });
    builder.addCase(DeleteData.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });


    builder.addCase(AddData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(AddData.fulfilled, (state, action) => {
      state.status = "success";
      state.Shop.push(action.payload);
    });
    builder.addCase(AddData.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export default DataSlice.reducer;
