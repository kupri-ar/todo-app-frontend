import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from "./Todo.reducer";
import userDataReducer from "./UserData.reducer";

export default configureStore({
  reducer: {
    todoList: todoListReducer,
    userData: userDataReducer,
  },
});