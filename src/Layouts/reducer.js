import {SET_DIALOG_OPEN} from "./constants";

const layout = (state = {}, action) => {
  switch (action.type) {
    case SET_DIALOG_OPEN: return {
      ...state,
      isDialogOpen: action.payload
    };
    default: return state;
  }
}

export default layout