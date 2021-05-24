import React from 'react'

export const initialState = { count: 0 }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const Context = React.createContext()
