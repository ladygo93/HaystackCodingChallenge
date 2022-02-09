/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react'
import { AiFillSound, AiOutlineSound } from 'react-icons/ai'

const Song = ({ name, num, song }) => {
  const [play, setPlay] = useState(false)

  const [audio] = useState(new Audio(song))

  useEffect(() => {
    if (play) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [play])

  audio.onended = () => setPlay(!play)

  return (
    <div className="song-container">
      <p>
        {num}. {name}
      </p>
      {play ? (
        <AiFillSound className="icon-audio" onClick={() => setPlay(!play)} />
      ) : (
        <AiOutlineSound className="icon-audio" onClick={() => setPlay(!play)} />
      )}
    </div>
  )
}

export default Song
