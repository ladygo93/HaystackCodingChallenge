/* eslint-disable no-nested-ternary */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import Song from '../../Components/Song/Song'
import { StateContext } from '../../context/StateContext'
import Loading from '../../Components/Loading/Loading'
import ErrorMsg from '../../Components/ErrorMsg/ErrorMsg'

const Results = () => {
  const { inputValue, setInputValue, state, setState } =
    useContext(StateContext)

  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false)

        const resp = await axios.get(
          'https://xeno-canto.org/api/2/recordings',
          { params: { query: `loc:${inputValue}` } }
        )

        setState(resp.data)
      } catch (err) {
        setError(true)
      }
    }

    fetchData()
  }, [inputValue])

  return !!state && state !== undefined ? (
    <section
      className={`results ${+state.numRecordings === 0 ? 'center' : ''}`}
    >
      {/* Check for amount of results */}
      {+state.numRecordings > 0 ? (
        <>
          <h2 className="sub-heading">
            <span className="capitalize">{inputValue}</span>&apos;s top 5
          </h2>

          {/* Loop through state to display results */}
          {state.recordings.slice(0, 5).map(({ gen, file }, index) => (
            <Song key={uuidv4()} num={index + 1} name={gen} song={file} />
          ))}
        </>
      ) : (
        // No results message
        <h2 className="sub-heading">
          Sorry, we haven&apos;t found any songs by this location (
          <span className="capitalize">{inputValue}</span>)
        </h2>
      )}

      <Link
        onClick={() => {
          setState()
          setInputValue('')
        }}
        to="/"
      >
        Select a different city
      </Link>
    </section>
  ) : error ? (
    <ErrorMsg />
  ) : (
    <Loading />
  )
}

export default Results
