/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { FaSearch } from 'react-icons/fa'
import { StateContext } from '../../context/StateContext'

const SearchBar = () => {
  const navigate = useNavigate()

  const { setInputValue } = useContext(StateContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setInputValue(data.location)
    navigate('results')
  }

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="searchbar">
          Enter a location
          <div className="input-container">
            <FaSearch />
            <input
              {...register('location', {
                required: "This field can't be empty!",
              })}
              type="text"
              placeholder="Start typing to search"
              id="searchbar"
            />
          </div>
          <ErrorMessage
            errors={errors}
            name="location"
            render={({ message }) => <p className="error-msg">{message}</p>}
          />
        </label>

        <button className="btn-as-link" type="submit">
          Retrieve top 5
        </button>
      </form>
    </div>
  )
}

export default SearchBar
