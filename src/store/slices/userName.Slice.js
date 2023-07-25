import { createSlice } from "@reduxjs/toolkit";


 const  nameUserSlice  = createSlice ({
     name:'nameUser',
     initialState:'',
     reducers: {
        setNameUser: (state , action )  => action.payload   
     }
 });
 export const { setNameUser } = nameUserSlice.actions

 export default nameUserSlice.reducer