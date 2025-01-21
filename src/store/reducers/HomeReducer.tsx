const initialState = {
  author: "Prashant G Mestry",
};

const reducer = (
  state = initialState,
  action: {
    type: string;
    payload?: string | number | null;
  }
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
