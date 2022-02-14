import React, { useContext } from 'react'
import { LinearProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import { StateContext } from '../../context/StateContext'

const Loading = () => {
  const { setInputValue, setState } = useContext(StateContext)
  return (
    <div>
      <section className="loading-container">
        <h2>Loading your search results, please wait ;) !</h2>
        <LinearProgress
          sx={{
            marginTop: 2,
            background: '#3F3D56',
            borderRadius: '4px',
            height: '5px',
            '& span': { background: '#00BFA6', animationDuration: '3.5s' },
          }}
        />
        <Link
          onClick={() => {
            setState()
            setInputValue('')
          }}
          to="/"
        >
          Go back to Home Page
        </Link>
      </section>
    </div>
  )
}

export default Loading
