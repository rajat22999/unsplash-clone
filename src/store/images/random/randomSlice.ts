import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { randomImage } from '../../../services/imageApi'

export const getRandomImage = createAsyncThunk(
  'random/getData',
  async () => {
    const response = await randomImage()
    return response
  }
)

const randomSlice = createSlice({
  name: 'random',
  initialState:{
    data:[],
    isSuccess:false,
    loading:false
  },

  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(getRandomImage.pending, (state, {payload}) => {
      state.loading= true;
    })
    builder.addCase(getRandomImage.fulfilled, (state, {payload}) => {
      state.loading= false;
      state.data=payload;
      state.isSuccess=true;
    })
    builder.addCase(getRandomImage.rejected, (state, {payload}) => {
      state.loading= false;
      state.isSuccess=false;
    })
  },
})

export default randomSlice.reducer