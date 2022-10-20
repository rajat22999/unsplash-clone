import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { fetchImages, searchImages } from '../../../services/imageApi'

export const getImages = createAsyncThunk(
  'lorem/getData',
  async (arg:any) => {
    const response = await fetchImages(arg)
    return response
  }
)

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

const loremSlice = createSlice({
  name: 'lorem',
  initialState:{
    data:[],
    isSuccess:false,
    loading:false
  },
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(getImages.pending, (state, {payload}) => {
      state.loading= true;
    })
    builder.addCase(getImages.fulfilled, (state, {payload}) => {
      state.loading= false;
      state.data=payload;
      state.isSuccess=true;
    })
    builder.addCase(getImages.rejected, (state, {payload}) => {
      state.loading= false;
      state.isSuccess=false;
    })

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

export default loremSlice.reducer