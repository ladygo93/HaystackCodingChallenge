import React, { createContext, useState, useMemo } from 'react'

const StateContext = createContext()

const StateProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('')
  const [state, setState] = useState()

  const providerState = useMemo(
    () => ({
      inputValue,
      setInputValue,
      state,
      setState,
    }),
    [state, setState, inputValue, setInputValue]
  )

  return (
    <StateContext.Provider value={providerState}>
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider }
