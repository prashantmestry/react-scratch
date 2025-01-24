type userType = {
  firstName: string;
  lastName: string;
};

type stateProps = {
  author: string;
  userList: userType[];
};

const initialState: stateProps = {
  author: "Prashant G Mestry",
  userList: [{ firstName: "Prashant", lastName: "Mestry" }],
};

const reducer = (
  state = initialState,
  action: {
    type: string;
    payload?: string | number | null;
  }
) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, userList: [...state.userList, action.payload] };
    default:
      return state;
  }
};

export default reducer;
