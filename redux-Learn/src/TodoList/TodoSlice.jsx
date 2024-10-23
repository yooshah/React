import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addActivity(state, action) {
      state.todo.push(action.payload);
    },
    editActivity: {
      prepare(id, data) {
        return {
          payload: { id, data },
        };
      },
      reducer(state, action) {
        state.todo[action.payload.id] = action.payload.data;
      },
    },
    deleteActivity(state, action) {
      const filteredTodo = state.todo.filter((_, id) => id != action.payload);
      state.todo = filteredTodo;
    },
    // editActivity(state, action) {
    //   state.todo[action.payload.id] = action.payload.data;
    //   //   const edditedActivity = state.todo.map((activity, ind) => {
    //   //     if (ind == action.payload.id) {
    //   //       return action.payload.correctedActivity;
    //   //     }
    //   //   });
    //   //   state.todo = edditedActivity;
    // },
  },
});

export const { addActivity, editActivity, deleteActivity } = todoSlice.actions;
export default todoSlice.reducer;
