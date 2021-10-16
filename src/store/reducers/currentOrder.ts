import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICurrentOrder {
  id: string;
  createDate: Date | undefined;
  customer: string;
  description: string;
  costs: number;
}

export const currentOrder = createSlice({
  name: 'currentOrder',
  initialState: <ICurrentOrder>{
    id: '',
    createDate: undefined,
    customer: '',
    description: '',
    costs: 0,
  },
  reducers: {
    setCosts: (state, action: PayloadAction<number>) => {
      state.costs = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setCustomer: (state, action: PayloadAction<string>) => {
      state.customer = action.payload;
    },
  },
})

export const { setCosts, setCustomer, setDescription } = currentOrder.actions

export default currentOrder.reducer
