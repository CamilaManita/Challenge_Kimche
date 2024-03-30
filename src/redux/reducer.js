import { GET_CHARACTERS } from "./actions_types";
const initialState = {
  allCharacters: [],
  characters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
        allCharacters: payload,
      };
  }
};

export default rootReducer;
