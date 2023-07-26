import { configureStore} from "@reduxjs/toolkit";

import CartSlice from '../Redux/slice'

export const store=configureStore({
   reducer:{
    cart:CartSlice,
   
   
   },
})
