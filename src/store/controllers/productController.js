export const addProduct = (state, action) => {
  state.push(action.payload)
}

export const saveProduct = (state) => {
  const newState = [...state]
  localStorage.setItem( 'data', newState)
  localStorage.setItem( 'type', typeof(newState))
  localStorage.setItem( 'len', newState.length)
}
