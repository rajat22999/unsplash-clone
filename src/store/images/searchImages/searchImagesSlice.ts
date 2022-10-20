import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { searchImages } from '../../../services/imageApi'

export const getSearchImages = createAsyncThunk(
  'search/getData',
  async (arg:any) => {
    const response = await searchImages(arg)
    window.scroll({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
    return response
  }
)

const searchImage = createSlice({
  name: 'searchImage',
  initialState:{
    data:[],
    isSuccess:false,
    loading:false
  },
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getSearchImages.pending, (state, {payload}) => {
      state.loading= true;
    })
    builder.addCase(getSearchImages.fulfilled, (state, {payload}) => {
      state.loading= false;
      state.data=payload.results;
      state.isSuccess=true;
    })
    builder.addCase(getSearchImages.rejected, (state, {payload}) => {
      state.loading= false;
      state.isSuccess=false;
    })
  },
})

export default searchImage.reducer