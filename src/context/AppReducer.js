// Define action types as constants
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const ADD_TRANSACTION = 'ADD_TRANSACTION';

// Define an initial state, replace with your actual initial state structure
const initialState = {
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};
