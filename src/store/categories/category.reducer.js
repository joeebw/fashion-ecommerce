import { createSlice } from "@reduxjs/toolkit";

const CATEGORY_INITIAL_STATE = {
  categories: []
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORY_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    }
  }
}) 

export const {setCategories} = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

// export function categoriesReducer(state = CATEGORY_INITIAL_STATE, action = {}) {
//   const {type, payload} = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return {...state, categories: payload}
//     default:
//       return state
//   }
// }