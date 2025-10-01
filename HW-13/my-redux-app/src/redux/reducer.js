const initialState = {
  users: ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
  filter: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}
