import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const submitContactForm = createAsyncThunk(
  'contact/submitContactForm',
  async (formData, { rejectWithValue }) => {
    try {
      // Replace with a real API endpoint when available.
      await new Promise((resolve) => setTimeout(resolve, 800))
      return { ...formData, id: Date.now() }
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong')
    }
  },
)

const initialState = {
  fields: {
    name: '',
    email: '',
    company: '',
    message: '',
  },
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  submissions: [],
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateField(state, action) {
      const { name, value } = action.payload
      state.fields[name] = value
    },
    resetForm(state) {
      state.fields = initialState.fields
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.submissions.push(action.payload)
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { updateField, resetForm } = contactSlice.actions
export default contactSlice.reducer
