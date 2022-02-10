import React from 'react'
import { Link } from 'react-router-dom'

const sectionStyle = {
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'end',
  gap: '45%',
}

const ErrorMsg = () => (
  <section style={sectionStyle}>
    <p>
      Something went wrong, please comeback later or go to Homepage and try
      again ! :)
    </p>
    <Link to="/">Homepage</Link>
  </section>
)

export default ErrorMsg
