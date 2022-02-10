import React from 'react'
import { Link } from 'react-router-dom'

const textStyle = { textAlign: 'center', marginBottom: '1rem' }
const sectionStyle = { alignSelf: 'center' }

const ErrorMsg = () => (
  <section style={sectionStyle}>
    <p style={textStyle}>
      Something went wrong, please comeback later or go to Homepage and try
      again ! :)
    </p>
    <Link to="/">Homepage</Link>
  </section>
)

export default ErrorMsg
