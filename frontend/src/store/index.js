import React from 'react'

export const initialState = { id: null }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setId':
      return {
        ...state,
        id: action.payload,
      }

    case 'setOutId':
      return {
        ...state,
        id: null,
      }

    default:
      return {
        state,
      }
  }
}
export const Context = React.createContext()
